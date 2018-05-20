import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MockServer from '../dal/mock/MockServer';

const server = new MockServer();
const addresses = server.getAddresses();



configure({ adapter: new Adapter() });

const component = <MuiThemeProvider><Address /></MuiThemeProvider>;

describe('Testing Address component', function() {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // const setUp = () => {
    //     const address = new Address();
    //     address.refresh(addresses);
    //     return address;
    // };
    //
    // it('Selects next address', () => {
    //     // const address = setUp();
    //     // const currentIndex = address.state.index;
    //     // address.nextAddress();
    //     // const newIndex = address.state.index;
    // });
    //
    // const logError = (success, testName) => {
    //     if (!success) {
    //         console.log(testName + ' failed!');
    //     }
    // };


});
