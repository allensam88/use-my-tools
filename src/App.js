import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Sam/Login';
import SignUp from './components/Sam/SignUp';
import './App.css';
import ToolList from './components/Aaron/ToolList';
import Profile from "./components/Kai/profile";
import NavBar from "./components/Kai/navBar";

function App() {
    return (
        <div className="App">
            <h1>Use My Tools!!!</h1>
            <NavBar />
            <Route exact path="/" component={Login} />
            
            <Route path="/sign-up" component={SignUp} />
            
            <PrivateRoute path="/tools" component={ToolList} />
            
            <PrivateRoute exact path="/userprofile" component={Profile} />
        </div>
    );
}

export default App;