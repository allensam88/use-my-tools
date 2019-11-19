import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Login from './components/Sam/Login';
import SignUp from './components/Sam/SignUp';
import './App.css';
import { dummyUsers } from './utils/dummyUsers';
import ToolList from './components/Aaron/ToolList';
import { dummySingleUser } from './utils/dummySingleUser';

function App() {
    return (
        <div className="App">
            <h1>Use My Tools!!!</h1>
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
            <PrivateRoute path="/tools" component={ToolList} />
        </div>
    );
}

export default App;
