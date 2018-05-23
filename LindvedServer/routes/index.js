
const AddressManager = require("../src/managers/addressManager");
const fs = require('fs');

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
    readFile(__dirname + '/address-list.json')
        .then((json) => {
            res.send(JSON.parse(json.result));
        });
});

function readFile(fileName) {
    'use strict';
    return new Promise(function(resolve, reject){
        fs.readFile(fileName, 'utf8', function (err, fileContents) {
            if(err){
                reject(err);
            }
            resolve({
                'result': fileContents
            });
        });
    });
}

router.get('/test', function (req, res) {
   res.json({
       test: "Test",
       moreTest: "Test"
   })
});

module.exports = router;
