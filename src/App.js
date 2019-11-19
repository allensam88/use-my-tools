import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Sam/Login';
import SignUp from './components/Sam/SignUp';
import './App.css';
import ToolList from './components/Aaron/ToolList';
import Starter from './components/Kai/starter';

function App() {
    return (
        <div className="App">
            <h1>Use My Tools!!!</h1>
            
            <Route exact path="/" component={Login} />
            
            <Route path="/sign-up" component={SignUp} />
            
            <PrivateRoute path="/tools" component={ToolList} />
            
            {/* This will be dynamic :id */}
            <PrivateRoute path="/user/" component={Starter} />
        </div>
    );
}

export default App;