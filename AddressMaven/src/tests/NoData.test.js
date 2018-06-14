import React from 'react';
import NoData from '../components/NoData';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import NoDataImg from '../assets/sorry.png';

configure({ adapter: new Adapter() });

const component = <NoData />;

describe('Testing NoData component', () => {

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Displays NoData message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<h3>No data available</h3>)).toBe(true);
    });

    it('Displays Todo message', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<p>Please sync your database.</p>)).toBe(true);
    });

    it('Displays NoData img', () => {
        const wrapper = shallow(component);
        expect(wrapper.contains(<img src={NoDataImg} alt="No data found"/>)).toBe(true);
    });
});
