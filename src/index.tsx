import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from './reducers';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware
    )
);
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
