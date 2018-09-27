import React from "react"
import ReactDom from "react-dom"
import { HashRouter as Router, Route, Link, BrowserRouter, Switch, Redirect, Back } from "./react-router-dom"
import User from "./component/user"
import Profile from "./component/profile"
import Home from "./component/home"
import "bootstrap/dist/css/bootstrap.min.css"
import Protected from "./component/Protected"  //路由守护者
import Login from "./component/login"
import MenuLink from "./component/menulink/menulink"
import NavHeader from "./component/NavHeader"
class App extends React.Component {
    render() {
        return (
            <div>

                <Router>
                    <div>
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">

                                {/* <div className="navbar-header">
                                    <a className="navbar-brand" href="#">Brand</a>
                                </div> */}
                                <NavHeader/>
                                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <MenuLink to="/" label="首页" exact={true}/>
                                        <MenuLink to="/user" label="用户页" exact={true}/>
                                        <MenuLink to="/profile" label="配置" exact={true}/>
                                        {/* <li><Link to="/user"></Link></li>
                                        <li><Link to="/profile">配置</Link></li> */}
                                        {/* <li><Back/></li> 注意，此处只是演示代码，官方代码库并无此组件*/}
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/user" component={User} />
                            <Protected path="/profile" component={Profile} />
                            <Route path="/login" component={Login} />
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
ReactDom.render(<App />, window.root)
