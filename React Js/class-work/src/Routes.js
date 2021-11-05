import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import React from 'react';
import MainPage from "./pages/MainPage";
import AddPage from "./pages/AddPage";
import MainContextProvider from "./contexts/MainContext";
import EditPage from "./pages/EditPage";

const Routes = () => {
    return (
        <MainContextProvider>
            <BrowserRouter>
                <Switch>

                    <Route exact path='/' component={MainPage} />
                    <Route exact path='/add' component={AddPage} />
                    <Route exact path='/edit/:id' component={EditPage} />

                    <Redirect to='/' />
                </Switch>
            </BrowserRouter>
        </MainContextProvider>
    );
};

export default Routes;