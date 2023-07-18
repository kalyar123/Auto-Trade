import React from "react";
import { AuthContext } from './authContext';
import { useContext } from 'react';
import { Route, Redirect } from "react-router-dom";
function ProtectedRoute({ component: Component, ...rest }) {
    const {authState} = useContext(AuthContext);
    console.log("rest",rest,authState?.isAuthenticated)
  return (
    <Route
      {...rest}
      render={(props) =>
        authState?.isAuthenticated ? (
          <Component {...props}></Component>
        ) : (
          <Redirect to="/" />
        )
      }
    ></Route>
  );
}

export default ProtectedRoute;