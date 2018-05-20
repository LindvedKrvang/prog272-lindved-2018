
const AddressManager = require("../src/managers/addressManager");


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lindved Server' });
});

router.get('/nextAddress/:currentIndex', function (req, res) {
   const currentIndex = parseInt(req.params["currentIndex"]);
   const result = AddressManager.getNextAddress(currentIndex);
   res.send({
       index: result.index,
       address: result.address
   })
});

router.get('/get-address-list', function (req, res) {
    const addresses = AddressManager.getAllAddresses();
    res.send({
        addresses: addresses
    });
});

router.get('/test', function (req, res) {
   res.json({
       test: "Test",
       moreTest: "Test"
   })
});

module.exports = router;
