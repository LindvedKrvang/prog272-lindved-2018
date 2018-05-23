const url = 'http://ec2-52-14-172-18.us-east-2.compute.amazonaws.com:30026';
const getAddressesQuery = '/get-address-list';

export default class LindvedServer {
    getAddresses = updateCaller => {
        fetch(url + getAddressesQuery)
            .then(response => response.json())
            .then(response => {
                updateCaller(response);
            })
            .catch(ex => {
                console.log(ex);
            });
    };
}
