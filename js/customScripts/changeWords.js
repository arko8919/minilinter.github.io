'use strict';

define(['wordsContainer', 'splitInput', 'joinInput'], function (wordsContainer, splitInput, joinInput) {
        return function (userInput) {
                // return overused words array with objects and each object have property "name" and "index"
                var overusedWords = wordsContainer.findOverusedWords(userInput);
                // return unnecessary words array with objects and each object have property "name" and "index"
                var unnecessaryWords = wordsContainer.findUnnecessaryWords(userInput);

                // grab container which hold all span and input elements from both sides
                var leftSideForm = document.getElementsByClassName('sideForm')[0];
                var rightSideForm = document.getElementsByClassName('sideForm')[1];

                // grab input elements from both sides
                var leftInput = leftSideForm.getElementsByTagName('input');
                var rightInput = rightSideForm.getElementsByTagName('input');

                // split sequence of text into words
                var userInputWords = splitInput(userInput);
                var display = splitInput(userInput);

                // change overused words and highlight them
                for (var overusedWordsIndex = 0; overusedWordsIndex < overusedWords.length; overusedWordsIndex++) {
                        if (leftInput[overusedWordsIndex].value !== "") {
                                userInputWords[overusedWords[overusedWordsIndex].index] = leftInput[overusedWordsIndex].value;
                                display[overusedWords[overusedWordsIndex].index] = "<span class='highlight-blue'>" + leftInput[overusedWordsIndex].value + "</span>";
                        }
                }

                // change unnecessary words and highlight them
                for (var unnecessaryWordsIndex = 0; unnecessaryWordsIndex < unnecessaryWords.length; unnecessaryWordsIndex++) {
                        if (rightInput[unnecessaryWordsIndex].value !== "") {
                                userInputWords[unnecessaryWords[unnecessaryWordsIndex].index] = rightInput[unnecessaryWordsIndex].value;
                                display[unnecessaryWords[unnecessaryWordsIndex].index] = "<span class='highlight-blue'>" + rightInput[unnecessaryWordsIndex].value + "</span>";
                        }
                }

                // join words int sequence of test
                display = joinInput(display);
                userInputWords = joinInput(userInputWords);

                return [userInputWords, display];
        };
});