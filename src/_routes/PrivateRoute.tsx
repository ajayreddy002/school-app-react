import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authenticationService } from '../_services/authService';
export const PrivateRoute = ({ ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        } else {
            return <Redirect to={{ pathname: '/'}} />
        }
    }
    }
    />
)