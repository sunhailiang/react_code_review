import { createStore, applyMiddleware } from "redux"
import reducer from "./reducers/counterReducer"
// import createSagaMiddleware from "redux-saga"
// import {rootSaga} from "../saga"
import createSagaMiddleware from "../redux-saga"
import {saga} from "../saga_test_mypacket"
// redux-saga 是一个管理 Redux 应用异步操作的中间件，
// 功能类似redux-thunk + async/await, 
// 它通过创建 Sagas 将所有的异步操作逻辑存放在一个地方进行集中处理。
let sagaMiddle = createSagaMiddleware()
let store = applyMiddleware(sagaMiddle)(createStore)(reducer)
//开始执行
// sagaMiddle.run(rootSaga,store)//一、中间件里面传参：此处就是将store当做参数传给rootSaga
sagaMiddle.run(saga,store)//二、不传参，通过put方式发布事件
// let store = createStore(reducer)
export default store