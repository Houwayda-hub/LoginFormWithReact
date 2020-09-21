import React, { Component } from "react";
import '../App.css';

class Login extends Component {
    render() {
        return (
            <form >
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
            <div className="submit-btn">
                <button type="submit" >Submit</button>
                <p className="forgot-password text-right">
                    <a href="#" className="submit-btn" >forget PASSWORD</a>
                </p>
                </div>
                <p className="tip-signUp">
                    <span>You don't have an account ? </span>
                </p>
                <a href="/sign-up">Sign Up</a>
                <div></div>
            </form>
        );
    }
}
export default Login;