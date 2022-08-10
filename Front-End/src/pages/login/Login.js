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