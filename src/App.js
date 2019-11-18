import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import './App.css';
import { dummyUsers } from './utils/dummyUsers';
import PracticeCard from './components/PracticeCard';

function App() {
    return (
        <div className="App">
            {/* This is a feasiblity study to verify that dummy data actually works good. */}
            <h1>Feasibility Test For Dummy Data</h1>
            <div className='card-list'>
                {dummyUsers.map(user => {
                    return <PracticeCard key={user.id} user={user} />
                })}
            </div>
        </div>
    );
}

export default App;
