define(['wordsContainer', 'splitInput', 'joinInput'], function (wordsContainer, splitInput, joinInput) {
        // Highlight words
        return function (userInput) {
            // return overused words array with objects and each object have property "name" and "index"
            const overusedWords = wordsContainer.findOverusedWords(userInput);
            // return unnecessary words array with objects and each object have property "name" and "index"
            const unnecessaryWords = wordsContainer.findUnnecessaryWords(userInput);

            // split sequence of text into array of words
            const words = splitInput(userInput);

            // highlight overused words
            for (let overusedWordsIndex = 0; overusedWordsIndex < overusedWords.length; overusedWordsIndex++) {
                words[overusedWords[overusedWordsIndex].index] = "<span class='highlight-red'>" +
                    overusedWords[overusedWordsIndex].name + "</span>";
            }

            // highlight unnecessary words
            for( let unnecessaryWordsIndex = 0; unnecessaryWordsIndex < unnecessaryWords.length; unnecessaryWordsIndex++) {
                words[unnecessaryWords[unnecessaryWordsIndex].index] = "<span class='highlight-purple'>" +
                    unnecessaryWords[unnecessaryWordsIndex].name + "</span>";
            }

            // join words into sequence of text
            return joinInput(words);

        } // Function End Here
    }
);