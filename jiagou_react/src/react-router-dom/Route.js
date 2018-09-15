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
                        let { path, component: Component, exact } = this.props //因为this只想Route所以能够解析自身的props
                        let keys = []
                        let regexp = pathToRegexp(path, keys, { end: exact })
                        let res = pathname.match(regexp);
                        if (res) {
                            return <Component />
                        } else {
                            return null
                        }
                    }
                }
            </Consumer>
        )
    }
}