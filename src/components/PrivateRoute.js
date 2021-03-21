import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import BubblePage from './BubblePage';

// Private Route has same API as <Route />
// Renders <Route /> and passes props
// Checks if auth token is there
// If there is a token render component 
// Otherwise, redirect user to /login

const PrivateRoute = ({ component: Component, ...rest}) => {
    return(
        <Route {...rest} render={(props) =>{
            if (localStorage.getItem("authToken")){
                return <BubblePage {...props} />
            }
            else{
                return <Redirect to="/login" />
            }
        }}
        />
    )
}

export default PrivateRoute;








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in