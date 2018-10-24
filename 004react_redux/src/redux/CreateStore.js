export default function CreateStore(reducer, initState, enchancer) {
    //store=createStore(reducer,{},applyMiddleware(thunk,CreateStore,reducer))对应中间件使用的兼容性写法
    if (enchancer) {
        return enchancer(CreateStore)(reducer, initState)
    }

    let state;//仓库内部保存一棵状态树（任意类型）
    let listeners = [];//用来状态改变
    function getState() {
        return JSON.parse(JSON.stringify(state))
    }
    //组件派发任务给仓库
    function dispatch(action) {
        //调用reducer,进行处理，其实就是传入老的state，返回新的state
        state = reducer(state, action)//状态发生改变
        listeners.forEach(listener => {//一旦状态发生改变就将所有组件状态都更新,
            listener()
        });
    }
    function subscribe(listener) { //获取需要重新渲染的组件
        listeners.push(listener)
        //取消订阅
        return function () {
            listeners = listeners.filter(item => item !== listener)
        }
    }
    dispatch({ type: "@@init" })//此处只要有个对象随便写，只要不与发布任务的type相同即可
    return {
        getState,
        dispatch,
        subscribe
    }
}