import React from "react";
import Home from "./components/Home.js"
import SignIn from "./components/SignIn.js"
import SideDrawer from "./components/SideDrawer.js"
import AccountProfile from "./components/AccountProfile.js"
import SavedDoctors from "./components/SavedDoctors.js"
import Register from "./components/Register.js"
import FindDoctor from "./components/FindDoctor.js"
import Notes from "./components/Notes.js"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


export default function App() {
 
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
      <Route path="/saved-doctors">
        <SavedDoctors />
      </Route>
      <Route path ="/find-doctor">
        <FindDoctor />
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
  );
}

