'use strict';

define(['highlightSelectedWords'], function (highlightSelectedWords) {
    return function (userInput, overusedWords, unnecessaryWords) {

        // select class identifiers, created before in createElements.js
        var leftSideForm = document.getElementsByClassName('sideForm')[0];
        var leftSide = leftSideForm.getElementsByTagName('input');
        var rightSideForm = document.getElementsByClassName('sideForm')[1];
        var rightSide = rightSideForm.getElementsByTagName('input');

        var _loop = function _loop(leftSideIndex) {
            // creating events for overused words
            leftSide[leftSideIndex].addEventListener("click", getLeftInputId, false);
            function getLeftInputId() {
                highlightSelectedWords(overusedWords[leftSideIndex], userInput);
            }
        };

        for (var leftSideIndex = 0; leftSideIndex < leftSide.length; leftSideIndex++) {
            _loop(leftSideIndex);
        }

        var _loop2 = function _loop2(rightSideIndex) {
            // creating events for unnecessary words
            rightSide[rightSideIndex].addEventListener("click", getRightInputId, false);
            function getRightInputId() {
                highlightSelectedWords(unnecessaryWords[rightSideIndex], userInput);
            }
        };

        for (var rightSideIndex = 0; rightSideIndex < rightSide.length; rightSideIndex++) {
            _loop2(rightSideIndex);
        }
    };
});