export default function (actions, dispatch) {
    // let newActions = {}
    // for (let key in actions) {
    //     newActions[key] = () => dispatch(actions[key]()) //获取actions的对象，遍历然后打包成对象
    // }
    // return newActions

    return Object.keys(actions).reduce(
        (memo, key) => {
            memo[key] = (...args) => dispatch(actions[key](...args)); //...args可以传参
            console.log("memo", memo)
            return memo
        }, {}) //简洁写法

}
//此函数将action和对应的方法绑定