"use strict";

define(['wordsArray'], function (wordsArray) {
    return function (inputOverusedWords, userInput, id) {
        var number = parseInt(id);
        var words = wordsArray.splitWords(userInput);

        // find words in words array base on index which "inputOverusedWords" provide
        for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
            for (var inputIndex = 0; inputIndex < inputOverusedWords.length; inputIndex++) {
                if (number === -1) {
                    if (wordsIndex === inputOverusedWords[inputIndex].index) {
                        words[wordsIndex] = "<span>" + words[wordsIndex] + "</span>";
                    }
                } else if (number >= 0) {
                    if (wordsIndex === inputOverusedWords[inputIndex].index && number !== wordsIndex) words[wordsIndex] = "<span>" + words[wordsIndex] + "</span>";else if (wordsIndex === inputOverusedWords[inputIndex].index && number === wordsIndex) {
                        words[wordsIndex] = "<span class='highlight-span'>" + words[wordsIndex] + "</span>";
                    }
                } else if (number === -2) {
                    if (wordsIndex === inputOverusedWords[inputIndex].index) {
                        // get input value
                        var getElement = document.getElementById(inputOverusedWords[inputIndex].index);
                        if (getElement.value !== "") words[wordsIndex] = "<span>" + getElement.value + "</span>";
                    }
                }
            }
        }
        // join array of words into string and return value
        return words.join(" ");
    };
});