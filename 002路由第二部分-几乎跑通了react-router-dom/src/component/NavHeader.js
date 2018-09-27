import React from "react"
import {WithRouter} from "../react-router-dom"
 class NavHeader extends React.Component {
    render() {
        return (
            <div className="navbar-header">
                <a onClick={() => {
                    this.props.history.push("/")
                }} className="navbar-brand">管理系统</a>
            </div>
        )
    }
}
//NavHeader本来是个普通组件跟Router没有关系，但是用了WithRouter高阶组件就能返回props等路由信息
export default WithRouter(NavHeader)