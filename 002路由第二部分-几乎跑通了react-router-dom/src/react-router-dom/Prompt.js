import React from "react"
import { Consumer } from "./context"
export default class Prompt extends React.Component {
    componentWillUnmount() {
        this.history.unblock();
    }
    render() {
        return (
            <Consumer>
                {
                    value => {
                        let { when, message } = this.props
                        this.history = value.history
                        if (when) {
                            value.history.block(message)
                        } else {
                            value.history.unblock(message)
                        }
                    }
                }
            </Consumer>
        )
    }
}