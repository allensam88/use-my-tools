import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Sam/Login';
import SignUp from './components/Sam/SignUp';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1>App Title</h1>
            <Route exact path="/" component={Login} /> 
            <Route path="/sign-up" component={SignUp} />
            {/* <PrivateRoute path="/tool-list" component={} />
            <PrivateRoute path="/user/:id" component={} /> */}
        </div>
    );
}

export default App;
