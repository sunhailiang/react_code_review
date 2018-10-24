import { takeEvery, put, all,call} from "redux-saga/effects"
import *  as types from "./store/action-types"
const delay = ms => new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve();
    }, ms)
})

function* add(dispatch) {
    // setTimeout(() => {
    //     dispatch({ type: types.ADD })
    // }, 1000);
    yield call(delay,1000)//call：代执行函数，并经参数一并传入
    yield put({ type: types.ADD }) //使用put只会saga中间件，向仓库派发动作
}

function* watchAdd() {
    yield takeEvery(types.ASYN_ADD, add)//监听并拦截执行指定函数
}

export function* rootSaga({ getState, dispatch }) {//结构出store
    yield watchAdd()
}


//saga分为3类，1，rootSaga,2,监听saga,3,worker干活的saga

// function* logger(action) {
//     console.log(action)//一、{type: "ASYN_ADD"} 二、saga.js:12 {type: "ADD", @@redux-saga/SAGA_ACTION: true}
// }
// function* watchLogger() {
//     yield takeEvery("*", logger)//*号统配所有操作内容
// }
// function* watchAdd() {
//     yield takeEvery(types.ASYN_ADD, add)//监听并拦截执行指定函数
// }
//监听，拦截处理复杂业务
// export function* rootSaga({ getState, dispatch }) {//结构出store
//     // yield takeEvery(types.ASYN_ADD, add, dispatch)//一、此处中间件传参，也是将dispatch传给add
//     yield all([watchLogger(), watchAdd()]) //通过put发布事件
// }