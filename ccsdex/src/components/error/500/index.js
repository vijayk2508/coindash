import React from 'react'

function ERROR500() {
    return (
        <div className="error-page" id="wrapper">
            <div className="error-box">
                <div className="error-body text-center">
                    <h1>500</h1>
                    <h3 className="text-uppercase">Internal Server Error ! </h3>
                    <p className="text-muted m-t-30 m-b-30">Please try after some time</p>
                    <a className="btn btn-info btn-rounded waves-effect waves-light m-b-40" href="index.html">Back to home</a> </div>
                <footer className="footer text-center"> © 2020 CcS Dex All Right Reserved.</footer>
            </div>
        </div>

    )
}

export default ERROR500
