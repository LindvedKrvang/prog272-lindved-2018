import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import Address from './components/Address';
import addresses from './model/AddressList';
import registerServiceWorker from './registerServiceWorker';
import Header from "./components/Header";


ReactDOM.render(
    <div>
        <Header/>
        <App />
        <Address addressList={addresses}/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
