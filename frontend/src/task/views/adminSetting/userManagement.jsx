import React, { Component } from 'react'
import axios from 'axios';
import Table from "../../component/table";
import Modal from "../../component/modal";
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router';


export class Node extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userList: [],
            userListBool: false,
            openAdd: false,
            firstName: "",
            lastName: "",
            email: "",
            role: "",
            password: "",
            dummy: false,
            editId: "",
            showForm:true,
            allowAccess:false

        }
    }

    componentDidMount() {
        this.callApi()
    }

    callApi = async () => {
        var callUserapi = await axios.get('http://localhost:8080/addUsersAdmin')
            .then((res => {
                console.log('data', res.data)
                this.setState({
                    userList: res.data,
                })
            }))
        console.log('state', this.state.userList)
    }
    handleCloseAdd = () => {
        this.setState({
            openAdd: false
        })
    }
    handleUserAdd = async () => {

        var addUser = await axios.post('http://localhost:8080/users',)
            .then()
    }
    
    handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, role, password } = this.state
        console.log('first', firstName, 'last', lastName, 'email', email, 'role', role, 'password', password);
        let userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            password: password,
        }
        axios.defaults.headers.common['auth-token'] = window.localStorage.getItem("auth-token");
        var addUser = await axios.post('http://localhost:8080/addUsersAdmin', userInfo)
            .then(res => console.log(res.data))
        this.setState({
            dummy: true
        })
    }
    handleFirstName = (e) => {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLastName = (e) => {
        this.setState({
            lastName: e.target.value
        })
    }
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }
    handleRole = (e) => {
        this.setState({
            role: e.target.value
        })
    }
    handlePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }
    delete = async (id) => {
        console.log('Delete', id)
        var deleteUser = await axios.delete(`http://localhost:8080/users/${id}`)
            .then(res => console.log(res))
        this.setState({
            dummy: true
        })
    }
    edit = (id) => {
        this.setState({
            showForm:false,
            showEdit: true,
            editId: id
        })
    }
    editSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, role, password } = this.state
        console.log('first', firstName, 'last', lastName, 'email', email, 'role', role, 'password', password);
        let userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            password: password,
            showEdit: false
        }
        var addUser = await axios.patch(`http://localhost:8080/users/${this.state.editId}`, userInfo)
            .then(res => console.log(res.data))
        this.setState({
            dummy: true
        })
    }
    handleLogout =async ()=>{
        localStorage.removeItem('auth-token');
        localStorage.removeItem('role');
     await   this.props.logout()
        this.props.history.push('/');
    }
    
    render() {
        return (
            <div>
                <Button onClick={this.handleLogout}>Logout</Button>
                 <h1>Dashboard</h1>
                 {/* <Table
                    contents={this.state.userList}
                />  */}
                 {this.state.showForm ?<div className="bachendCOver"><h3>Add User</h3> <form onSubmit={this.handleSubmit}>

<input type="text" placeholder="Firstname" value={this.state.firstName} onChange={this.handleFirstName} className="fileds" /><br/>

<input type="text" placeholder="Lastname" value={this.state.lastName} onChange={this.handleLastName} className="fileds" /><br/>

<input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} className="fileds" /><br/>

<input type="text" placeholder="Role" value={this.state.role} onChange={this.handleRole} className="fileds" /><br/>

<input type="password" placeholder="Password" value={this.state.passsword} onChange={this.handlePassword} className="fileds" /><br/>

<button className="btn">Submit</button>

</form></div> : null}
                
                {this.state.showEdit ?<div className="bachendCOver"><h3>Edit User</h3> <form onSubmit={this.editSubmit}>

                    <input type="text" placeholder="Firstname" value={this.state.firstName}  onChange={this.handleFirstName} className="fileds" /><br/>

                    <input type="text" placeholder="Lastname" value={this.state.lastName} onChange={this.handleLastName} className="fileds" /><br/>

                    <input type="text" placeholder="Email" value={this.state.email} onChange={this.handleEmail} className="fileds" /><br/>

                    <input type="text" placeholder="Role" value={this.state.role} onChange={this.handleRole} className="fileds" /><br/>

                    <input type="password" placeholder="Password" value={this.state.passsword} onChange={this.handlePassword} className="fileds" /><br/>

                    <button className="btn">Submit</button>

                </form></div> : null}

                 <Table
                    contents={this.state.userList}
                    delete={this.delete}
                    edit={this.edit}
                />   
 
                
            </div>
        )
    }
}

export default withRouter(Node);











// import React,{useEffect} from 'react'
// import axios from 'axios';

// function Node() {
//     const [userList,setUserList] = React.useState([]);
//     const [userListBool,setUserListBool] = React.useState(false);
//     useEffect(() => {
//         debugger;
//         callApi()
//     }, [])


//     const callApi = async () => {
//         var callUserapi = await axios.get('http://localhost:8080/users')
//             .then((res => {
//                 console.log(res.data)
//                 setUserList(res.date)
//                 setUserListBool(true)
//             }))
//     }





//     return (
//         <div>
//             <ul>
//                 {userListBool ? userList.map(list =>{
//                     return(
//                         <div>
//                             <li>{list.firstName}</li>
//                         </div>
//                     );
//                 }) : null}
//             </ul>
//         </div>
//     )
// }

// export default Node
