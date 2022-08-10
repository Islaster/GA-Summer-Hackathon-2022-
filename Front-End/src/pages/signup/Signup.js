import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom'
import profile from "./../../image/profile.png";
import email from "./../../image/email.png";
import pass from "./../../image/pass.png";
import name from "./../../image/name.png";


function Signup() {
  return (
   
    <div className="signup-main">
      <div className="signup-sub-main">
        <div>
          <div className="imgs">
            <div className="container-image">
              <img src={profile} alt="profile" className="profile" />
            </div>
          </div>
          <div>
            <h1>Signup Page</h1>
            <div>
              <img src={name} alt="email" className="email" />
              <input type="text" placeholder="First Name" className="name" />
            </div>
            <div className="second-input">
              <img src={name} alt="pass" className="email" />
              <input type="text" placeholder="Last Name" className="name" />
            </div>
            <div className="second-input">
              <img src={email} alt="pass" className="email" />
              <input type="email" placeholder="Email" className="name" />
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Password" className="name" />
            </div>
            <div className="login-button">
              <button>Signup</button>
            </div>
            <p className="link">
              <Link to="/login">Login</ Link>
            </p>



            
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Signup
    