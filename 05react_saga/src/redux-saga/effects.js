function take(actionType) {
    return {
        type: "take", actionType
    }
}

function put(action) {
    return {
        type: "put",
        action
    }
}
export {
    take,
    put
}