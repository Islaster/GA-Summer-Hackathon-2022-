import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import profile from "./../../image/profile.png";
import email from "./../../image/email.png";
import pass from "./../../image/pass.png";


function Login() {
  return (
    <div className="main">
      <div className="sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Please Login</h1>
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="Email" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>Login</button>
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or <Link to="/signup">Signup</ Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login