import React from "react"
import { render } from "react-dom"
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date().toLocaleString()
    }
  }
  componentDidMount() { //render执行完执行
    setInterval(()=>{
      this.setState({date: new Date().toLocaleString() })
    }, 1000)
  }
  render() {
    return (
      <div>
        {this.state.date}
      </div>
    )
  }
}
render(<Clock />, window.root)

