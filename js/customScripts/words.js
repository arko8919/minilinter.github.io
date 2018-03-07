"use strict";

define(function () {
    // Creating object
    var wordsArray = {};
    // Unnecessary characters
    var characterArray = [".", ",", "!", "\"", "-", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

    // This function calls other functions and return result
    wordsArray.prepareWords = function (userInput) {
        var words = wordsArray.splitWords(userInput);
        words = wordsArray.cleanWords(words);
        return words;
    };

    // This function split sentences to separate words
    wordsArray.splitWords = function (userInput) {
        return userInput.split(" ");
    };

    // This function split words to letters. Clean letters from unnecessary characters. Join letter into words.
    wordsArray.cleanWords = function (words) {
        return words.map(function (word) {
            word = word.split("");
            var letters = word.filter(function (letter) {
                return !characterArray.includes(letter);
            });
            word = letters.join("");
            return word;
        });
    };

    return wordsArray; // Return object
}); // FUNCTION END