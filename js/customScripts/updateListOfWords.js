"use strict";

define(['wordsContainer'], function (wordsContainer) {
    return function () {
        // Called function (getElementsByClassName) to grab a reference to elements with "class" identifier "wordsList"
        // We select [object HTMLCollection] --> collection of elements with the same identifier "class"
        // and [0] and [1] selects elements from this collection [object HTMLDivElement]
        var overusedWordsList = document.getElementsByClassName("wordsList")[0];
        var unnecessaryWordsList = document.getElementsByClassName("wordsList")[1];
        // Called function "getElementsByTagName" to grab a reference to paragraphs elements
        // We select [object HTMLCollection] --> collection of paragraphs and [0] select first paragraph element
        // [object HTMLParagraphElement]
        // Set the value of the selected paragraph to overused word
        // Set the value of the selected paragraph to unnecessary word


        for (var wordIndex = 0; wordIndex < wordsContainer.overusedWords.length; wordIndex++) {
            var newParagraphElement = document.createElement("p");
            var newParagraphTextNode = document.createTextNode(wordsContainer.overusedWords[wordIndex]);
            newParagraphElement.appendChild(newParagraphTextNode);
            overusedWordsList.appendChild(newParagraphElement);
        }

        for (var _wordIndex = 0; _wordIndex < wordsContainer.unnecessaryWords.length; _wordIndex++) {
            var _newParagraphElement = document.createElement("p");
            var _newParagraphTextNode = document.createTextNode(wordsContainer.unnecessaryWords[_wordIndex]);
            _newParagraphElement.appendChild(_newParagraphTextNode);
            unnecessaryWordsList.appendChild(_newParagraphElement);
        }
    };
});