import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import NoData from '../components/NoData';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MockServer from './mock/MockServer';
import MockDatabase from './mock/MockDatabase';

configure({ adapter: new Adapter() });

const server = new MockServer();
const database = new MockDatabase();

const component = <Address server={server} dataManager={database} />;

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
        wrapper.instance().refreshFromDatabase(server.addresses);
        const indexBefore = wrapper.state().index;
        wrapper.find('#btnNext').simulate('click');
        const indexAfter = wrapper.state().index;

        expect(indexAfter).toBe(indexBefore + 1);
    });

    it('decreases Index when Prev is pressed', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().refreshFromDatabase(server.addresses);
        wrapper.find('#btnPrev').simulate('click');
        const indexAfter = wrapper.state().index;

        expect(indexAfter).toBe(server.addresses.length - 1);
    });

    it('Renders NoData when no data is available', () => {
        const wrapper = shallow(component).dive();
        wrapper.setState({
            dataFailedLoading: true
        });
        expect(wrapper.find(NoData).length).toBe(1);
    });

    it('Sets the state of snackOpen to true', () => {
        const wrapper = shallow(component).dive();
        const stateBefore = wrapper.state().snackOpen;
        expect(stateBefore).toBe(false);

        wrapper.instance().handleOpenSnack();
        const stateAfter = wrapper.state().snackOpen;
        expect(stateAfter).toBe(true);
    });

    it('Sets the state of snackOpen to false', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().handleOpenSnack();
        const stateBefore = wrapper.state().snackOpen;
        expect(stateBefore).toBe(true);

        wrapper.instance().handleCloseSnack();
        const stateAfter = wrapper.state().snackOpen;
        expect(stateAfter).toBe(false);
    });

    it('Handles SyncDatabase', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().handleOpenSnack();

        wrapper.instance().syncDatabase();

        const snackOpen = wrapper.state().snackOpen;
        expect(snackOpen).toBe(false);
    });

    it('Does not blow when loadData is called with cancelled true', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().cancelled = true;
        wrapper.instance().loadData();
    });

    it('Does not blow when refreshFromDatabase is called with cancelled true', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().cancelled = true;
        wrapper.instance().refreshFromDatabase();
    });
});
