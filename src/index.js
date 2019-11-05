import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';

// for routing
import {BrowserRouter} from "react-router-dom";

// for redux middleware thunk
import {Provider} from 'react-redux'
import {combineReducers, createStore, compose, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

// import of reducers
import analyticsReducer from './store/reducers/analytics';
import headerReducer from './store/reducers/header';
import forecastReducer from './store/reducers/forecast';
import anomaliesReducer from './store/reducers/anomalies';

const rootReducer = combineReducers({
    analytics: analyticsReducer,
    header: headerReducer,
    forecast: forecastReducer,
    anomalies:anomaliesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('react'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
