define(['splitInput', 'joinInput', 'highlightWords'],
    function (splitInput, joinInput, highlightWords) {
    return function (selectedWord, userInput) {

        const userInputWords = splitInput(userInput);

        // highlight selected input
        userInputWords[selectedWord.index] = "<span class='highlight-yellow'>" + selectedWord.name + "</span>";
        const newInput = joinInput(userInputWords);

        // highlight other overused and unnecessary words
        document.getElementById("preview").innerHTML = highlightWords(newInput);

    } // Function End Here

});