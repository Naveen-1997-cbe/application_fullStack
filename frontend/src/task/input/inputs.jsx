import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import InputField from "./inputfield";
export default function Inputs() {
    return (
        <BrowserRouter>
            <div>
              <Switch>
                  <Route path="/input">
                      <InputField/>
                  </Route>
              </Switch>  
            </div>
        </BrowserRouter>
        
    )
}
