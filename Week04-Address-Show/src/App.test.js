import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

describe('Testing App component', function () {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders and reads H1 text', () => {
        const wrapper = shallow(<App />);
        const welcome = <h1 className="App-title">Welcome to React</h1>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('Renders state of File paragraph after button click', () => {
        const wrapper = shallow(<App />);
        const fileSign = <p className="App-intro">File: url-file.js</p>;
        wrapper.find('#btnGetFile').simulate('click');
        // const paragraphData = wrapper.find('div').first().childAt(2).debug();
        // console.log(paragraphData);
        expect(wrapper.contains(fileSign)).toBe(true);
    });
});

