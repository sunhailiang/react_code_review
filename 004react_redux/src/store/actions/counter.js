import { ADD, MINUS } from "../action-types"
export default {
    add(payload) {
        return { type: ADD, payload }
    },
    sub(payload) {
        return { type: MINUS, payload }
    }
}