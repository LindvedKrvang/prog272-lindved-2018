import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../model/AddressList';

configure({ adapter: new Adapter() });

describe('Testing AddressShow component', function() {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressShow address={addresses[0]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
