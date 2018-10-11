import React from "react"
import { Consumer } from "./context"
import { bindActionCreator } from "../redux"
//链接仓库和组件
//mapStateToProps 是一个函数把状态映射成一个属性对象
//mapDispatchToProps 把dispatch方法映射成一个属性对象
export default function (mapStateToProps, mapDispatchToProps) {
    return function (Com) {
        //组件内实现仓库和组件链接
      
        class Proxy extends React.Component {
            //拿到最终reduce后的状态
            state=mapStateToProps(this.props.store.getState())
            componentDidMount() {
                // console.log("props", mapStateToProps(this.props.store.getState()))//undefined
				
                this.unsubscribe = this.props.store.subscribe(() => {
                    this.setState(mapStateToProps(this.props.store.getState()))
                })
            }
            //取消订阅
            componentWillUnmount = () => {
                this.unsubscribe()
            }
            render() {
                let actions = {}
                //如果是个函数执行后直接得到属性对象
                if (typeof mapDispatchToProps === "function") {
                    actions = mapDispatchToProps(this.props.store.dispatch)
                    //如果是一个对象，手动绑定
                } else {
                    console.log("not function", this.props.store.dispatch)
                    actions = bindActionCreator(mapDispatchToProps, this.props.store.dispatch)
                }
                return <Com {...this.props.store.getState()}{...actions} />
            }
        }
        return () => (

            <Consumer>
                {
                    // value => {console.log("拿到provider",value.store)}
                    value => <Proxy store={value.store} />
                }
            </Consumer>
        )
    }
}