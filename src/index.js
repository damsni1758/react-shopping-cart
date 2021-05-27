import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Render Function:     What to Render, Where to Render it
// ReactDOM.render(<App />, document.getElementById('root'));
// JSK
ReactDOM.render(<h1 >Hello World!</h1>, document.getElementById('root'));
// If you want your app to work offlineand load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
