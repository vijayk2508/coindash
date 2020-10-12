import React from "react";
import { Route, Redirect } from "react-router-dom";
import { cookies } from "../services/auth";
import { TokenID } from "../constants";

function PrivateRoute({ render: Component, ...rest }) {
  function renderComponent(props) {
    return cookies.get(TokenID) ? (
      <Component {...props} {...rest} />
    ) : (
      <Redirect to={{ pathname: "/", state: { from: props.location } }} />
    );
  }
  return <Route {...rest} render={renderComponent} />;
}

export default PrivateRoute;
