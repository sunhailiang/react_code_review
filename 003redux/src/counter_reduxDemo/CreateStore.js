function CreateStore(reducer) {
    let state;//默认undefined
    let listeners = [];//用来状态改变
    function getState() {
        return JSON.parse(JSON.stringify(state))
    }
    function dispatch(action) {
        state = reducer(state, action)//状态发生改变
        listeners.forEach(listener => {//一旦状态发生改变就将所有状态都更新
            listener()
        });
    }
    dispatch({ type: "@@init" })//此处只要有个对象随便写，只要不与发布任务的type相同即可
    function subscribe(listener) { //获取需要重新渲染的组件
        listeners.push(listener)
        
        //取消订阅
        return function (){
            listeners=listeners.filter(item=>item!=listener)
        }
    }
    return {
        getState,
        dispatch,
        subscribe
    }
}