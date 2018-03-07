define(['splitInput'], function (splitInput) {

        return function(userInput, wordsToCompare) {
            // new array of objects { name, index }
            const wordsList = [];
            // return array of words
            const words =  splitInput(userInput);

            // loop over each word in array of words
            for (let wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
                // loop over each word in array of overused words
                for (let wordsToCompareIndex = 0; wordsToCompareIndex < wordsToCompare.length; wordsToCompareIndex++) {
                    //check if word from array of words, is equal to word from overused array of words
                    if (words[wordsIndex] === wordsToCompare[wordsToCompareIndex]) {
                        // push "word" and and "index" of word to array as object
                        wordsList.push({name: words[wordsIndex], index: wordsIndex});
                    }
                }
            }
            return wordsList;
        }
});