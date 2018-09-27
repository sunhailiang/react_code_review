import React from "react"
import ReactDom from "react-dom"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { num: 0 }
    }
    //es7语言直接将this指向上层，即当前组件
    addNum = () => {
        // console.log(this)
        // this.setState({ num: ++this.state.num },()=>{
        //     this.setState({ num: ++this.state.num })
        // })
        // this.setState((prevState) => ({ num: prevState.num + 1 }))  //默认此时num:0
        // this.setState((prevState) => ({ num: prevState.num + 1 }))  //上次+1：此处默认再+1

         this.timer = setInterval(() => {
            this.setState((prevState) => ({ num: prevState.num + 1 }))
        }, 1000)
    }
    remove = () => {
        ReactDom.unmountComponentAtNode(window.root)
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return <div>
            {this.state.num}
            <button onClick={this.addNum}>+</button>
            <button onClick={this.remove}>卸载组件</button>
        </div>
    }

}
ReactDom.render(<App />, window.root)