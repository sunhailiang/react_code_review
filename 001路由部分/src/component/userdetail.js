import React from "react"
import UserApi from "../api/api"
export default class UserDetail extends React.Component {
    state = {
        user: {}
    }
    componentDidMount() {
        let id = this.props.match.params.id
        let user = UserApi.getuser(id)
        this.setState({
            user
        })

    }
    render() {
        let user=this.state.user
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>用户名</th>
                            <th>邮箱</th>
                        </tr>
                    </thead>
                    <tbody>
                       <tr>
                           <td>{user.id}</td>
                           <td>{user.username}</td>
                           <td>{user.email}</td>
                       </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}