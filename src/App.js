import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./Components.css";
import "./App.css";
import NavBar from "./components/navBar";
import NewToolList from "./components/NewToolList";
import Profile from "./components/profile";
import UpdateUser from "./components/UpdateUser";
import AddTool from "./components/AddTool";
import UpdateTool from "./components/UpdateTool";
import DeleteTool from "./components/DeleteTool";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />

      <Route exact path="/" component={Login} />

      <Route path="/sign-up" component={SignUp} />

      <PrivateRoute path="/tools" component={NewToolList} />

      <PrivateRoute path="/user/:id" component={Profile} />

      <PrivateRoute path="/update-user/:id" component={UpdateUser} />

      <PrivateRoute path="/add-tool/" component={AddTool} />

      <PrivateRoute path="/update-tool/:id" component={UpdateTool} />

      <PrivateRoute path="/delete-tool/:id" component={DeleteTool} />

      <div className="footer-class">
        <Footer />
      </div>
    </div>
  );
}

export default App;
