import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

describe('Jest Create React Tests', function () {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('Renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const fileSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#btnGetFile').simulate('click');
        expect(wrapper.contains(fileSign)).toBe(true);
    });

    it('Renders and display the default first name', () => {
        const wrapper = shallow(<App/>);
        const defaultName = <p className="App-intro"><strong>First Name:</strong> unknown</p>
        expect(wrapper.contains(defaultName)).toBe(true);
    });

    it('Renders state of FirstName paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const nameDisplayed = <p className="App-intro"><strong>First Name:</strong> Rasmus</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(nameDisplayed)).toBe(true);
    });

    it('Renders and display the default last name', () => {
        const wrapper = shallow(<App/>);
        const defaultName = <p className="App-intro"><strong>Last Name:</strong> unknown</p>
        expect(wrapper.contains(defaultName)).toBe(true);
    });

    it('Renders state of LastName paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const nameDisplayed = <p className="App-intro"><strong>Last Name:</strong> Lindved</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(nameDisplayed)).toBe(true);
    });

    it('Renders and display the default street', () => {
        const wrapper = shallow(<App/>);
        const defaultStreet = <p className="App-intro"><strong>Street:</strong> unknown</p>
        expect(wrapper.contains(defaultStreet)).toBe(true);
    });

    it('Renders state of Street paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const streetDisplayed = <p className="App-intro"><strong>Street:</strong> Lake Hills Blvd.</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(streetDisplayed)).toBe(true);
    });

    it('Renders and display the default city', () => {
        const wrapper = shallow(<App/>);
        const defaultCity = <p className="App-intro"><strong>City:</strong> unknown</p>
        expect(wrapper.contains(defaultCity)).toBe(true);
    });

    it('Renders state of City paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const cityDisplayed = <p className="App-intro"><strong>City:</strong> Bellevue</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(cityDisplayed)).toBe(true);
    });

    it('Renders and display the default state', () => {
        const wrapper = shallow(<App/>);
        const defaultState = <p className="App-intro"><strong>State:</strong> unknown</p>
        expect(wrapper.contains(defaultState)).toBe(true);
    });

    it('Renders state of State paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const stateDisplayed = <p className="App-intro"><strong>State:</strong> Washington</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(stateDisplayed)).toBe(true);
    });

    it('Renders and display the default zip', () => {
        const wrapper = shallow(<App/>);
        const defaultZip = <p className="App-intro"><strong>Zip:</strong> unknown</p>
        expect(wrapper.contains(defaultZip)).toBe(true);
    });

    it('Renders state of Zip paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const zipDisplayed = <p className="App-intro"><strong>Zip:</strong> 98008</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(zipDisplayed)).toBe(true);
    });
});

