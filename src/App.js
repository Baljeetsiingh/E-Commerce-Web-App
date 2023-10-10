import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Routes} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';


function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // ... the user is logged in
        dispatch({
          type : "SET_USER",
          user : authUser,
        })
      }else{
        // ...the user is logged out
        dispatch({
          type : "SET_USER",
          user : null,
        })

      }
    })

    console.log("USER IS >>>>> ",user);

    return ()=>{
      // Any cleanup operation go in here.......
      unsubscribe();
    }
  },[])

  return (
    <Router>
      <div>
      <Switch>
        <Route path='/checkout'>
          <Header/>
            <Checkout/>
        </Route>
        <Route path='/login'>
           {/* <h1>Login Page</h1> */}
            <Login/>
        </Route>
        {/* This the default Route */}
        <Route path='/'>
          <Header/>
            <Home/>
           
        </Route>
      </Switch>

      </div>
      

    </Router>
    
  );
}

export default App;


//   {We NEED React Router}
//    {localhoast.com}
//   {localhoast.com/checkout} 
//   {localhoast.com/login} 