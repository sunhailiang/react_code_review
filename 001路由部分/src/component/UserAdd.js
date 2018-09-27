import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import userApi from "../api/api"
export default class UserAdd extends React.Component {
    handleSubmit = (event) => {
        event.defaultPrevented  //阻止默认事件，否form提交会刷新页面
        let username = this.username.value
        let email = this.email.value
        let user = { username, email }
        userApi.createUser(user)
        this.props.history.push("/user/list")
    
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username" className="control-label">用户名</label>
                    {/* ref={input=>this.username=input} ref:当虚拟dom元素渲染真实元素并且渲染到页面时执行 */}
                    <input ref={input => this.username = input} type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="email" className="control-label">邮箱</label>
                    <input ref={input => this.email = input} type="email" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="username" className="control-label"></label>
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        )
    }
}