import React, {FC} from "react";
import { Route, Redirect } from "react-router-dom";
import {IProtectedRoute} from "../../types/types";



export const ProtectedRoute: FC<IProtectedRoute> = ({children,path,exact}) => {
    return (
        <Route
            path={`${path}`}
            exact
            render={({ location }) =>
                window.localStorage.getItem("login") &&
                window.localStorage.getItem("password") ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}