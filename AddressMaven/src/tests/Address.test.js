import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

const component = <MuiThemeProvider><Address /></MuiThemeProvider>;

describe('Testing Address component', function() {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    const checkDefault = name => {
        const wrapper = mount(component);
        const expectedResult = (
            <p className="App-intro">
                <strong>{name}</strong> unknown
            </p>
        );
        const answer = wrapper.contains(expectedResult);
        logError(answer, 'Default Test: ' + name);
        expect(answer).toBe(true);
    };

    const checkButtonClick = (name, result) => {
        const wrapper = mount(component);
        const expectedResult = (
            <p className="App-intro">
                <strong>{name}</strong> {result}
            </p>
        );
        wrapper.find('#btnSetAddress').at(1).simulate('click');
        const answer = wrapper.contains(expectedResult);
        logError(answer, 'ButtonClickTest ' + name);
        expect(answer).toBe(true);
    };

    const logError = (success, testName) => {
        if (!success) {
            console.log(testName + ' failed!');
        }
    };

    it('Renders and display the default first name', () => {
        checkDefault('First Name:');
    });

    it('Renders state of FirstName paragraph after button click', () => {
        checkButtonClick('First Name:', 'Patty');
    });

    it('Renders and display the default last name', () => {
        checkDefault('Last Name:');
    });

    it('Renders state of LastName paragraph after button click', () => {
        checkButtonClick('Last Name:', 'Murray');
    });

    it('Renders and display the default street', () => {
        checkDefault('Street:');
    });

    it('Renders state of Street paragraph after button click', () => {
        checkButtonClick('Street:', '154 Russel Senate Office Building');
    });

    it('Renders and display the default city', () => {
        checkDefault('City:');
    });

    it('Renders state of City paragraph after button click', () => {
        checkButtonClick('City:', 'Washington');
    });

    it('Renders and display the default state', () => {
        checkDefault('State:');
    });

    it('Renders state of State paragraph after button click', () => {
        checkButtonClick('State:', 'D.C.');
    });

    it('Renders and display the default zip', () => {
        checkDefault('Zip:');
    });

    it('Renders state of Zip paragraph after button click', () => {
        checkButtonClick('Zip:', '20510');
    });

    it('Renders and display the default Phone', () => {
        checkDefault('Phone:');
    });

    it('Renders state of Phone paragraph after button click', () => {
        checkButtonClick('Phone:', '(202) 224-2621');
    });

    it('Renders and display the default Fax', () => {
        checkDefault('Fax:');
    });

    it('Renders state of Fax paragraph after button click', () => {
        checkButtonClick('Fax:', '(202) 224-0238');
    });

    it('Renders and display the default TollFree', () => {
        checkDefault('Toll Free:');
    });

    it('Renders state of TollFree paragraph after button click', () => {
        checkButtonClick('Toll Free:', '(866) 481-9186');
    });
});
