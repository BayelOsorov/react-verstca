import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './Pages/Main';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const Routes = () => {
    return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route exact path='/sign-in' component={SignIn} />
                <Route exact path='/sign-up' component={SignUp} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;