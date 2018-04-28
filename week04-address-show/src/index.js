import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Address from './components/Address';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
    <div>
        <Address/>
    </div>,
    document.getElementById('root'));
registerServiceWorker();
