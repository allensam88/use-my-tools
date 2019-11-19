import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import { dummyUsers } from './utils/dummyUsers';
import ToolList from './components/Aaron/ToolList';

function App() {
    return (
        <div className="App">
            <Route exact path="/" component={ToolList} />
        </div>
    );
}

export default App;
