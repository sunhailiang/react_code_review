import React, { Component } from "react"
import { Consumer } from "./context"
import pathToRegexp from "path-to-regexp" //用来做路由的精准匹配
export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        let { location: { pathname } } = value//用户输入的url
                        //此处是重命名
                        let { path = "/", component: Component, exact = false, render, children } = this.props //因为this指向Route所以能够解析自身的props
                        let keys = []
                        let regexp = pathToRegexp(path, keys, { end: exact })
                        let res = pathname.match(regexp); //将用户输入的地址转换成这则表达式，并从中匹配出一些列参数
                        //数据提供者的一系列数据传递下去，只要路由跳到组件通过props获取参数
                        let props = {
                            location: value.location,
                            history: value.history
                        }

                        //核心需要仔细分析 //参考pathToRegexp>pathToRegexp.js
                        if (res) {
                            console.log("this.props", this.props)
                            let [, ...values] = res
                            keys = keys.map(key => key.name)
                            let params = keys.reduce((memo, name, index) => {
                                memo[name] = values[index]
                                return memo
                            }, {});
                            //匹配成功，获取路径参数
                            let match = {
                                url: pathname,
                                path,
                                params
                            }
                            props.match = match
                            if (Component) {
                                return <Component {...props} />
                            } else if (render) {
                                return render(props)
                            } else if (children) {
                                return children(props)
                            } else {
                                return null
                            }


                        } else {
                            if (children) {
                                return children(props)
                            }
                            return null
                        }
                    }
                }
            </Consumer>
        )
    }
}