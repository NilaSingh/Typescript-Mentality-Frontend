import React from "react";
import Home from "./components/Home.js"
import SignIn from "./components/SignIn.js"
import SideDrawer from "./components/SideDrawer.js"
import SideDrawer2 from "./components/SideDrawer2.js"

import AccountProfile from "./components/AccountProfile.js"
import SavedDoctors from "./components/SavedDoctors.js"
import Register from "./components/Register.js"
import Search from "./components/Search.js"
import Notes from "./components/Notes.js"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function App() {
  const handleLogin = (event) => {
    event.preventDefault();
     console.log("1");
//     try {
//       login(businessLogin);
//     } catch (err) {
//       console.log(err.message);
//     }
//     console.log("2");
};

  let isSignedIn = window.localStorage.getItem("token") in [null, ""]; //? false : true;
  if (isSignedIn==true) {
    console.log(window.localStorage.getItem("token"));
  return(
    <div>
      <Router> 
      <SideDrawer />
      <Switch>
        <Route path='/my-notes'>
          <Notes />
        </Route>
       <Route path='/register'>
         <Register />
       </Route>
       {/* <Route path="/saved-doctors">
         <SavedDoctors />
        </Route> */}
        <Route path ="/search">
          <Search />
        </Route>
        <Route path="/my-account">
          <AccountProfile />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
      </div>
  )
  }
  else if (!isSignedIn){
    return(
      <div>
        <Router> 
        <SideDrawer2 />
        <Switch>
         <Route path='/register'>
           <Register />
         </Route>
         <Route path='/my-notes'>
          <Notes />
        </Route>
         {/* <Route path="/saved-doctors">
           <SavedDoctors />
          </Route> */}
          <Route path ="/search">
            <Search />
          </Route>
          <Route path="/my-account">
            <AccountProfile />
          </Route>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </Router>
        </div>
    )
  }
}

