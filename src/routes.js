import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SignUp from "./pages/SignUp";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/Dashboard";
import { Products } from "./pages/Products";
import {
    HOME, LOGIN, SIGNUP, PIZZA, ADD_TO_CART, REMOVE_FROM_CART, PLACE_ORDER, ADMIN_LOGIN,
    ADMIN_ADD_PIZZA, ADMIN_UPDATE_PIZZA, ADMIN_ACCEPT_ORDER, ADMIN_DECLINE_ORDER, FEEDBACK,
    LOGOUT, ADMIN_ADD_CATEGORY, ADMIN_UPDATE_CATEGORY, ADMIN_DASHBOARD, CART, ORDERS
} from "./constants/url-list";
import AddPizza from "./pages/admin/AddPizza";
import UpdatePizza from "./pages/admin/UpdatePizza";
import { Cart } from "./pages/Cart";
import { Orders } from "./pages/Orders";
import Feedback from "./pages/Feedback";
import { PrivateRoute } from "./components/PrivateRoute";
import Logout from "./pages/Logout";
import AddCategory from "./pages/admin/AddCategory";
import UpdateCategory from "./pages/admin/UpdateCategory";


export const Routes = () => (
    <Switch>
        <Route path={HOME} exact component={Home}/>
        <Route path={LOGIN} component={LoginForm}/>
        <Route path={LOGOUT} component={Logout}/>
        <Route path={SIGNUP} component={SignUp}/>

        <Route path={PIZZA} component={Products}/>
        <PrivateRoute path={ADD_TO_CART} component={SignUp}/>
        <PrivateRoute path={CART} component={Cart}/>
        <PrivateRoute path={ORDERS} component={Orders}/>
        <PrivateRoute path={REMOVE_FROM_CART} component={SignUp}/>
        <PrivateRoute path={PLACE_ORDER} component={SignUp}/>
        <PrivateRoute path={FEEDBACK} component={Feedback}/>

        <Route path={ADMIN_LOGIN} component={AdminLogin}/>
        <Route path={ADMIN_DASHBOARD} component={AdminDashboard}/>
        <Route path={ADMIN_ADD_CATEGORY} component={AddCategory}/>
        <Route path={ADMIN_UPDATE_CATEGORY} component={UpdateCategory}/>
        <Route path={ADMIN_ADD_PIZZA} component={AddPizza}/>
        <Route path={ADMIN_UPDATE_PIZZA} component={UpdatePizza}/>
        <Route path={ADMIN_ACCEPT_ORDER} component={AdminLogin}/>
        <Route path={ADMIN_DECLINE_ORDER} component={AdminLogin}/>

        <Route component={NoMatch}/>
    </Switch>
);