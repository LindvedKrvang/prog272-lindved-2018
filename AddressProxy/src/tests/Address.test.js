import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, mount, shallow } from 'enzyme';
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

    it('test Next', function () {
        const MUI = shallow(component);
        const wrapper = MUI.dive();
        // console.log(wrapper.debug());
        console.log("Index before: " + wrapper.state().index);
        wrapper.find("#btnNext").simulate("click");
        console.log("Index after: " + wrapper.state().index);
    })

    it('test Prev', function () {
        const MUI = shallow(component);
        const wrapper = MUI.dive();
        // console.log(wrapper.debug());
        console.log("Prev Index before: " + wrapper.state().index);
        wrapper.find("#btnPrev").simulate("click");
        console.log("Prev Index after: " + wrapper.state().index);
    })

    // *********************************************************
    // Needs integrations tests to test this class
    // *********************************************************
});
