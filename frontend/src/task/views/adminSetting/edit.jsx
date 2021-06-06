import React from 'react'
import "./edit.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons';
function Edit(props) {
    const [Password,setPassword] = React.useState(false);
    const [select,setSelect] = React.useState('');
    const handleUpdate = (e) => {
        e.preventDefault();
        props.update(e.target.firstname.value, e.target.lastname.value, e.target.email.value,select, e.target.Male.value, e.target.password.value)
    }
    const togglePassword = ()=>{
        setPassword(true)
    }
    const togglePasswordReset = () =>{
        setPassword(false)
    }
    const handleEditSelect = (e) =>{
        setSelect(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleUpdate}>
                <div className="edit-cover">
                    <h3 className="edit-heading">Update Details</h3>
                    <label for="firstname" className="labels-all">Firstname :</label>
                    <input type="text" id="firstname" name="firstname" defaultValue={props.firstname} className="fileds" />
                    <label for="lastname" className="labels-all">Lastname :</label>
                    <input type="text" id="lastname" name="lastname" defaultValue={props.lastname} className="fileds" />
                    <label for="email" className="labels-all">Email :</label>
                    <input type="text" id="email" name="email" defaultValue={props.email} className="fileds" />
                    <label for="role" className="labels-all">Role :</label>
                    <select id="role" defaultValue={props.role}  onChange={handleEditSelect}>
                        <option value="Admin">Admin</option>
                        <option value="Human Resource">Human Resource</option>
                        <option value="Front-End-Developer">Front-End-Developer</option>
                        <option value="Back-End-Developer">Back-End-Developer</option>
                        <option value="Full-Stack-Developer">Full-Stack-Developer</option>
                        <option value="IT Support">IT Support</option>
                        <option value="Junior Developer">Junior Developer</option>
                        <option value="Senior Developer">Senior Developer</option>
                        <option value="Intern">Intern</option>
                    </select>
                    <p>Please select your gender:</p>
                    <input type="radio" id="male" name="Male" value="Male" defaultValue={props.gender} />
                    <label for="male" className="mr-3 radio-gender">Male</label>
                    <input type="radio" id="female" name="Male" value="Female" defaultValue={props.gender} />
                    <label for="female" className="radio-gender">Female</label><br />
                    <label for="password" className="labels-password">Password :</label>
                    <div id="input_container">
                    <input type={Password ? "text" : "password"} id="password" name="password" defaultValue={props.password} className="fileds" />
                    {Password ? <FontAwesomeIcon icon={faEyeSlash} id="icon-move" onClick={togglePasswordReset}/> : <FontAwesomeIcon icon={faEye} onClick={togglePassword}/>}
                    </div>
                    <button className="btn">Save</button>
                    <button className="btn-close" onClick={props.close}>Close</button>
                    
                </div>
            </form>
        </div>
    )
}

export default Edit
