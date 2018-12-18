import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
function MyInfo() {
    return(
    <div>
    <h1>Faith Thuita</h1>
    <p>I am me</p>
    <ul>
        <li>The Carribean</li>
        <li>Jamaica</li>
    </ul>
    </div>
    )
}
ReactDOM.render(<MyInfo />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
