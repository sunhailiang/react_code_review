import React, { Component } from "react"
import { Provider } from "./context"
//hash:每当地址栏发生改变时都需要重新匹配
export default class HashRouter extends Component {

    state = {
        location: {
            pathname: window.location.hash ? window.location.hash.slice(1) : "/"
        }
    }
    componentDidMount() {
        window.addEventListener("hashchange", () => {
            this.setState({
                location: {
                    ...this.state.location,
                    pathname: window.location.hash ? window.location.hash.slice(1) : "/"
                }
            })
        })
    }
    render() {
        let that = this
        let value = {
            location: that.state.location,
            history: {
                push(to) {
                    if (that.block) {
                        let ok = window.confirm(that.block(typeof to == "object" ? to : { pathname: to }))
                        if (!ok) {
                            return
                        }
                    }
                    if (typeof to === "object") {
                        let { pathname, state } = to
                        that.setState({
                            ...that.state,
                            location: {
                                ...that.state.location,
                                pathname,
                                state
                            }
                        }, () => {
                            window.location.hash = pathname
                        });
                    } else {
                        window.location.hash = to
                    }
                },
                //注意一下的两个函数在react路由组件中并不存在
                goback() {
                    window.history.go(-1)
                },
                forward() {
                    window.history.forward()
                },
                block(message) {
                    that.block = message
                },
                unblock(message) {
                    that.block = null
                }
            }
        }
        return (<Provider value={value}>
            {this.props.children}  {/* 3个配置的路由 */}
        </Provider>)
    }
}
