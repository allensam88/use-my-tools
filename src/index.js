import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reducer from './utils/reducer';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root'));