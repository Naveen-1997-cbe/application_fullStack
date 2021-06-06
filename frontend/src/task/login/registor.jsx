import React, { useState } from 'react'
import axios from 'axios';
import {useHistory}from "react-router-dom";
import Sidebar from "../views/sidenavbar/sidebar";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


function Registor(props) {
    const history = useHistory();
    const [showForm, setShowForm] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [password, setPassword] = useState('');
    const [roleType,setRoleType] = useState(['Front-End-Developer','Back-End-Developer','Full-Stack-Developer','UI/UX-Designer','Python-Developer','Team-Lead','Human Resource','Intern'])

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleRole = (e) => {
        setRole(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('first', firstName, 'last', lastName, 'email', email, 'role', role, 'password', password);
        let userInfo = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            password: password,
            showEdit: false,
        }
        var addUser = await axios.post('http://localhost:8080/adminUsers/registor', userInfo)
            .then(res => console.log(res.data))
           

    setFirstName('');
    setLastName('');
    setEmail('');
    setRole('');
    setPassword('');            
    }
    const classes = useStyles();
    return (
        <div>
          
            <div className="bachendCOver"><h3>Registor Here</h3>

                <form onSubmit={handleSubmit}>

                    <input type="text" placeholder="Firstname" value={firstName} onChange={handleFirstName} className="fileds" /><br />

                    <input type="text" placeholder="Lastname" value={lastName} onChange={handleLastName} className="fileds" /><br />

                    <input type="text" placeholder="Email" value={email} onChange={handleEmail} className="fileds" /><br />

                    {/* <input type="text" placeholder="Role" value={role} onChange={handleRole} className="fileds" /><br /> */}
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Role</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={role}
                            onChange={handleRole}
                            label="Role"
                            >
                                {roleType.map(row => {
                                  return   <MenuItem value={row}>{row}</MenuItem>
                                })}
                               
                         
                            </Select>
                     </FormControl>

                    <input type="password" placeholder="Password" value={password} onChange={handlePassword} className="fileds" /><br />

                    <button className="btn">Submit</button>
                    <button  className="btn" onClick={()=>history.push("/signin")}>Go Back</button>

                </form>
            </div>
       
        </div>
    )
}

export default Registor;




// import React from 'react';
//  import { Formik } from 'formik';

//  const Registor = () => (
//    <div>
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }

//          if(!values.password){
//              errors.password = 'password required'
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>
//  );

//  export default Registor;
























// import React from 'react'
// import {useFormik} from "formik";

// export default function Registor() {
//     const [name] = React.useState('');
//     const [nameBool,setnameBool] = React.useState(false);
//     const [nameError] = React.useState('Enter Name');
//     // const formik = useFormik({
//     //     validate: values =>{
//     //         let errors ={}
//     //         if(!values.name)
//     //     }
//     // })
//     const test = () =>{
//         if(name==""){
//             setnameBool(true);
//         }
//     }
//     return (
//         <div>
//         <form >
//             <input type="text" placeholder="name" value={name}/>
//             {nameBool ? nameError : null}
//             <input type="text" placeholder="email"/>
//             <input type="text" placeholder="contact"/>
//             <button onClick={test}>click</button>
//         </form>
//         </div>
//     )
// }
