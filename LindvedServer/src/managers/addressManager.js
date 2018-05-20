
const addresses = require('../model/addressList');
module.exports = {

    getNextAddress: function(currentIndex) {
        currentIndex = (currentIndex >= addresses.length - 1) ? 0 : currentIndex + 1;
        console.log("Addresses: " + addresses);
        return {
            index: currentIndex,
            address: addresses[currentIndex]
        }
    },

    getAllAddresses: function() {
        return addresses;
    }
};
