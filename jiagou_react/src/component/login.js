import React from "react"
export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    login = () => {

        localStorage.setItem("logined", "ok")
        this.props.history.push(this.props.location.state.from)
    }
    render() {
        return (
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={() => this.login()} className="btn btn-default">Submit</button>
            </div>
        )
    }
}