import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    constructor(props) {
        super(props)
        console.log("1:constructor")
        this.state = {
            num: 0
        }
    }
    //组件挂载
    componentWillMount() {
        console.log("componentWillMount")
    }
    //组件挂载完成
    componentDidMount() {
        console.log("componentDidMount")
    }
    //接收父组件的值
    componentWillReceiveProps() {
        console.log("componentWillReceiveProps")
    }
    //是否要更新
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }
    //即将更新
    componentWillUpdate() {
        console.log("componentWillUpdate")
    }
    render() {
        { console.log("render") }
        return (

            <div>{this.state.num} <button onClick={() => { this.setState({ num: ++this.state.num }) }}>加加</button>
                <Child num={this.state.num} />
            </div>
        )
    }
    //更新完成
    componentDidUpdate() {
        console.log("componentDidUpdate")
    }
}


class Child extends React.Component {
    constructor(props) {
        console.log("child:constructor")
        super(props)
    }
    //组件挂载
    componentWillMount() {
        console.log("child componentWillMount")
    }
    //组件挂载完成
    componentDidMount() {
        console.log("child componentDidMount")
    }
    //接收父组件的值
    componentWillReceiveProps() {
        console.log("child componentWillReceiveProps")
    }
    //是否要更新
    shouldComponentUpdate() {
        console.log("child shouldComponentUpdate")
        return true
    }
    //即将更新
    componentWillUpdate() {
        console.log("child componentWillUpdate")
    }
    render() {
        return (
            <div style={{ color: "red" }} >
                {
                    this.props.num
                }
            </div>
        )
    }
    //更新完成
    componentDidUpdate() {
        console.log("child componentDidUpdate")
    }
}
ReactDom.render(<App />, window.root)