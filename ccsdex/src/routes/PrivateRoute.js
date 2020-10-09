import React from "react";
import { Route, Redirect } from "react-router-dom";
import { cookies } from "../services/auth";

import routeLink from "../constants/routeLinkConstant";
//import Layout from "../layout";

function PrivateRoute({ render: Component, ...rest }) {
  function renderComponent(props) {
    return cookies.get('ccsdexid') ? (
      // <Layout>
        <Component {...props} {...rest} />
      // </Layout>
    ) : (
      <Redirect to={{ pathname: routeLink.Login, state: { from: props.location } }} />
    );
  }
  return <Route {...rest} render={renderComponent} />;
}

export default PrivateRoute;
