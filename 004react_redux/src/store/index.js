import reducer from "./reducers"
import { CreateStore, applyMiddleware } from "../redux"
let store = CreateStore(reducer)

//中间件的原理就是通过对dispatch的拦截二次修改实现的
// let dispatch=store.dispatch
// store.dispatch=function(action){
//    console.log("任务发布前",store.getState())
//    dispatch(action)
//    console.log("任务发布后",store.getState())

// }

//模拟一个中间件
function logger(store) {
    return function (next) {//next就是dispatch
        return function (action) {
            console.log("老值", store.getState().counterReducer.num)
            next(action)
            console.log("新值", store.getState().counterReducer.num)
        }
    }
}
//模拟thunk中间件
function thunk(store) {
    return function (next) {
        return function (action) {
            console.log("action", action)
            console.log("next", next)
            if (typeof action == "function") {
                action(store.dispatch, store.getState)
            } else {
                next(action)
            }
        }
    }
}

store=CreateStore(reducer,{},applyMiddleware(logger,CreateStore,reducer))


// store = applyMiddleware(thunk)(CreateStore)(reducer)

export default store