import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Sam/Login';
import SignUp from './components/Sam/SignUp';
import './App.css';

import { dummySingleUser } from './utils/dummySingleUser';

function App() {
    return (
        <div className="App">
            <h1>App Title</h1>
            <Route exact path="/" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <h2>{dummySingleUser.user.username}</h2>
            <h4>{dummySingleUser.user.location}</h4>
            {dummySingleUser.tools.map(tool => {
                return <div key={tool.id}>
                    <p>Name: {tool.name}</p>
                    <p>Price: {tool.price}</p>
                </div>
            })}

            {/* <PrivateRoute path="/tool-list" component={} />
            <PrivateRoute path="/user/:id" component={} /> */}
        </div>
    );
}

export default App;
