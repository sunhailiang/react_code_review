import { ADD, MINUS } from "../action-types"
let initState = { num: 0 };
export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD: return { num: state.num + (action.payload || 1) };
        case MINUS: return { num: state.num - (action.payload || 1) };
        default: return state
    }
}