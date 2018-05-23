import React from 'react';
import GetFile from '../gui/components/GetFile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { Text } from 'react-native';

configure({ adapter: new Adapter() });

const component = <GetFile />;

it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders files', () => {
    const wrapper = shallow(component);
    const expected = (
        <Text>
            <Text style={{ fontWeight: 'bold' }}>File: </Text>
            {wrapper.state('file')}
        </Text>
    );
    expect(wrapper.contains(expected)).toBe(true);
});

it('state.file is unknown at start', () => {
    const wrapper = shallow(component);
    expect(wrapper.state('file')).toBe('unknown');
});

it('changes state.file away from unknown after click', () => {
    const wrapper = shallow(component);
    const instance = wrapper.instance();
    instance.getFile();
    expect(wrapper.state('file') === 'unknown').toBe(false);
});
