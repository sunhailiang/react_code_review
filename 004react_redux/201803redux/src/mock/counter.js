let initState={number: 0}
const ADD='ADD';//增加1
const MINUS='MINUS';//减少1
function reducer(state=initState,action) {
	switch (action.type) {
		case ADD:
			return {number: state.number+1};
		case MINUS:
			return {number: state.number-1};
		default:
			return state;
	}
}
let store=createStore(reducer);
function render() {
	document.querySelector('#counter').innerHTML=store.getState().number;
}
render();
store.subscribe(render);
document.querySelector('#addBtn')
	.addEventListener('click',() => store.dispatch({type: ADD}));
	document.querySelector('#minusBtn')
	.addEventListener('click',() => store.dispatch({type:MINUS}));