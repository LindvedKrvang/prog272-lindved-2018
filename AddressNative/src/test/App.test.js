import React from 'react';
import App from '../../App';
import Header from '../gui/components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MockServer from './mock/MockServer';

configure({ adapter: new Adapter() });

const server = new MockServer();

describe('Testing App component', () => {
    beforeEach(() => {
        return server.mockFetch();
    });

    it('renders without crashing', () => {
        const rendered = renderer.create(<App />).toJSON();
        expect(rendered).toBeTruthy();
    });

    it('renders Header', () => {
        const wrapper = shallow(<App />);
        const expected = <Header />;
        expect(wrapper.contains(expected)).toBe(true);
    });
});
