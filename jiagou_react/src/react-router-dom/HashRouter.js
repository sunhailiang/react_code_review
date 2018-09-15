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
        console.log("hashChange")
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
        let value = {
            location: this.state.location,
            history:{
                push(to){
                    window.location.hash=to
                }
            }
        }
        return (<Provider value={value}>
            {this.props.children}  {/* 3个配置的路由 */}
        </Provider>)
    }
}
