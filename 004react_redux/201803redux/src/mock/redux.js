

function renderApp(appState) {
	renderTitle(appState.title);
	renderContent(appState.content);
}
function renderTitle(state) {
	let title=document.querySelector('#title');
	title.innerHTML=state.text;
	title.style.color=state.color;
}
function renderContent(state) {
	let content=document.querySelector('#content');
	content.innerHTML=state.text;
	content.style.color=state.color;
}
//规定如果想要修改appState只能通过调用dispatch方法
//action是一个动作 {type:UPDATE_TITLE_COLOR,color:'orange'}
const UPDATE_TITLE_COLOR='UPDATE_TITLE_COLOR';//更新标题颜色
const UPDATE_CONTENT_TEXT='UPDATE_CONTENT_TEXT';//更新内容文本
function dispatch(action) {
	switch (action.type) {
		case UPDATE_TITLE_COLOR:
			appState.title.color=action.color;
			break;
		case UPDATE_CONTENT_TEXT://{type:UPDATE_CONTENT_TEXT,text:'新内容'}
			appState.content.text=action.text;
			break;
		default:
			break;
	}
}

function createStore(reducer) {
	let state;
	let listeners=[];
	function getState() {
		return JSON.parse(JSON.stringify(state));
	}
	function dispatch(action) {
		state=reducer(state,action);
		listeners.forEach(l=>l());
	}
	function subscribe(listener) {
		listeners.push(listener);
		return function () {
			listeners = listeners.filter(item=>item!=listener);
		}
	}
	dispatch({type:'@@INIT'});
	return {
		getState,
		dispatch,
		subscribe
	}
}
let initState = {
	title: {
		color: 'red',
		text:'标题'
	},
	content: {
		color: 'green',
		text:'内容'
	}
};
//处理器 传入老的状态和 action，返回新的状态 
function reducer(state=initState,action) {
	switch(action.type){
		case UPDATE_TITLE_COLOR:
			return {
				...state,
				title: {
					...state.title,
					color: action.color
				}
			};
		case UPDATE_CONTENT_TEXT:
			return {
				...state,
				content: {
					...state.content,
					text:action.text
				}
			}
		default:
			return state;
	}
}
let store=createStore(reducer);
function render() {
	renderApp(store.getState());
}
render();
store.subscribe(render);

setTimeout(function () {
	store.dispatch({type: UPDATE_TITLE_COLOR,color: 'orange'});
	store.dispatch({type: UPDATE_CONTENT_TEXT,text: '新的内容'});
},3000);