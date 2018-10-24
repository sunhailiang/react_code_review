import React from "react"
import { } from "redux"
import { connect } from "react-redux"
import actions from "../store/actions"
class Counter extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.num}</p>
                <button onClick={this.props.add}>+</button>
            </div>
        )
    }
}
export default connect(
    state => state,
    actions
)(Counter)
