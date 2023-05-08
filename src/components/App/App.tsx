import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { MainPage } from "../../pages/MainPage/MainPage";
import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { RegisterPage } from "../../pages/RegisterPage/RegisterPage";
import { ErrorPage } from "../../pages/ErrorPage/ErrorPage";
import { SearchPage } from "../../pages/SearchPage/SearchPage";
import { UserPage } from "../../pages/UserPage/UserPage";
import { FriendsPage } from "../../pages/FriendsPage/FriendsPage";

export const App: FC = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path="/" exact={true}>
          <MainPage />
        </ProtectedRoute>
        <ProtectedRoute path="/search" exact={true}>
          <SearchPage />
        </ProtectedRoute>
        <ProtectedRoute path="/friends" exact={true}>
          <FriendsPage />
        </ProtectedRoute>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/register" exact={true}>
          <RegisterPage />
        </Route>
        <ProtectedRoute path="/:id" exact={true}>
          <UserPage />
        </ProtectedRoute>
        <Route path="*">
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
};
