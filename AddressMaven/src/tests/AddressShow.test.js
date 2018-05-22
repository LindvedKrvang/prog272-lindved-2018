import React from 'react';
import ReactDOM from 'react-dom';
import AddressShow from '../components/AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockServer from './mock/MockServer';

const server = new MockServer();
const addresses = server.addresses;

configure({ adapter: new Adapter() });

describe('Testing AddressShow component', function() {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddressShow address={addresses[0]} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Displays Loading... if address equals null', () => {
        const wrapper = shallow(<AddressShow address={null} />);
        const expectedResult = (
            <div>
                <h1>Loading...</h1>
            </div>
        );
        const answer = wrapper.contains(expectedResult);
        logError(answer, 'Displays Loading... while null');
        expect(answer).toBe(true);
    });

    const checkValue = (address, name, result) => {
        const wrapper = shallow(<AddressShow address={address} />);
        const expectedResult = (
            <p className="App-intro">
                <strong>{name}</strong> {result}
            </p>
        );
        const answer = wrapper.contains(expectedResult);
        logError(answer, 'CheckValue Test: ' + name);
        expect(answer).toBe(true);
    };

    const logError = (success, testName) => {
        if (!success) {
            console.log(testName + ' failed!');
        }
    };

    it('Renders state of FirstName paragraph', () => {
        checkValue(addresses[1], 'First Name:', addresses[1].firstName);
    });

    it('Renders state of LastName paragraph', () => {
        checkValue(addresses[1], 'Last Name:', addresses[1].lastName);
    });

    it('Renders state of Street paragraph', () => {
        checkValue(addresses[1], 'Street:', addresses[1].street);
    });

    it('Renders state of City paragraph', () => {
        checkValue(addresses[1], 'City:', addresses[1].city);
    });

    it('Renders state of State paragraph', () => {
        checkValue(addresses[1], 'State:', addresses[1].state);
    });

    it('Renders state of Zip paragraph', () => {
        checkValue(addresses[1], 'Zip:', addresses[1].zip);
    });

    it('Renders state of Phone paragraph', () => {
        checkValue(addresses[1], 'Phone:', addresses[1].phone);
    });

    it('Renders state of Fax paragraph', () => {
        checkValue(addresses[1], 'Fax:', addresses[1].fax);
    });

    it('Renders state of TollFree paragraph', () => {
        checkValue(addresses[1], 'Toll Free:', addresses[1].tollFree);
    });
});
