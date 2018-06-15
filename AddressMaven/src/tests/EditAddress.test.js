import React from 'react';
import EditAddress from '../components/EditAddress';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import MockServer from '../tests/mock/MockServer';
import { AddressFieldNames } from '../be/AddressFieldNames';
import Dialog from '@material-ui/core/Dialog';

configure({ adapter: new Adapter() });

const server = new MockServer();
const address = server.addresses[1];

const saveAddress = () => {
    // Mock Implementation
};

const deleteAddress = () => {
    // Mock Implementation
};

const component = (
    <EditAddress
        address={address}
        saveAddress={saveAddress}
        deleteAddress={deleteAddress}
    />
);

describe('Testing EditAddress component', () => {
    const testFieldForData = (fieldId, expectedResult) => {
        const wrapper = shallow(component).dive();
        wrapper.find('#EditButton').simulate('click');
        expect(wrapper.find(`#${fieldId}`).props().value).toBe(expectedResult);
    };

    const testStateWhenEdited = (wrapper, property, fieldId) => {
        const mockedEvent = { target: { value: property + 's' } };
        wrapper.find('#EditButton').simulate('click');
        wrapper.find(`#${fieldId}`).simulate('change', mockedEvent);
        return property + 's';
        // expect(result).toBe(property + "s");
    };

    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(component, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Starts with Dialog open as false', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find(Dialog).props().open).toBe(false);
    });

    it('Sets Dialog open to true when EditButton is clicked', () => {
        const wrapper = shallow(component).dive();
        wrapper.find('#EditButton').simulate('click');
        expect(wrapper.find(Dialog).props().open).toBe(true);
    });

    it('Sets Dialog open to false when closed', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().handleOpenDialog();
        const dialogOpen = wrapper.state().dialogOpen;
        wrapper.instance().handleCloseDialog();
        const dialogClosed = wrapper.state().dialogOpen;

        expect(dialogOpen).toBe(true);
        expect(dialogClosed).toBe(false);
    });

    it('Creates an address', () => {
        const wrapper = shallow(component).dive();
        wrapper.instance().handleOpenDialog();
        const createdAddress = wrapper.instance().createAddress();

        expect(createdAddress._id).toBe(address._id);
    });

    it('Diplays the Save button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find('#SaveButton').length).toBe(1);
    });

    it('Diplays the Delete button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find('#DeleteButton').length).toBe(1);
    });

    it('Diplays the Cancel button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find('#CancelButton').length).toBe(1);
    });

    it('Updates firstName when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.firstName,
            AddressFieldNames.FirstNameId
        );
        expect(wrapper.state().firstName).toBe(expectedResult);
    });

    it('Updates lastName when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.lastName,
            AddressFieldNames.LastNameId
        );
        expect(wrapper.state().lastName).toBe(expectedResult);
    });

    it('Updates street when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.street,
            AddressFieldNames.StreetId
        );
        expect(wrapper.state().street).toBe(expectedResult);
    });

    it('Updates city when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.city,
            AddressFieldNames.CityId
        );
        expect(wrapper.state().city).toBe(expectedResult);
    });

    it('Updates state when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.state,
            AddressFieldNames.StateId
        );
        expect(wrapper.state().state).toBe(expectedResult);
    });

    it('Updates zip when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.zip,
            AddressFieldNames.ZipId
        );
        expect(wrapper.state().zip).toBe(expectedResult);
    });

    it('Updates phone when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.phone,
            AddressFieldNames.PhoneId
        );
        expect(wrapper.state().phone).toBe(expectedResult);
    });

    it('Updates website when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.website,
            AddressFieldNames.WebsiteId
        );
        expect(wrapper.state().website).toBe(expectedResult);
    });

    it('Updates email when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.email,
            AddressFieldNames.EmailId
        );
        expect(wrapper.state().email).toBe(expectedResult);
    });

    it('Updates contact when changed', () => {
        const wrapper = shallow(component).dive();
        const expectedResult = testStateWhenEdited(
            wrapper,
            address.contact,
            AddressFieldNames.ContactId
        );
        expect(wrapper.state().contact).toBe(expectedResult);
    });

    it('Displays the firstName in the Dialog', () => {
        testFieldForData(AddressFieldNames.FirstNameId, address.firstName);
    });

    it('Displays the lastName in the Dialog', () => {
        testFieldForData(AddressFieldNames.LastNameId, address.lastName);
    });

    it('Displays the street in the Dialog', () => {
        testFieldForData(AddressFieldNames.StreetId, address.street);
    });

    it('Displays the city in the Dialog', () => {
        testFieldForData(AddressFieldNames.CityId, address.city);
    });

    it('Displays the state in the Dialog', () => {
        testFieldForData(AddressFieldNames.StateId, address.state);
    });

    it('Displays the zip in the Dialog', () => {
        testFieldForData(AddressFieldNames.ZipId, address.zip);
    });

    it('Displays the phone in the Dialog', () => {
        testFieldForData(AddressFieldNames.PhoneId, address.phone);
    });

    it('Displays the website in the Dialog', () => {
        testFieldForData(AddressFieldNames.WebsiteId, address.website);
    });

    it('Displays the email in the Dialog', () => {
        testFieldForData(AddressFieldNames.EmailId, address.email);
    });

    it('Displays the contact in the Dialog', () => {
        testFieldForData(AddressFieldNames.ContactId, address.contact);
    });
});
