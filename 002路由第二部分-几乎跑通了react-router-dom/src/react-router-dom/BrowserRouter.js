import React, { Component } from "react"
import { Provider } from "./context"
//hash:每当地址栏发生改变时都需要重新匹配
export default class BrowserRouter extends Component {
    state = {
        location: {
            pathname: window.location.pathname
        }
    }

    render() {
        let value = {
            location: window.location.pathname,
            history:{
                push(to){
                    window.location.pushState({},null,to )
                }
            }
        }
        return (<Provider value={value}>
            {this.props.children}  {/* 3个配置的路由 */}
        </Provider>)
    }
}
