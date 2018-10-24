import { ADD, MINUS,MULT } from "../action-types"
let initState = { num: 0 };
export default function reducer(state = initState, action) {
    switch (action.type) {
        case ADD: return { num: state.num + (action.payload || 1) };
        case MINUS: return { num: state.num - (action.payload || 1) };
        case MULT: return { num: state.num * (action.payload || 2) };
        default: return state
    }
}