'use strict';

define(['wordsContainer.js', 'createElements.js', 'editOverusedWords', 'addEventListenerOnOverusedWords'], function (overusedWords, replaceOverusedWords, editOverusedWords, addEventListenerOnOverusedWords) {

    return function (newInput) {
        // return overused words array with objects and each object have property of "word" and "index"

        var inputOverusedWords = overusedWords.findOverusedWords(newInput);
        // add elements to DOM
        replaceOverusedWords.add(inputOverusedWords);
        // creating event listeners for added input elements
        addEventListenerOnOverusedWords(newInput);
        // return edited paragraph with highlighted overused words
        return editOverusedWords(inputOverusedWords, newInput, "-1");
    };
});