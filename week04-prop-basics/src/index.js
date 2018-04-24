import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const myProps= {
    myProp: 3
};

ReactDOM.render(
    <App myProps={myProps} testProp={2}/>,
    document.getElementById('root'));
registerServiceWorker();


