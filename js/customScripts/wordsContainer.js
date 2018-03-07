'use strict';

define(['compareWords', 'checkInput'], function (compareWords, checkInput) {

    return {

        _overusedWords: ["unique", "awesome", "amazing", "totally", "basically", "incredible", "really", "very", "honestly", "absolutely", "unbelievable"],

        _unnecessaryWords: ["extremely", "literally", "actually"],

        get overusedWords() {
            return this._overusedWords;
        },

        get unnecessaryWords() {
            return this._unnecessaryWords;
        },

        // passing argument to "overused" set function
        addOverusedWords: function addOverusedWords(overusedWordsInput) {
            var words = checkInput(overusedWordsInput);
            for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                if (this.overusedWords.includes(words[wordsIndex]) === false && this.unnecessaryWords.includes(words[wordsIndex]) === false) {
                    this._overusedWords.push(words[wordsIndex]);
                }
            }
        },
        addUnnecessaryWords: function addUnnecessaryWords(unnecessaryWordsInput) {
            var words = checkInput(unnecessaryWordsInput);
            for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                if (this.unnecessaryWords.includes(words[wordsIndex]) === false && this.overusedWords.includes(words[wordsIndex]) === false) this._unnecessaryWords.push(words[wordsIndex]);
            }
        },


        // return location ( index) of the overused words inside array and word itself
        findOverusedWords: function findOverusedWords(userInput) {
            return compareWords(userInput, this.overusedWords);
        },

        // return location ( index) of the unnecessary words inside array and word itself
        findUnnecessaryWords: function findUnnecessaryWords(userInput) {
            return compareWords(userInput, this.unnecessaryWords);
        }
    }; // OBJECT END HERE
}); // DEFINE END HERE