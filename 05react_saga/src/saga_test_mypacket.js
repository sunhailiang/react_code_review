import { take,put} from "./redux-saga/effects"
import *  as types from "./store/action-types"
export function* saga(){
    let action=yield take(types.ASYN_ADD)
    yield put({type:types.ADD})
}