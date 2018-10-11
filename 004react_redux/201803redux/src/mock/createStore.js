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