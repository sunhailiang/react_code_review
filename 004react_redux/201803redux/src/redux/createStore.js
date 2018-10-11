export default function createStore(reducer,initState,enchancer) {
	if (enchancer) {
		return enchancer(createStore)(reducer,initState);
	}
	//仓库内部保存了一颗状态树。可以是任意类型
	let state;
	let listeners=[];
	function getState() {
		return JSON.parse(JSON.stringify(state));
	}
	//组件可以派发动作给仓库
	function dispatch(action) {
		//调用reducer进行处理，获取老的state,计算出新的state
		state=reducer(state,action);
		//通知其他的组件
		listeners.forEach(l=>l());
	}
	//如果说其他的组件需要订阅状态变化时间的话，
	function subscribe(listener) {
		listeners.push(listener);
		return function () {
			listeners = listeners.filter(item=>item!==listener);
		}
	}
	dispatch({type:'@@INIT'});
	return {
		getState,
		dispatch,
		subscribe
	}
}