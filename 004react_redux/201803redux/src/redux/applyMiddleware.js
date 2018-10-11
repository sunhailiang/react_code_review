import compose from './compose';
export default function (...middlewares) {
	return function (createStore) {
		return function (reducers) {
			let store=createStore(reducers);//这就是原始的仓库 dispatch 就是原始的dispatch
			let dispatch;//dispatch方法指向新的dispatch方法
			let middlewares2 = middlewares.map(middleware=>middleware({
				getState: store.getState,
				dispatch:action=>dispatch(action)
			}));
			dispatch=compose(...middlewares2)(store.dispatch);//再调用第二次把第二层去掉
			return {
				...store,
				dispatch
			}
		}
	}
}