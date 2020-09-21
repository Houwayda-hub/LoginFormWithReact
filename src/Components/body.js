import React from 'react';
import '../App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Login from './login'; 
import SignUp from './signUp';

function Body() {
  return (
    <Router>
        <div className="App">
     
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
      </div></Router>
  );
}

export default Body;