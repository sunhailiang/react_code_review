import React from "react"
import ReactDOM from "react-dom"
import {Consumer} from "./context"
import pathToRegexp from "path-to-regexp" //用来做路由的精准匹配
export default class Switch extends React.Component{
    render(){
        return(
            <Consumer>
                {
                value=>{
                    let {location:{pathname}}=value
                    let children=this.props.children
                    for(let i=0;i<children.length;i++){
                       let child=children[i]
                       let {path="/",exact=false}=child.props//给path设置默认值为"/"exact 默认值为false=非精确匹配
                       let reg=pathToRegexp(path,[],{end:exact})
                       if(reg.test(pathname)){
                           return child
                       }
                    }
                    return null
                }
                }
            </Consumer>    
        )
    }
}