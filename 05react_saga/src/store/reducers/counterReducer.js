import * as types from "../action-types"
export default function (state = { num: 0 }, action) {
    switch (action.type) {
        case types.ADD:
            return { num: state.num + 1 };
        default:
            return state
    }
}