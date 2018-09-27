import React from "react"
import { Consumer } from "./context";
export default class Back extends React.Component {
    render() {
        return (
             <Consumer>
                 {
                     value=>{
                       
                         return <a onClick={()=>value.history.goback()}>返回上一步</a>
                     }
                 }
             </Consumer>
        )
    }
}