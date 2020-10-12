/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { withRouter } from "react-router";

function Login(props) {
  return (
    <div className="unix-login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="login-content card">
              <div className="login-form">
                <h4>Login</h4>
                <form>
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                    <label className="pull-right">
                      <a href="#">Forgotten Password?</a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-flat m-b-30 m-t-30"
                    onClick = {(e)=>{e.preventDefault();
                    props.history.push('./dashboard');
                    //window.location.href = './dashboard';
                    }}
                  >
                    Sign in
                  </button>
                  <div className="register-link m-t-15 text-center">
                    <p>
                      Don't have account ? <a href="#"> Sign Up Here</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
