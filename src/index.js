import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './utils/reducer';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

// const store = createStore(reducer, applyMiddleware(thunk));

{/* <Provider store={store}>
</Provider>,  */}
ReactDOM.render(

    <Router>
        <App />
    </Router>,

document.getElementById('root'));