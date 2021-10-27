import React from "react";
import "../Style/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__container">
      <div className="login__left">
        <h1>facebook</h1> <br />
        <p>facebook helps you connect and share with people in your life.</p>
      </div>
      <div className="login__right">
        <br />
        <input type="text" placeholder="Email Address or Phone Number" /> <br />
        <input type="password" placeholder="Password" />
        <Link to="/index" className="login-btn">
          Log In
        </Link>
        <p>forgotten password?</p>
        <hr width="90%" />
        <button className="createnew-btn">Create New Account</button>
      </div>
    </div>
  );
}

export default Login;
