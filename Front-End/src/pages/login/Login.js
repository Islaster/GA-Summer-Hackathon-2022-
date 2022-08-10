<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../profile/Profile';
//import { useHistory } from 'react-router-dom'
import './login.css'
import LoginForm from './LoginForm';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const adminUser ={
    email: "admin@admin.com",
    password: "admin123"
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const history = useHistory();

  useEffect(() => {
    if(localStorage.getItem('user-info')) {
      navigate("/profile")
    }
  }, [])

  async function Login() {
    console.war(email, password);
    let item ={email,password}
    let userLogin = await fetch("",{
      method: 'POST',
      headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body:JSON.stringify(item)
    })
    userLogin = await userLogin.json();
    localStorage.setItem("user-info",JSON.stringify(userLogin))
    navigate("/profile")
  }

  const Logout = () => {
    email = "" ;
  }

  return (
    <div className="login">
      {(email != "") ? (
        <>
        <Profile />
        <div className="hello">
          <h2>Welcome, <span>{email}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div></>
          ) : (
            <LoginForm Login={Login} error={error} />
          )
      }
    </div>
   
  );
}

export default Login
>>>>>>> navid-branch
