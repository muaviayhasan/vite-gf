import React from "react";
// After
import { Route, Navigate } from "react-router-dom";
import auth from "./auth.js";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticatedAdmin()) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/admin",
                state: { from: props.location }
              }}
              replace={false}
            />
          );
        }
      }}
    />
  );
};
