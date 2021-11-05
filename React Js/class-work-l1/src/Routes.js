import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainContextProvider from './contexts/MainContex';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import HomePage from './pages/HomePage';

const Routes = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/create' component={CreatePage} />
                    <Route exact path='/edit' component={EditPage} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;