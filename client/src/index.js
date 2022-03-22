import React from 'react';
import ReactDOM from 'react-dom';

// Prover gives access to storage from anywhere in app
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux"; 
import thunk from "redux-thunk"; 
import {reducers} from "./reducers"; 

import App from './App'; 
import './index.css'; 



const store = createStore(reducers, compose(applyMiddleware(thunk)));

// Connecting to root element 
ReactDOM.render(
    
    <Provider store={store}>
        <App /> 
    </Provider>,

    document.getElementById('root')

); 