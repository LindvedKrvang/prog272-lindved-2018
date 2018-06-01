import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockServer from './mock/MockServer';

configure({ adapter: new Adapter() });

const server = new MockServer();

const component = (
        <Address server={server} />
);

describe('Testing Address component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('initialize index to 0', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.state().index).toBe(0);
    });

    it('increases Index when Next is pressed', () => {
        const wrapper = shallow(component).dive();
        const indexBefore = wrapper.state().index;
        wrapper.find('#btnNext').simulate('click');
        const indexAfter = wrapper.state().index;

        expect(indexAfter).toBe(indexBefore + 1);
    });

    it('decreases Index when Prev is pressed', () => {
        const wrapper = shallow(component).dive();
        wrapper.find('#btnPrev').simulate('click');
        const indexAfter = wrapper.state().index;

        expect(indexAfter).toBe(server.addresses.length - 1);
    });
});
