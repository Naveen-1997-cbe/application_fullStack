
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from "react-router-dom";
import SideBar from "../views/sidenavbar/sidebar";
import LoginPage from "./loginpage";
import Registor from "./registor";
import UserList from "../login/node";
import ProtectedRoute from "./privateRoute";
import Home from "../views/home/home";
import { Sidebar } from "semantic-ui-react";

class RouterControl extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
    }

    loginAuthenticate = () => {
        this.setState({
            isAuthenticated: true
        })
    }

    loginCompoundSupport = () => {
        this.setState({
            isAuthenticated: false
        })
    }
    logout = async () => {
        await this.setState({
            isAuthenticated: false
        })
    }

    render() {
        return (
            <div>

                <Router>
                    <Sidebar>
                    <Switch>
                        <Route path="/" exact>
                            {this.state.isAuthenticated ? (
                                <Redirect to="/dashboard" />
                            ) : (
                                <LoginPage loginProcess={this.loginAuthenticate} logout={this.logout} authControl={this.loginCompoundSupport} />
                            )}
                        </Route>
                        
                        {/* <ProtectedRoute
                            isAuthenticated={this.state.isAuthenticated}
                            path="/dashboard"
                            logout={this.logout}
                            component={SideBar}
                        />
                        <ProtectedRoute
                            isAuthenticated={this.state.isAuthenticated}
                            path="/registor"
                            logout={this.logout}
                            component={Registor}
                        /> */}
                        
                        <ProtectedRoute
                            isAuthenticated={this.state.isAuthenticated}
                            path="/dashboard"
                            logout={this.logout}
                            component={Home}
                        />
                    </Switch>
                    </Sidebar>
                </Router>
                
                
            
            </div>
        );
    }
}

export default RouterControl;
// import React,{useEffect} from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
//   Link,
// } from "react-router-dom";
// import SideBar from "../views/sidenavbar/sidebar";
// import LoginPage from "./loginpage";
// import Registor from "./registor";
// import UserList from "../login/node";
// function RouteControl() {
//   const [isAuthenticated,setisAuthenticated] = React.useState(false);
//   const [authLocalStorage,setAuthLocalStorage] = React.useState(false);
//  const  loginAuthenticate = ()=>{
//    debugger;
//    setisAuthenticated(true);
// }
//  const logout =()=>{
//    setisAuthenticated(false);
//   }
//   const authLocal = ()=>{
//     setAuthLocalStorage(true)
//   }
//  const loginCompoundSupport = ()=>{
//     setisAuthenticated(false)
// }

//   return (
//     <div>
//        {/*------------------ Login Part-------------------------- */}

//        {!isAuthenticated &&
//           <Router>
//             {isAuthenticated ? <Redirect to="/registor" /> : <Redirect to="/" />}
//             <Switch>
//               <Route path="/" exact>
//                 <LoginPage loginProcess={loginAuthenticate} logout={logout} authControl={loginCompoundSupport} test={authLocal}/>
//               </Route>
//               <Route path="/signin" exact>
//                 <LoginPage />
//               </Route>
//               <Route path="/registor" exact>
//                 <Registor />
//               </Route>
//               <Redirect to="/signin" />
//             </Switch>
//           </Router>
//         }

//         {/*------------------  After Login Dashboard-------------------------- */}
//         {isAuthenticated &&
//           <Router>
//             {isAuthenticated ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
//             <SideBar keepSignIn={loginAuthenticate}>
//               <Switch>
//                 <Route path="/dashboard" >
//                   <UserList />
//                 </Route>
//               </Switch>
//             </SideBar>
//           </Router>}


//     </div>
//   )
// }

// export default RouteControl;



































// import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Redirect,
//   Link,
// } from "react-router-dom";
// import SideBar from "../views/sidenavbar/sidebar";
// import LoginPage from "./loginpage";
// import Registor from "./registor";
// import UserList from "../login/node";


// export default class MainRoute extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isAuthenticated: false,
//     }
//   }

//   loginAuthenticate = ()=>{
//     this.setState({
//       isAuthenticated:true
//     })
// }
//   logout =()=>{
//     this.setState({
//       isAuthenticated:false
//     })
//   }

//   render() {
//     return (
//       <div>

//         {/*------------------ Login Part-------------------------- */}

//         {!this.state.isAuthenticated &&
//           <Router>
//             {this.state.isAuthenticated ? <Redirect to="/registor" /> : <Redirect to="/" />}
//             <Switch>
//               <Route path="/" exact>
//                 <LoginPage loginProcess={this.loginAuthenticate} logout={this.logout}/>
//               </Route>
//               <Route path="/signin" exact>
//                 <LoginPage />
//               </Route>
//               <Route path="/registor" exact>
//                 <Registor />
//               </Route>
//               <Redirect to="/signin" />
//             </Switch>
//           </Router>
//         }

//         {/*------------------  After Login Dashboard-------------------------- */}
//         {this.state.isAuthenticated &&
//           <Router>
//             {this.state.isAuthenticated ? <Redirect to="/registor" /> : <Redirect to="/" />}
//             <SideBar>
//               <Switch>
//                 <Route path="/dashboard" >
//                   <UserList authLogin={this.loginAutenticate} check={this.wrongEmailPassword} />
//                 </Route>
//               </Switch>
//             </SideBar>
//           </Router>}

//       </div>
//     );
//   }

// }

































// import React from 'react'
// import LoginPage from "./loginpage";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// export default function Login() {
//     const [userEmail,setUserEmail] = React.useState('');
//     const [userPassword,setUserPassword] = React.useState('');


//     const loginAutenticate = async (email,password) =>{
//         const Email = { userEmail: email };
//      await   setUserEmail(email);
//      await  setUserPassword(password);
//         console.log('userEmail',userEmail);
//         console.log('userpassword',userPassword);
//     }
//     return (
//         <div>
//             <BrowserRouter>
//             <div>
//               <Switch>
//                   <Route path="/login">
//                       <LoginPage authLogin={loginAutenticate}/>
//                   </Route>
//               </Switch>  
//             </div>
//         </BrowserRouter>
//         </div>
//     )
// }

// import React, { Component } from 'react';
// import LoginPage from "./loginpage";
// import {BrowserRouter,Switch,Route} from "react-router-dom";
// import {userData} from "../../MOCK_DATA";
// import SideBar from "../component/sidebar"; 
// export default class Login extends Component {
//     constructor(){
//         super()
//         this.state={
//             userEmail:"",
//             userPassword:"",
//             checkEmail:"slarham9@rediff.com",
//             allowRoute:false
//         }
//     }

//     loginProcess = () =>{
//         let getAllUsers = userData;
//         console.log("allData",getAllUsers);

//         for (var i=0; i<getAllUsers.length ; i++){
//             if(this.state.checkEmail == getAllUsers[i].email){
//                 console.log('true');
//                 console.log('checking i value true', getAllUsers[i].email)
//                 this.setState({
//                     allowRoute:true
//                 })
//             }
//             else{
//                 console.log('false');
//                 console.log('checking i value false', getAllUsers[i].email)
//             }
//         }
//         console.log('checking',this.state.allowRoute)
//     }


//     loginAutenticate  = async (email,password) =>{
//         var a = email;
//         var b = password;
//      await this.setState({ userEmail: a, userPassword:b }, () => {
//             // console.log(this.state.userEmail, 'Email');
//             // console.log(this.state.userPassword,'Password')
//           }); 

//           this.loginProcess();
//     }
//   render() {

//     return (
//         <div>
//         <BrowserRouter>
//         <div>
//           <Switch>
//               <Route path="/login">
//                   <LoginPage authLogin={this.loginAutenticate}/>
//               </Route>

//               <Route path="/side">
//                   <SideBar/>
//               </Route>



//           </Switch>  
//         </div>
//     </BrowserRouter>
//     </div>
//     );
//   }
// }

