import React from 'react';
import "./Login.css";
import {Link, useHistory} from "react-router-dom";
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const login = (event)=>{
        event.preventDefault(); //this stops from refresh the page;
        //do the login logic....
        auth.signInWithEmailAndPassword(email,password)
         .then((auth) => {
              // logged in, redirect to the homepage...
             history.push('/')
        } )
        .catch(e=> alert(e.message))
    }
    

    const register = (event)=>{
        event.preventDefault(); //this stops from refresh the page;
        //do the register logic....
    auth.createUserWithEmailAndPassword(email, password)    
    .then((auth)=>{
        // created a user and logged in, redirected to home page
        history.push('/')
    })
    .catch((e) => alert(e.message))
    }

  return (
    <div className="login">
        <Link to='/'>
            <img className ='login__logo'src="https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form >
                <h5>E-mail</h5>
                <input value={email} onChange={event =>setEmail(event.target.value)} type="email" />
                <h5>Password</h5>
                <input value={password} onChange={event =>setPassword(event.target.value)}  type="password" />
                <button onClick={login} type="submit" className='login__signInButton'>Sign in</button>
                
            </form>
            <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
            <button onClick={register} className='login__registerButton'>Create Your Amamzon Account</button>
        </div>
    </div>
    
    
  )
}

export default Login