import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ReactDOM from 'react-dom';
import MockServer from '../tests/mock/MockServer';

configure({ adapter: new Adapter() });

const server = new MockServer();

const component = (
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
);

describe('Testing App component', () => {

    beforeEach(() => {
        return server.mockFetch();
    });

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders Header', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.contains(<Header />)).toBe(true);
    });
});
