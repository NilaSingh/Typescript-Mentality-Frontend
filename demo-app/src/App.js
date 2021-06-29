import React from "react";
import Home from "./components/Home"
import SignIn from "./components/SignIn"
import AccountProfile from "./components/AccountProfile"
import Register from "./components/Register"
import Search from "./components/Search"
import Chat from "./components/Chat"
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Notes from "./components/Notes";
import { AuthContext } from './context/auth-context'
import SideDrawer from './components/SideDrawer'
import SideDrawer2 from './components/SideDrawer2'
function AuthenticatedApp() {
  return (
    <Router>
      <SideDrawer></SideDrawer>
      <Switch>
        {/* <Route path='/my-notes'>
          <Notes />
        </Route> */}
        <Route path ="/search">
          <Search />
        </Route>
        <Route path="/my-account">
          <AccountProfile />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

function UnauthenticatedApp() {
  return (
    <Router>
      <SideDrawer2></SideDrawer2>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default function App() {
  const { user, token } = React.useContext(AuthContext)
  
  return (
    <div>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  )
}

