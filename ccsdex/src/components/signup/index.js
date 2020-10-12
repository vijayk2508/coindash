/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function SignUp() {
  return (
    <div className="unix-login">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="login-content card">
              <div className="login-form">
                <h4>Register</h4>
                <form>
                  <div className="form-group">
                    <label>User Name</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="User Name"
                    />
                  </div>
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
                      <input type="checkbox" /> Agree the terms and policy
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary btn-flat m-b-30 m-t-30"
                  >
                    Register
                  </button>
                  <div className="register-link m-t-15 text-center">
                    <p>
                      Already have account ? <a href="#"> Sign in</a>
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

export default SignUp;
