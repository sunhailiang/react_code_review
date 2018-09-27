import React from "react"
import ReactDome from "react-dom"
import { Consumer } from "./context"
export default class Link extends React.Component {
    render() {
        return (
            <Consumer>
                {
                    value => {
                        let { history: { push } } = value
                        return <a onClick={() => push(this.props.to)}>{this.props.children}</a>
                    }
                }
            </Consumer>
        )
    }
}