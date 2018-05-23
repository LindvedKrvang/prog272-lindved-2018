import React from 'react';
import Address from '../gui/components/Address';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MockServer from './mock/MockServer';


configure({ adapter: new Adapter()});

const server = new MockServer();

const component = <Address server={server}/>;

it('renders without crashing', () => {
    const rendered = renderer.create(<Address server={server}/>).toJSON();
    expect(rendered).toBeTruthy();
});

it('initalize with index as 0', () => {
    const wrapper = shallow(component);

    expect(wrapper.state('index')).toBe(0);
})

it('increases Index when Next is pressed', () => {
    const wrapper = shallow(component);
    const instance = wrapper.instance();

    expect(wrapper.state('index')).toBe(0);
    instance.nextAddress();
    expect(wrapper.state('index')).toBe(1);
});

it('decreases Index when Prev is pressed', () => {
    const wrapper = shallow(component);
    const instance = wrapper.instance();

    expect(wrapper.state('index')).toBe(0);
    instance.previousAddress();
    expect(wrapper.state('index')).toBe(server.addresses.length - 1);
});
