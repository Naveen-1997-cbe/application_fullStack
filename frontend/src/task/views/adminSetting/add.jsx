import React,{useState} from 'react'
import "./edit.css";
function Add(props) {
    const [firstName, setFirstName] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState('* Enter Your Firstname');
    const [firstNameBool,setfirstNameBool] = React.useState(false);
    const [lastName, setLastName] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('* Enter Your Lastname');
    const [lastNameBool,setLastNameBool] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailErrorreg, setEmailError] = React.useState('* Enter Your Email');
    const [emailBoolreg,setemailRegBool] = React.useState(false);
    const [select,setSelect] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [genderCheckMale, setGenderCheckMale] = React.useState(false);
    const [genderCheckFemale, setGenderCheckFemale] = React.useState(false);
    const [genderError, setGenderError] = React.useState('* Enter Your Gender');
    const [genderdBool,setgenderBool] = React.useState(false);
    const [passsword, setPasssword] = React.useState('');
    const [passwordErrorReg, setPosswordError] = React.useState('* Enter Your Password');
    const [passwordBoolReg,setpasswordBoolReg] = React.useState(false);
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleMale = async (e) =>  {
        var genders = document.getElementsByName("Male");
        console.log("genders",genders[0].checked);
        if(genders[0].checked == true){
          await  setGender("Male");
        }
        else{
           await setGender("");
        }
        console.log("check gender", gender)
        // setGender(e.target.value);
        console.log("value radio",e.target.value)
    }

    const handleFemale = async (e) => {
        var genders = document.getElementsByName("Male");
        console.log("genders",genders[1].checked);
        if(genders[1].checked == true){
          await  setGender("Female");
        }
        else{
           await setGender("");
        }
        console.log("check gender", gender)
        // setGender(e.target.value);
        console.log("value radio",e.target.value)
        // setGender(e.target.value)
    }

    const handlePassword = (e) => {
        setPasssword(e.target.value);
    }
    const handleSelect = (e) =>{
        setSelect(e.target.value)
    }

    const validateRegistor =()=>{
        let formValid=true ;
        let regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
        if(firstName ==""){
            setfirstNameBool(true);
            formValid = false 
        }else{
            setfirstNameBool(false);
        }
        if(lastName==""){
            setLastNameBool(true);
            formValid = false 
        }else{
            setLastNameBool(false);
        }  
        if(email ==""){
            setemailRegBool(true);
            formValid = false 
        }else{
            setemailRegBool(false);
        }
        if(!regx){
            setemailRegBool(true);
        }
        else{
            setemailRegBool(false);
        }
        if(gender==""){
            setgenderBool(true);
            formValid = false 
        }else{
            setgenderBool(false);
        }  
        if(passsword ==""){
            setpasswordBoolReg(true);
            formValid = false 
        }else{
            setpasswordBoolReg(false);
        }
        return formValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validateing = validateRegistor()
        if(validateing){
            const id = Math.floor(Math.random() * 10000) + 1;
            var addNewUser = {
                "id": id,
                "first_name": firstName,
                "last_name": lastName,
                "email": email,
                "role": select,
                "gender": gender,
                "password": passsword
            }
    
            // userData.push(dummy);
            props.addNewUsers(addNewUser);
            alert('Successfully Added!');
            // console.log('userData', userData);
            props.close();
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setGender('');
        setPasssword('');
        
        
       console.log('validate Registor',validateing);
    }


    return (
        <div className="edit-cover">
        <form onSubmit={handleSubmit}>
        <h3 className="edit-heading">Add Users</h3>
            <input type="text" placeholder="Firstname" value={firstName} onChange={handleFirstName} className="fileds" />
           <div className="errors"> {firstNameBool ? firstNameError : null}</div>
            <input type="text" placeholder="Lastname" value={lastName} onChange={handleLastName} className="fileds" />
            <div className="errors">{lastNameBool ? lastNameError : null}</div>
            <input type="text" placeholder="Email" value={email} onChange={handleEmail} className="fileds" />
            <div className="errors">{emailBoolreg ? emailErrorreg : null}</div>
            <select id="role"  onChange={handleSelect}>
                        <option>{props.role}</option>
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
            <input type="radio" id="male" name="Male" value={gender}  onChange={handleMale} />
            <label for="male"  className="mr-3 radio-gender">Male</label>
            <input type="radio" id="female" name="Male"  value={gender}  onChange={handleFemale} />
            <label for="female"  className="radio-gender">Female</label>
            <div className="errors">{genderdBool ? genderError : null}</div>
            <input type="password" placeholder="Password" value={passsword} onChange={handlePassword} className="fileds"/>
            <div className="errors">{passwordBoolReg ? passwordErrorReg : null}</div>
            <button className="btn">Submit</button>
            <button className="btn-close" onClick={()=>props.close() }>Close</button>
           
        </form>
        </div>
    )
}

export default Add;
//     const [firstname,setfirstname] = useState('');
//     const [lastname,setlastname] = useState('');
//     const [email,setemail] = useState('');
//     const [gender,setgender] = useState('');
//     const [password,setpassword] = useState('');
//     const handleAddUser =() =>{

//     }


//         <div>
//             <form onSubmit={handleAddUser}>
//                 <input type="text" placeholder="firstname" onChange={(e)=>setfirstname(e.target.value)} />
//                 <input type="lastname" placeholder="lastname" />
//                 <input type="email" placeholder="email" />
//                 <p>Please select your gender:</p>
//                 <input type="radio" id="male" name="Male" value="Male"  />
//                 <label for="male" className="mr-3 radio-gender">Male</label>
//                 <input type="radio" id="female" name="Male" value="Female"  />
//                 <label for="female" className="radio-gender">Female</label><br />
//                 <input type="password" placeholder="password" />
//             </form>
//         </div>
//     )