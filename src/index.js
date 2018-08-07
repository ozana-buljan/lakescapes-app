/* *** *** *** IMPORTS *** *** *** */

/* React,  ReactDOM */
import React, { Component } from "react";
import ReactDOM from "react-dom";

/* Styles */
import './Styles/App.css';

/* Components */
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App / > ,
    document.getElementById('root')
);

registerServiceWorker();
