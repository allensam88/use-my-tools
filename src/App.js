import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import { dummyUsers } from "./utils/dummyUsers";
import Profile from "./components/Kai/profile";
import NavBar from "./components/Kai/navBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Profile />
      <Route exact path="/userprofile" component={Profile} />
    </div>
  );
}

export default App;