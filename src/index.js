import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginComponent from './login/login.js';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<LoginComponent />, document.getElementById('login-component-container'));

registerServiceWorker();
