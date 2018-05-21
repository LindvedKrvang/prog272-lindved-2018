import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MockServer from '../dal/mock/MockServer';

configure({ adapter: new Adapter() });

const component = (
    <MuiThemeProvider>
        <Address server={new MockServer()}/>
    </MuiThemeProvider>
);

describe('Testing Address component', function() {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    // *********************************************************
    // Needs integrations tests to test this class
    // *********************************************************
});
