import React from "react"
import { Route, Link } from "../../react-router-dom"
import "./menulink.css"
//Route渲染的三种方式，component,render,children(匹配都会成功)
export default ({ to, label, exact=false }) => (
    <Route path={to} exact={exact}
        children={
            ({ match }) => <li className={match ? "active" : ""}><Link to={to}>{label}</Link></li>
        }
    />
)