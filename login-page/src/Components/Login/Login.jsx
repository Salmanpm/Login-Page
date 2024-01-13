import React from 'react'
import './Login.css'
import { useState } from 'react';
import {   createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../Firebase/config';
function Login() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')


   const handleLogin = (e)=>{
    e.preventDefault()
   
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert('Submitted')
    // ...
  })
  .catch((error) => {
    alert('Check ')
    // const errorCode = error.code;
    // const errorMessage = error.message;
  });

   }
  return (
    <div className='main'>
      <div className="login">
        <form onSubmit={handleLogin}>
        <h1 className='login-write'>Login</h1>
        <div className="username">
        
        <input type="email" placeholder='Username' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="password">
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  />
        </div>
       
        <div className="forgot">
            <div className='remember'>
            <input type="checkbox"  />
            <label htmlFor="">Remember me</label>
            </div>
            {/* <h2>Remember me</h2> */}
            <div className='forgot-pass'>
            <h4>Forgot Password?</h4>
            </div>
        </div>
        <div className="sign-in">
            <button>SIGN IN</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login
