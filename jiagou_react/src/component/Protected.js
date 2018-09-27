import { Route, Redirect } from "../react-router-dom"
import React from "react"

export default function ({ component: Component, ...rest }) {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem("logined") ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location.pathname } }} />
        )} />
    )
}