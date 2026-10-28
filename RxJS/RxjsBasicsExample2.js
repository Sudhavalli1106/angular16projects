"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var randomNumber$ = new rxjs_1.Observable(function (observer) {
    var intervalId = setInterval(function () { return observer.next(Math.floor(Math.random() * 100)); }, 1000);
    return function () { return clearInterval(intervalId); }; // Cleanup on unsubscribe
});
var subscription = randomNumber$
    .pipe((0, operators_1.filter)(function (num) { return num % 2 !== 0; })) // Filter odd numbers
    .subscribe(function (num) { return console.log("Odd Number: ".concat(num)); });
setTimeout(function () { return subscription.unsubscribe(); }, 5000); // Stop after 5 sec
