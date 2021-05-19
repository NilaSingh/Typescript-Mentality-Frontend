import React from "react";
import Home from "./components/Home.js"
import SignIn from "./components/SignIn.js"
import AccountProfile from "./components/AccountProfile.js"
import Register from "./components/Register.js"
import Search from "./components/Search.js"
import Chat from "./components/Chat.js"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Notes from "./components/Notes.js";


export default function App() {
//   const handleLogin = (event) => {
//     event.preventDefault();
//      console.log("1");
// //     try {
// //       login(businessLogin);
// //     } catch (err) {
// //       console.log(err.message);
// //     }
// //     console.log("2");
// };
  return(
    <div>
      <Router> 
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
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Router>
      </div>
  )
}

