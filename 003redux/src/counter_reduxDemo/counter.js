let initState = { num: 0 }; //状态树
const ADD = "ADD"  //增加类型
const MINUS = "MINUS" //减少类型
function reducer(state = initState, action) {
    switch (action.type) {
        case "ADD": return { num: state.num + 1 };
        case "MINUS": return { num: state.num - 1 };
        default: return state
    }
}

let store = CreateStore(reducer)
function render() {
    document.querySelector("#counter").innerHTML = store.getState().num
}

render();
store.subscribe(render) //订阅重新渲染


document.querySelector("#act").addEventListener("click", () => store.dispatch({ type: ADD }))
document.querySelector("#sub").addEventListener("click", () => store.dispatch({ type: MINUS }))