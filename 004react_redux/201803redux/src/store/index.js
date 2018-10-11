import reducers from './reducers';
import {createStore,applyMiddleware} from '../redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
//let store=createStore(reducers);
/**
//得到原来的dispatch方法
let dispatch=store.dispatch;
store.dispatch=function (action) {
	console.log(store.getState());
	dispatch(action);
	console.log(store.getState());
}
*/
//一个redux中间件


function promise1({dispatch,getState}) {
	return function (next) {
		return function (action) {
			if (action.then && typeof action.then == 'function') {
				action.then(dispatch);
			} else if (action.payload&& action.payload.then && typeof action.payload.then == 'function') {
				action.payload.then(payload => {
					dispatch({...action,payload});
				},payload => {
					dispatch({...action,payload});
				});
			} else {
				next(action);
			}
		}
	}
}
function thunk1({dispatch,getState}) {
	return function (next) {
		return function (action) {
			//如果发过来的action是一个函数，则让他执行
			if (typeof action == 'function') {
				action(dispatch,getState);
	        //如果说不是一个函数，那么直接传给老的store.dispatch			
			} else {
				next(action);
			}
		}
	}
}
function logger1(store) {
	return function (next) {
		return function (action) {
			console.log(`老值`,store.getState().counter1.number);
			next(action);
			console.log(`新值`,store.getState().counter1.number);
		}
	}
}
//1参数是reducer 2参数是初始状态 3 参数是applyMiddleware
let store=createStore(reducers,{},applyMiddleware(promise,thunk,logger));
//let store=applyMiddleware(promise,thunk,logger)(createStore)(reducers);
export default store;


//应用中间件
/**
function applyMiddleware(middleware) {
	return function (createStore) {
		return function (reducers) {
			let store=createStore(reducers);//这就是原始的仓库 dispatch 就是原始的dispatch
			let dispatch;//dispatch方法指向新的dispatch方法
			let middleware2=middleware({
				getState: store.getState,
				dispatch:action=>dispatch(action)
			});//调用第一把第一层去掉
			dispatch=middleware2(store.dispatch);//再调用第二次把第二层去掉
			return {
				...store,
				dispatch
			}
		}
	}
}
 */