import React from "react"
import {Consumer} from "./context"
export default class Redirect extends React.Component{
    render(){
        return(
            <Consumer>
                {
                    value=>{
                        console.log(this.props.to)
                        value.history.push(this.props.to)
                        return null
                    }
                }
            </Consumer>
        )
    }
}