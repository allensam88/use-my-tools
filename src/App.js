import React from "react";
import { Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./components/Sam/Login";
import SignUp from "./components/Sam/SignUp";
import "./Components.css";
import './App.css'; 
import NavBar from "./components/Kai/navBar";
import ToolList from "./components/Aaron/ToolList";
import Profile from "./components/Kai/profile";
import UpdateUser from "./components/Sam/UpdateUser";
import AddTool from "./components/Aaron/AddTool";
import UpdateTool from "./components/Sam/UpdateTool";
import DeleteTool from './components/Sam/DeleteTool';
import Footer from "./components/Kai/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Login} />

      <Route path="/sign-up" component={SignUp} />

      <PrivateRoute path="/tools" component={ToolList} />

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
