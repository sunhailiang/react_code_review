import { ADD, MINUS, MULT } from "../action-types"
export default {
    add(payload) {
        return { type: ADD, payload }
    },
    sub(payload) {
        return { type: MINUS, payload }
    },
    mult(payload) {
        return function() {
            setTimeout(function () {
                { type: MULT, payload }
            }, 1000)
        }

    }
}