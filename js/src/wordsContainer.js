define(['compareWords', 'checkInput'], function (compareWords, checkInput) {

    return {

        _overusedWords: ["unique", "awesome", "amazing", "totally", "basically", "incredible", "really",
            "very", "honestly", "absolutely", "unbelievable"],

        _unnecessaryWords: ["extremely", "literally", "actually"],


        get overusedWords() {
            return this._overusedWords;
        },

        get unnecessaryWords() {
            return this._unnecessaryWords;
        },

        // passing argument to "overused" set function
        addOverusedWords(overusedWordsInput) {
            const words = checkInput(overusedWordsInput);
            for(let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                if(this.overusedWords.includes(words[wordsIndex]) === false &&
                    this.unnecessaryWords.includes(words[wordsIndex]) === false) {
                    this._overusedWords.push(words[wordsIndex]);
                }

            }
        },
        addUnnecessaryWords(unnecessaryWordsInput) {
            const words = checkInput(unnecessaryWordsInput);
            for(let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                if(this.unnecessaryWords.includes(words[wordsIndex]) === false &&
                    this.overusedWords.includes(words[wordsIndex]) === false )
                    this._unnecessaryWords.push(words[wordsIndex]);
            }
        },

        // return location ( index) of the overused words inside array and word itself
        findOverusedWords(userInput) {
            return compareWords(userInput, this.overusedWords);
        },
        // return location ( index) of the unnecessary words inside array and word itself
        findUnnecessaryWords(userInput) {
            return compareWords(userInput, this.unnecessaryWords);
        }

    }; // OBJECT END HERE
}); // DEFINE END HERE

