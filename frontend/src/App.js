import React, { useState } from 'react'

import Layout from "./task/views/sidenavbar/sidebar";
import Home from "./task/views/home/home";
import Registor from "./task/login/registor";
import Profile from "./task/views/home/profile";
import LoginPage from "./task/login/loginpage";
import UserManagement from "./task/views/adminSetting/userManagement";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
} from "react-router-dom";
export default function App() {
    const [isAuthenticated, setisAuthenticated] = useState(false);

 const   loginAuthenticate = () => {
        setisAuthenticated(true)
    }
  const  logout = async () => {
       setisAuthenticated(false)
    }
  const   loginCompoundSupport = () => {
        setisAuthenticated(false)
    }
    return (
        <div>


            {isAuthenticated ? 
            <div>
                <Router>
                    <Layout logout={logout}>
                        <Redirect to="/home"/> 
                            <Switch>
                                <Route exact path="/home">
                                    <Home />
                                </Route>
                                <Route path="/profile">
                                    <Profile />
                                </Route>
                                <Route path="/user-management">
                                    <UserManagement />
                                </Route>
                            </Switch>
                    </Layout>
            </Router>
            </div> :
             <Router>
                <Redirect to="/signin" />
                    <Switch>
                            <Route path="/signin">
                                <LoginPage loginProcess={loginAuthenticate} logout={logout} authControl={loginCompoundSupport} />
                            </Route>
                            <Route path="/registor">
                                    <Registor />
                                </Route>
                    </Switch>
            </Router>}

        </div>
    )
}
