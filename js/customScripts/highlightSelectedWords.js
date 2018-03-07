'use strict';

define(['splitInput', 'joinInput', 'highlightWords'], function (splitInput, joinInput, highlightWords) {
        return function (selectedWord, userInput) {

                var userInputWords = splitInput(userInput);

                // highlight selected input
                userInputWords[selectedWord.index] = "<span class='highlight-yellow'>" + selectedWord.name + "</span>";
                var newInput = joinInput(userInputWords);

                // highlight other overused and unnecessary words
                document.getElementById("output").innerHTML = highlightWords(newInput);
                document.getElementById("preview").innerHTML = highlightWords(newInput);
        }; // Function End Here
});