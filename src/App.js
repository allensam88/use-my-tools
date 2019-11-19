import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Sam/Login";
import SignUp from "./components/Sam/SignUp";
import "./Components.css";
import ToolList from "./components/Aaron/ToolList";
import Profile from "./components/Kai/profile";
import NavBar from "./components/Kai/navBar";
import Footer from "./components/Kai/footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Login} />

      <Route path="/sign-up" component={SignUp} />

      <PrivateRoute path="/tools" component={ToolList} />

      <PrivateRoute path="/user/:id" component={Profile} />

      <Footer />
    </div>
  );
}

export default App;
