import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Address from './components/Address';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";


ReactDOM.render(
    <div>
        <Header/>
        <Address/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
