function createSagaMiddleWare() {
    function sagaMiddleWare({ getState, dispatch }) {
        //函数只调用一次
        function take() {
            let taker
            function subcribe(actionType, cb) {
                taker[actionType] = cb//一个任务类型对应一个callback函数
            }
            function publish(action) {
                let take = taker[action.type]
                //判断是否有监听函数
                if (take) {
                    let tmp = take
                    delete take[action.type]//存在即执行，且删除
                    tmp(action)
                }
            }
            return { subcribe, publish }
        }
     
        let t=take()
        function run(generator) {
            let it = generator()
            function next(action) {
                let { value: effect, done } = it.next(action);
                if (!done) {
                    switch (effect.type) {
                        //take相当于注册一个监听
                        case "take":
                            let { actionType } = effect
                            t.subcribe(actionType,next); break;
                        case "put":
                            let { action } = effect
                            dispatch(action)
                            next(action);
                            break;
                        default: break;
                    }
                }
            }
            next()

        }
        sagaMiddleWare.run = run
        return function (next) {
            return function (action) {
                t.publish(action)
                next(action)
            }
        }
    }
    return sagaMiddleWare
}
export default createSagaMiddleWare