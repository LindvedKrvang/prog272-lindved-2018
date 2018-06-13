import React from 'react';
import EditAddress from '../components/EditAddress';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import MockServer from '../tests/mock/MockServer';
import { AddressFieldNames } from '../be/AddressFieldNames';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from '@material-ui/core/DialogContent';
import Button from "@material-ui/core/Button";

configure({ adapter: new Adapter() });

const server = new MockServer();
const address = server.addresses[1];

const saveAddress = () => {
    // Mock Implementation
};

const deleteAddress = () => {
    // Mock Implementation
};

const component = <EditAddress address={address} saveAddress={saveAddress} deleteAddress={deleteAddress}/>;

describe('Testing EditAddress component', () => {

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
        wrapper.find("#EditButton").simulate("click");
        expect(wrapper.find(Dialog).props().open).toBe(true);
    });

    it('Diplays the Save button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find("#SaveButton").length).toBe(1);
    });

    it('Diplays the Delete button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find("#DeleteButton").length).toBe(1);
    });

    it('Diplays the Cancel button', () => {
        const wrapper = shallow(component).dive();
        expect(wrapper.find("#CancelButton").length).toBe(1);
    });

    const testFieldForData = (fieldId, expectedResult) => {
        const wrapper = shallow(component).dive();
        wrapper.find("#EditButton").simulate("click");
        expect(wrapper.find(`#${fieldId}`).props().value).toBe(expectedResult);
    };

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

    // const complexComponents = wrapper.findWhere(n => n.type() !== 'string');
    // console.log(wrapper.debug());
    // console.log(complexComponents.debug());
    // console.log(wrapper.find("WithStyles (Dialog)").dive());
});
