import React from 'react';
import GetFile from '../components/GetFile';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

configure({ adapter: new Adapter() });

const component = <GetFile />;

describe('Testing GetFile component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders unknown to start', () => {
        const wrapper = shallow(component).dive();
        expect(
            wrapper.contains(
                <p>
                    <strong>File:</strong> unknown
                </p>
            )
        ).toBe(true);
    });

    it('Does not render unknown after buttonClick', () => {
        const wrapper = shallow(component).dive();
        wrapper.find('#btnGetFile').simulate('click');
        expect(
            wrapper.contains(
                <p>
                    <strong>File:</strong> unknown
                </p>
            )
        ).toBe(false);
    });
});
