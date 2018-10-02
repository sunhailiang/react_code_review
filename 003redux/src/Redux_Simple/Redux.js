

function renderApp(appState) {
    renderTitle(appState)
    renderContent(appState)
}
function renderTitle(state) {
    var title = document.querySelector("#title")
    title.innerHTML = state.title.text
    title.style.color = state.title.color
}
function renderContent(state) {
    var content = document.querySelector("#content")
    content.innerHTML = state.content.text
    content.style.color = state.content.color
}

//想要修改状态只能通过dispatch发布事件
//action是一个动作,这个动作包括你要操作的类型和操作的内容
const UPDATE_TITLE_COLOR = "UPDATE_TITLE_COLOR"
const UPDATE_CONTENT_TEXT = "UPDATE_CONTENT_TEXT"

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

let initState = {
    title: {
        color: "red",
        text: "标题"
    },
    content: {
        color: "green",
        text: "内容"
    }
}

//reducer处理器，传入老的状态和action返回新的状态
function reducer(state = initState, action) {
    switch (action.type) {
        case "UPDATE_TITLE_COLOR": return {
            ...state,
            title: {
                ...state.title,
                color: action.color
            }
        };
        case "UPDATE_CONTENT_TEXT": return {
            ...state,
            content: {
                ...state.content,
                text: action.text
            }
        };
        default: return state
    }
}
let store = CreateStore(reducer) //创建一个仓库请放入业务的处理函数

function render() {
    renderApp(store.getState())
}
render();//获取默认状态

store.subscribe(render);//发布者，只要仓库的中state发生改变就用此发布者重新渲染
setTimeout(() => (
    store.dispatch({ type: UPDATE_TITLE_COLOR, color: "yellow" }),
    store.dispatch({ type: UPDATE_CONTENT_TEXT, text: "换了个内容" })

), 2000)
