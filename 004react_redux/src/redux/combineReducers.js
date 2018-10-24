//redux应用只有一个仓库，只能有一个reducer
//此函数将所有的reducer合并成一个统一交给仓库处理
export default function (reducers) {
    //返回合并后的reducer
    return function (state={}, action) {
        let newState = {}
        for (let key in reducers) {
            //此处遍历的所有传进来的educer，然后单独获取state，拿到action判断执行
            //key就是类似于传进来对象{counterReducer：counterReducer}中key
            //state就是合并后的状态树
            newState[key] = reducers[key](state[key], action)
        }
        return newState
    }   
}