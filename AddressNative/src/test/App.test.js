import React from 'react';
import App from '../../App';
import Header from '../gui/components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
});

it('renders Header', () => {
    const wrapper = shallow(<App />);
    const expected = <Header />;
    expect(wrapper.contains(expected)).toBe(true);
});
