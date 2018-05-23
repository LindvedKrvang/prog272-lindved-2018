import React from 'react';
import AddressShow from '../gui/components/AddressShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import MockServer from './mock/MockServer';
import { Text, View } from 'react-native';


configure({ adapter: new Adapter()});

const server = new MockServer();
const addresses = server.addresses;

const component = <AddressShow/>;

it('Renders without crashing', () => {
    const rendered = renderer.create(<AddressShow address={addresses[0]} />).toJSON();
    expect(rendered).toBeTruthy();
});

it('Displays Loading... if address equals null', () => {
    const wrapper = shallow(<AddressShow address={null} />);
    const expectedResult = (
        <View>
            <Text
                style={{
                    fontWeight: 'bold',
                    fontSize: 30,
                    textAlign: 'center'
                }}
            >
                Loading...
            </Text>
        </View>
    );
    const answer = wrapper.contains(expectedResult);
    expect(answer).toBe(true);
});

const checkValue = (address, name, result) => {
    const wrapper = shallow(<AddressShow address={address} />);
    const expectedResult = (
        <Text>
            <Text style={{ fontWeight: 'bold' }}>{name}: </Text>
            {result}
        </Text>
    );
    expect(wrapper).toMatchSnapshot();
};


it('Renders state of FirstName paragraph', () => {
    checkValue(addresses[1], 'First Name:', addresses[1].firstName);
});

it('Renders state of LastName paragraph', () => {
    checkValue(addresses[1], 'Last Name:', addresses[1].lastName);
});

it('Renders state of Street paragraph', () => {
    checkValue(addresses[1], 'Street:', addresses[1].street);
});

it('Renders state of City paragraph', () => {
    checkValue(addresses[1], 'City:', addresses[1].city);
});

it('Renders state of State paragraph', () => {
    checkValue(addresses[1], 'State:', addresses[1].state);
});

it('Renders state of Zip paragraph', () => {
    checkValue(addresses[1], 'Zip:', addresses[1].zip);
});

it('Renders state of Phone paragraph', () => {
    checkValue(addresses[1], 'Phone:', addresses[1].phone);
});

it('Renders state of Fax paragraph', () => {
    checkValue(addresses[1], 'Fax:', addresses[1].fax);
});

it('Renders state of TollFree paragraph', () => {
    checkValue(addresses[1], 'Toll Free:', addresses[1].tollFree);
});
