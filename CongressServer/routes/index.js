var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'CongressServer' });
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

router.get('/address-list', function (req, res) {
    'use strict';
    readFile(__dirname + '/address-list.json')
        .then((json) => {
            res.send(JSON.parse(json.result));
        });
});

module.exports = router;
