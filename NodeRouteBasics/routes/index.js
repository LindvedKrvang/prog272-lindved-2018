var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Hello World' });
});

router.get('/search', function(req, res, next) { 'use strict';
console.log("Server side search called");
    res.send({
        result: 'Hello World',
        value: "Some value",
        statusCode: "200"
    })
});

module.exports = router;
