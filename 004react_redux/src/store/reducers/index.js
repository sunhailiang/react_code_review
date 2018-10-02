import {combineReducer} from "../../redux"
import counterReducer from "./counterReducer"

//合并reducer,将多个reducer合并成一个reducer，key决定了合并后状态中的属性名
export default combineReducer({counterReducer})
