import React from 'react';
import Home from '../components/Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import AtSignImg from '../assets/atSign.png';

configure({ adapter: new Adapter() });

const component = <Home />;

describe('Testing Home component', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Displays Title message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<h1>Address Maven</h1>)).toBe(true);
    });

    it('Displays Welcome message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<h3>Welcome</h3>)).toBe(true);
    });

    it('Displays Explanation message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<p>This WebApp allows you to keep track of the addresses of senators in the United States.</p>)).toBe(true);
    });

    it('Displays NextSteps message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<p>To get started - Please sync your database by going to 'Init Database' through the menu in the upper left corner.</p>)).toBe(true);
    });

    it('Displays NoData img', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<img src={AtSignImg} alt="At logo"/>)).toBe(true);
    });
});
