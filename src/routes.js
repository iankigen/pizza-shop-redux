import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";


export const Routes = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/admin/login" component={LoginForm}/>
        <Route component={NoMatch}/>
    </Switch>
);