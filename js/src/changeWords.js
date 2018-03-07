define(['wordsContainer', 'splitInput', 'joinInput'],
    function (wordsContainer, splitInput, joinInput) {
    return function (userInput) {
        // return overused words array with objects and each object have property "name" and "index"
        const overusedWords = wordsContainer.findOverusedWords(userInput);
        // return unnecessary words array with objects and each object have property "name" and "index"
        const unnecessaryWords = wordsContainer.findUnnecessaryWords(userInput);

        // grab container which hold all span and input elements from both sides
        const leftSideForm = document.getElementsByClassName('sideForm')[0];
        const rightSideForm = document.getElementsByClassName('sideForm')[1];

        // grab input elements from both sides
        const leftInput = leftSideForm.getElementsByTagName('input');
        const rightInput = rightSideForm.getElementsByTagName('input');

        // split sequence of text into words
        let userInputWords = splitInput(userInput);
        let display = splitInput(userInput);

        // change overused words and highlight them
        for(let overusedWordsIndex = 0; overusedWordsIndex < overusedWords.length;overusedWordsIndex++) {
            if(leftInput[overusedWordsIndex].value !== "") {
                userInputWords[overusedWords[overusedWordsIndex].index] = leftInput[overusedWordsIndex].value;
                display[overusedWords[overusedWordsIndex].index] =
                    "<span class='highlight-blue'>" +leftInput[overusedWordsIndex].value + "</span>";
            }
        }

        // change unnecessary words and highlight them
        for(let unnecessaryWordsIndex = 0; unnecessaryWordsIndex < unnecessaryWords.length;unnecessaryWordsIndex++) {
            if(rightInput[unnecessaryWordsIndex].value !== "") {
                userInputWords[unnecessaryWords[unnecessaryWordsIndex].index] = rightInput[unnecessaryWordsIndex].value;
                display[unnecessaryWords[unnecessaryWordsIndex].index] =
                    "<span class='highlight-blue'>" + rightInput[unnecessaryWordsIndex].value + "</span>";
            }
        }

        // join words int sequence of test
        display = joinInput(display);
        userInputWords = joinInput(userInputWords);

        return [userInputWords, display];

    }
});