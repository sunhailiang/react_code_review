export default function (actions,dispatch) {
	//actions = {add(){return {type:ADD}},minus(){return {type:'MINUS'}}}
	return Object.keys(actions).reduce(
		(memo,key) => {
			memo[key]=(...args) => dispatch(actions[key](...args));
			return memo;
		},{});
}
//redux react-redux redux-thunk redux-logger 
//redux-promise redux-saga immutable dva
/**
 * 手写路由后半部分 路由权限 Prompt withRouter render children 函数复用(context api)
 * redux createStore bindActionCreators
 */