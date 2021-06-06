import React,{useEffect} from 'react'
import "./login.css";
import { useHistory } from "react-router";
import { withRouter } from "react-router";
import axios from 'axios';
import Registor from "../login/registor";

function LoginPage(props) {
    const history = useHistory();
    const [loginEmail, setloginEmail] = React.useState('');
    const [emailError] = React.useState('* Enter Email');
    const [emailValidError] = React.useState('* Enter Valid Email');
    const [emailBool, setemailBool] = React.useState(false);
    const [emailValidBool, setemailValidBool] = React.useState(false);
    const [loginPassword, setloginPassword] = React.useState('');
    const [passwordError] = React.useState('* Enter Password');
    const [passwordBool, setpasswordBool] = React.useState(false);
    const [emailPassBool, setemailPassBool] = React.useState(false);
    const [emailPassword] = React.useState('* Your Email or Password is Wrong');
    const [passWarnBool, setpassWarnPassBool] = React.useState(false);
    const [passWarn, setPassWarn] = React.useState('* Your email should contains min 6 charectors');
    const [loginpasswordError,setloginpasswordError] = React.useState(false);
    const [emailNotFoundError , setemailNotFoundError] = React.useState(false);
    const [userToken,setUserToken] = React.useState('');
    const [tokenContent,setTokenContent] = React.useState(false);
    const [authSuccess,setAuthSuceess] = React.useState(false);
    const [showRegistor,setshowRegistor]= React.useState(false);

    const handleLoginEmail = (e) => {
        setloginEmail(e.target.value);
    }

    const handleLoginPassword = (e) => {
        setloginPassword(e.target.value);
        let getPassword = e.target.value;
        if (getPassword.length > 2 && getPassword.length < 7) {
            setpassWarnPassBool(true);
            console.log('login')
        }
        setInterval(() => {
            setpassWarnPassBool(false);
        }, 3000);


        console.log('current value', loginPassword);
    }
    useEffect(() => {
        debugger
        let getuserToken = localStorage.getItem('auth-token');

        if(getuserToken == undefined ){
            props.authControl()
        }
        else if(getuserToken == 'InvalidPassword' || getuserToken == 'EmailIsNotFound' ){
            props.authControl()
        }
            else{
            props.loginProcess()
           
        }
       
       }, [])

    const handleLoginSubmit = async (e, a) => {
        e.preventDefault();
        const validating = validateLogin()
        if(validating){
            setloginpasswordError(false);
            setemailNotFoundError(false);
             let userCredentials = {
                 email: loginEmail,
                 password: loginPassword
             }
             let allApiValue = {};
            
            
             let getLoginUser = await axios.post('http://localhost:8080/adminUsers/login', userCredentials)
                 .then(res => allApiValue=  res.data)
                 // .then(res => getRole=res.data.role)
                 let checkInCorrect=allApiValue.inCorrect
                 let getUserToken = allApiValue.authtoken;
                 let getRole=allApiValue.role
                 console.log('Token', getUserToken);
                 console.log('Role', getRole);
             let saveRole = localStorage.setItem('role',getRole);    
             let saveToken = localStorage.setItem('auth-token', getUserToken);
             let getCurrentToken = localStorage.getItem('auth-token');
             console.log('getCurrentToken',getCurrentToken)
             console.log('usertoken 2st ', userToken);
             console.log('token in local', getCurrentToken)
             if (checkInCorrect === "InvalidPassword") {
                return (
                   setloginpasswordError(true)
                )
            }
             else if (checkInCorrect === "EmailIsNotFound") {
                return (
                    setemailNotFoundError(true)
                );
    
            }
            
            else {
                props.loginProcess()
            }
          
        }
      
      
       
        
    }
    const validateLogin =()=>{
        let formValid=true;
        let regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(loginEmail);
        if(loginEmail==""){
            setemailBool(true);
            setemailValidBool(false);  
            formValid = false 
           
        }else{
            setemailBool(false);
        }
        if(!regx){
            setemailBool(true);
        }
        else{
            setemailBool(false);
        }
        if(loginPassword==""){
            setpasswordBool(true);
            formValid = false 
        }else{
            setpasswordBool(false);
        }  
        console.log('regx',regx);
        return formValid;
        
    }

    const registorRoute = () => {
        debugger;
        history.push("/registor");
        // setshowRegistor(true);
    }
    const getBack = () => {
        debugger;
         history.push("/login");
        // setshowRegistor(false);
    }
    return (
        <section className="gradient">
            <div>
                <div className="container">
                   
                    <div>
                        {showRegistor? <Registor getBack={getBack}/> : <div className="row top-align">
                        <div className="login">
                            <form onSubmit={handleLoginSubmit}>
                                <p>Login</p>
                                <div className="inputs-cover">
                                    <input type="text" placeholder="Email" value={loginEmail} onChange={handleLoginEmail} className="login-inputs" />
                                    <div className="errors">{emailBool ? emailError : null}</div>
                                    <div className="errors">{emailValidBool ? emailValidError : null}</div>
                                    <input type="password" placeholder="Password" value={loginPassword} onChange={handleLoginPassword} />
                                    <div className="errors"> {passwordBool ? passwordError : null}</div>
                                    <div className="errors"> {passWarnBool ? passWarn : null}</div>
                                    <button className="btn">Login</button>
                                    <div className="errors"> {emailPassBool ? emailPassword : null}</div>
                                    <p onClick={registorRoute} className="link-to-Error">Dont Have Account? Click to registor!!</p>
                                    {loginpasswordError ? <p className="link-to-registor">Invalid Password Please check it</p> : null}
                                    {emailNotFoundError ? <p className="link-to-registor">Please Enter Valid Email ID</p> : null}
                                </div>
                            </form>
                        </div>
                    </div>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default withRouter(LoginPage);