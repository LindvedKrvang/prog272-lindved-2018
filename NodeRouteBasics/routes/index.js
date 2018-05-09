const express = require('express');
const router = express.Router();

const utils = require("./utils.js");
const feetInOneMile = 5280;


/* GET home page. */
router.get('/', function(req, res) { 'use strict';
  res.render('index', { title: 'NodeRouteBasics Hello World' });
});

router.get('/search', function(req, res) { 'use strict';
console.log("Server side search called");
    res.send({
        result: 'Hello World',
        value: "Some value",
        statusCode: "200"
    })
});

router.get('/feetInAMile', function (req, res) {'use strict';
    res.send({
        result: `There is ${feetInOneMile} feet in a mile.`
    })
});

router.get('/xFeetInXMiles/:miles', function (req, res) {'use strict';
    const miles = req.params["miles"];
    res.send({
        result: `There is ${miles * feetInOneMile} feet in ${miles} miles`
    });
});

router.get('/circleCircumference/:radius', function (req, res) { 'use strict';
    const radius = req.params["radius"];
    const circumference = utils.calculateCircumference(radius);
    res.send({
        result: `The circumference of a circle with a radius of ${radius} is ${circumference}`
    })
});

module.exports = router;
