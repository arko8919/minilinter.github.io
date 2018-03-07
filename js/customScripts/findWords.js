'use strict';

define(['wordsContainer', 'createElements', 'addEventListenerOnOverusedWords'], function (wordsContainer, createElements, addEventListenerOnOverusedWords) {

    return function (userInput) {
        // return overused words array with objects and each object have property "name" and "index"
        var overusedWords = wordsContainer.findOverusedWords(userInput);
        // return unnecessary words array with objects and each object have property "name" and "index"
        var unnecessaryWords = wordsContainer.findUnnecessaryWords(userInput);

        // select left side container for overused Words
        var leftSideForm = document.getElementsByClassName("sideForm")[0];
        // select right side container for unnecessary Words
        var rightSideForm = document.getElementsByClassName("sideForm")[1];

        // create input and span elements for overused Words
        createElements(overusedWords, leftSideForm);
        // create input and span elements for unnecessary Words
        createElements(unnecessaryWords, rightSideForm);

        // creating event listeners for created input elements
        addEventListenerOnOverusedWords(userInput, overusedWords, unnecessaryWords);
    };
});