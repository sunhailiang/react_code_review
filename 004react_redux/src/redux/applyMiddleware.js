import { compose } from "./index"
//应用中间件
export default function applyMiddleware(...middlewares) {
    return function (CreateStore) {
        return function (reducer) {
            let store = CreateStore(reducer)//原始dispatch
            // let dispatch = _middleware(store.dispatch) //dispatch---action
            let dispatch;
            let _middleware = middlewares.map(middleware => middleware({
                getState: store.getState,
                dispatch: action => dispatch(action)
            }))
            dispatch = compose(..._middleware)(store.dispatch)
            return {
                ...store,
                dispatch
            }
        }
    }
}