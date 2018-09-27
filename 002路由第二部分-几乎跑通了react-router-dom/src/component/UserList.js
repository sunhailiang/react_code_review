import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import UsersApi from "../api/api"
import { Link } from "../react-router-dom"
export default class UserList extends React.Component {
    state = {
        users: []
    }
    componentWillMount() {
        let users = UsersApi.getUsers()
        this.setState({
            users
        })
        console.log("this", this)
        let id = this.props.match.params.id
    }
    HandleDel = (id) => {
        let users = UsersApi.removeuser(id);
        this.setState({
            users
        })
    }
    render() {
        return (
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>用户名</th>
                        <th>操作</th>
                    </tr>
                </thead>

                <tbody>
                    {

                        this.state.users.map(item => (
                            <tr key={item.id}>

                                <td> <Link to={{pathname:`/user/detail/${item.id}`,state:item}}>{item.id}</Link></td>
                                <td>{item.username}</td>
                                <td><button className="btn btn-danger" onClick={() => this.HandleDel(item.id)}>删除</button></td>
                            </tr>))
                    }
                </tbody>
            </table>
        )
    }
}