'use strict';

define(['compareWords', 'wordsArray', 'checkInput'], function (compareWords, wordsArray, checkInput) {

    return {

        _overusedWords: ["literally", "unique", "awesome", "amazing", "totally", "basically", "incredible", "really", "very", "honestly", "absolutely", "unbelievable"],

        get overused() {
            return this._overusedWords;
        },
        // set "overused" array with new words from input after removing spaces from them
        set overused(overusedWordsInput) {
            this._overusedWords.push.apply(this.overused, checkInput.check(overusedWordsInput));
        },
        // passing argument to "overused" set function
        addOverusedWords: function addOverusedWords(overusedWordsInput) {
            this.overused = overusedWordsInput;
        },


        // return array of overused words as objects
        findOverusedWords: function findOverusedWords(userInput) {
            return compareWords.compare(userInput, this.overused);
        }
    }; // OBJECT END HERE
}); // DEFINE END HERE