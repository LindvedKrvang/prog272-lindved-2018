"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Immediately invoked function using ES5 syntax.
(function () {
    console.log("Immediately invoke with ES5");
})();

// Immediately invoked function using ES6 syntax.
(function () {
    console.log("Immediately invocation ES6");
})();

// ----------------------------------------------

(function (array) {
    array.forEach(function (data) {
        console.log(data);
    });
})(["One", "Two", "Three"]);

// ----------------------------------------------

var logger = function logger(array) {
    array.forEach(function (data, i) {
        console.log(data, i);
    });
};

var numbers = ["One", "Two", "Three"];
logger(numbers);

// ----------------------------------------------

function addEs5(a, b) {
    return a + b;
};

var addEs6 = function addEs6(a, b) {
    return a + b;
};

var addConcise = function addConcise(a, b) {
    return a + b;
};

console.log(addEs5(4, 4));
console.log(addEs6(10, 10));
console.log(addConcise(10, 20));

// ----------------------------------------------

var loggerForOf = function loggerForOf(array) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var data = _step.value;

            console.log(data);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
};
loggerForOf(numbers);

var myObject = { first: "alpha", last: "omega" };

var loggerForIn = function loggerForIn(object) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            console.log(object[property]);
        }
    }
};

loggerForIn(myObject);

// ----------------------------------------------

var Person = function () {
    function Person(first, last) {
        _classCallCheck(this, Person);

        this.first = first;
        this.last = last;
    }

    _createClass(Person, [{
        key: "fullName",
        value: function fullName() {
            return this.first + " " + this.last;
        }

        // Doesn't work in ES6, but will in the future.
        // Works in React. Use this syntax there.
        // getLast = () => this.last;

    }]);

    return Person;
}();

var person = new Person("Some", "Name");
console.log(person.fullName());

// ----------------------------------------------