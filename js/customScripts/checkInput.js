"use strict";

define(function () {

    // return array with no white spaces in words
    return function (input) {
        var words = input.split(" ");
        // remove empty strings ( white spaces ) from array of words
        return words.filter(function (word) {
            return word !== "";
        });
    };
});