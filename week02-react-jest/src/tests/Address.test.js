import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../model/AddressList';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

const component = <Address addressList={addresses}/>;

describe('Testing Address component', function () {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders and display the default first name', () => {
        const wrapper = shallow(component);
        const defaultName = <p className="App-intro"><strong>First Name:</strong> unknown</p>
        // const firstName = wrapper.find('div').last().childAt(2).debug();
        // console.log(firstName);
        expect(wrapper.contains(defaultName)).toBe(true);
    });

    it('Renders state of FirstName paragraph after button click', () => {
        const wrapper = shallow(component);
        const nameDisplayed = <p className="App-intro"><strong>First Name:</strong> Patty</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const firstName = wrapper.find('div').last().childAt(2).debug();
        // console.log(firstName);
        expect(wrapper.contains(nameDisplayed)).toBe(true);
    });

    it('Renders and display the default last name', () => {
        const wrapper = shallow(component);
        const defaultName = <p className="App-intro"><strong>Last Name:</strong> unknown</p>
        // const lastName = wrapper.find('div').last().childAt(3).debug();
        // console.log(lastName);
        expect(wrapper.contains(defaultName)).toBe(true);
    });

    it('Renders state of LastName paragraph after button click', () => {
        const wrapper = shallow(component);
        const nameDisplayed = <p className="App-intro"><strong>Last Name:</strong> Murray</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const lastName = wrapper.find('div').last().childAt(3).debug();
        // console.log(lastName);
        expect(wrapper.contains(nameDisplayed)).toBe(true);
    });

    it('Renders and display the default street', () => {
        const wrapper = shallow(component);
        const defaultStreet = <p className="App-intro"><strong>Street:</strong> unknown</p>
        // const street = wrapper.find('div').last().childAt(4).debug();
        // console.log(street);
        expect(wrapper.contains(defaultStreet)).toBe(true);
    });

    it('Renders state of Street paragraph after button click', () => {
        const wrapper = shallow(component);
        const streetDisplayed = <p className="App-intro"><strong>Street:</strong> 154 Russel Senate Office Building</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const street = wrapper.find('div').last().childAt(4).debug();
        // console.log(street);
        expect(wrapper.contains(streetDisplayed)).toBe(true);
    });

    it('Renders and display the default city', () => {
        const wrapper = shallow(component);
        const defaultCity = <p className="App-intro"><strong>City:</strong> unknown</p>
        // const city = wrapper.find('div').last().childAt(5).debug();
        // console.log(city);
        expect(wrapper.contains(defaultCity)).toBe(true);
    });

    it('Renders state of City paragraph after button click', () => {
        const wrapper = shallow(component);
        const cityDisplayed = <p className="App-intro"><strong>City:</strong> Washington</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const city = wrapper.find('div').last().childAt(5).debug();
        // console.log(city);
        expect(wrapper.contains(cityDisplayed)).toBe(true);
    });

    it('Renders and display the default state', () => {
        const wrapper = shallow(component);
        const defaultState = <p className="App-intro"><strong>State:</strong> unknown</p>
        // const state = wrapper.find('div').last().childAt(6).debug();
        // console.log(state);
        expect(wrapper.contains(defaultState)).toBe(true);
    });

    it('Renders state of State paragraph after button click', () => {
        const wrapper = shallow(component);
        const stateDisplayed = <p className="App-intro"><strong>State:</strong> D.C.</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const state = wrapper.find('div').last().childAt(6).debug();
        // console.log(state);
        expect(wrapper.contains(stateDisplayed)).toBe(true);
    });

    it('Renders and display the default zip', () => {
        const wrapper = shallow(component);
        const defaultZip = <p className="App-intro"><strong>Zip:</strong> unknown</p>
        // const zip = wrapper.find('div').last().childAt(7).debug();
        // console.log(zip);
        expect(wrapper.contains(defaultZip)).toBe(true);
    });

    it('Renders state of Zip paragraph after button click', () => {
        const wrapper = shallow(component);
        const zipDisplayed = <p className="App-intro"><strong>Zip:</strong> 20510</p>
        wrapper.find('#btnSetAddress').simulate('click');
        // const zip = wrapper.find('div').last().childAt(7).debug();
        // console.log(zip);
        expect(wrapper.contains(zipDisplayed)).toBe(true);
    });

    it('Renders and display the default Phone', () => {
        const wrapper = shallow(component);
        const phoneDisplayed = <p className="App-intro"><strong>Phone:</strong> unknown</p>
        expect(wrapper.contains(phoneDisplayed)).toBe(true);
    });

    it('Renders state of Phone paragraph after button click', () => {
        const wrapper = shallow(component);
        const phoneDisplayed = <p className="App-intro"><strong>Phone:</strong> (202) 224-2621</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(phoneDisplayed)).toBe(true);
    });

    it('Renders and display the default Fax', () => {
        const wrapper = shallow(component);
        const faxDisplayed = <p className="App-intro"><strong>Fax:</strong> unknown</p>
        expect(wrapper.contains(faxDisplayed)).toBe(true);
    });

    it('Renders state of Fax paragraph after button click', () => {
        const wrapper = shallow(component);
        const faxDisplayed = <p className="App-intro"><strong>Fax:</strong> (202) 224-0238</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(faxDisplayed)).toBe(true);
    });

    it('Renders and display the default TollFree', () => {
        const wrapper = shallow(component);
        const tollFreeDisplayed = <p className="App-intro"><strong>Tollfree:</strong> unknown</p>
        expect(wrapper.contains(tollFreeDisplayed)).toBe(true);
    });

    it('Renders state of TollFree paragraph after button click', () => {
        const wrapper = shallow(component);
        const tollFreeDisplayed = <p className="App-intro"><strong>Tollfree:</strong> (866) 481-9186</p>
        wrapper.find('#btnSetAddress').simulate('click');
        expect(wrapper.contains(tollFreeDisplayed)).toBe(true);
    });
});

