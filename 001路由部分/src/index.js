import React from "react"
import ReactDom from "react-dom"
import { HashRouter as Router, Route, Link, BrowserRouter, Switch, Redirect,Back,Forward } from "./react-router-dom"
import User from "./component/user"
import Profile from "./component/profile"
import Home from "./component/home"
import "bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">

                            <div className="navbar-header">
                                <a className="navbar-brand" href="#">Brand</a>
                            </div>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/">首页</Link></li>
                                    <li><Link to="/user">用户页</Link></li>
                                    <li><Link to="/profile">配置</Link></li>
                                    {/* <li><Forward/></li> */}
                                    <li><Back/></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/profile" component={Profile} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </div>

        )
    }
}
ReactDom.render(<App />, window.root)
