import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import profile from "./../../image/profile.png";
import email from "./../../image/email.png";
import pass from "./../../image/pass.png";

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }
  return (
    <form onSubmit={submitHandler}>
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
            {(error != "") ? ( <div className="error">{error}</div>) : ""}
            <div>
              <img src={email} alt="email" className="email" />
              <input type="text" placeholder="Email" className="name" onChange={(e) => setDetails({
                ...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="second-input">
              <img src={pass} alt="pass" className="email" />
              <input type="password" placeholder="Password" className="name" onChange={(e) => setDetails({
                ...details, password: e.target.value})} value={details.password} />
            </div>
            <div className="login-button">
            <button type="submit" value="LOGIN" >LOGIN</button>
            </div>
            <p className="link">
              <a href="#">Forgot password ?</a> Or <Link to="/signup">Signup</ Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default LoginForm
