/*
define(['wordsArray'],function(wordsArray) {
    return {
        highlightWord: function(inputOverusedWords, userInput, id) {
            const number = parseInt(id);
            // split words
            const words = wordsArray.splitWords(userInput);
            // find words in words array base on index which "inputOverusedWords" provide
            for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                for (let inputIndex = 0; inputIndex < inputOverusedWords.length; inputIndex++) {
                    if (wordsIndex === inputOverusedWords[inputIndex].index && number !== wordsIndex) {
                        words[wordsIndex] = "<span>" + words[wordsIndex] + "</span>";
                    }
                    else if (number === wordsIndex) {
                        words[wordsIndex] = "<span class='highlight-span'>" + words[wordsIndex] + "</span>";                 }
                }
            }
            // join array of words into string and return value
            return words.join(" ");
        }
    }
});
*/
"use strict";