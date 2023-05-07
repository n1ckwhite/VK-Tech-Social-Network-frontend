import React, {FC} from 'react';
import {Route, Switch} from "react-router-dom";
import {ProtectedRoute} from "../ProtectedRoute/ProtectedRoute";
import {MainPage} from "../../pages/MainPage/MainPage";
import {LoginPage} from "../../pages/LoginPage/LoginPage";
import {RegisterPage} from "../../pages/RegisterPage/RegisterPage";
import {ErrorPage} from "../../pages/ErrorPage/ErrorPage";

export const  App: FC<{}> = () => {
  return (
    <div>
        <Switch>
            <ProtectedRoute path="/" exact={true}>
                <MainPage/>
            </ProtectedRoute>
            <Route path="/login" exact={true}>
                <LoginPage/>
            </Route>
            <Route path="/register" exact={true}>
                <RegisterPage/>
            </Route>
            <Route path="*">
               <ErrorPage/>
            </Route>
        </Switch>
    </div>
  );
}

