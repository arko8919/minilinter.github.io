'use strict';

define(['wordsContainer', 'findWords', 'updateListOfWords', 'highlightWords', 'changeWords'], function (wordsContainer, findWords, updateListOfWords, highlightWords, changeWords) {

    // references to elements
    var outputParagraph = document.getElementById("output");
    var input = document.getElementById("input");

    return function (option, userInput) {
        switch (option + 1) {
            case 1:
                // get input from user and set "userInput" variable using this value
                userInput = input.value;
                // find overused/unnecessary words, create elements ( span, input ), add event listeners
                findWords(userInput);
                // call a function which highlight overused/unnecessary words
                outputParagraph.innerHTML = highlightWords(userInput);
                // change style after elements are added
                outputParagraph.style.padding = "10px";
                break;
            case 2:
                // if input empty get value
                if (userInput === "") {
                    userInput = document.getElementById("input").value;
                }
                // find overused/unnecessary words, create elements ( span, input ), add event listeners
                findWords(userInput);
                // call a function which highlight overused/unnecessary words
                outputParagraph.innerHTML = highlightWords(userInput);
                break;
            case 3:
                // reference to popup Window Overlay
                var popupWindowOverlayAdd = document.getElementsByClassName("popup-window-overlay")[0];
                // Open addWords PopUp Window
                popupWindowOverlayAdd.style.display = "block";
                document.getElementById("nav").style.width = "0%";

                var closeAddWords = document.getElementsByClassName("closeAddWords")[0];
                closeAddWords.addEventListener("click", function () {
                    popupWindowOverlayAdd.style.display = "none";
                });

                var addWordBtn = document.getElementsByClassName("addWordBtn")[0];
                addWordBtn.addEventListener("click", function () {
                    // grab input from user ( new overused word/words )
                    var addedOverusedWords = document.getElementById("overusedWords");
                    // calls function which add new overused words to list
                    wordsContainer.addOverusedWords(addedOverusedWords.value);
                    // reset value of overused words input
                    addedOverusedWords.value = "";

                    // grab input from user ( new unnecessary word/words )
                    var addedUnnecessaryWords = document.getElementById("unnecessaryWords");
                    // calls function which add new unnecessary words to list
                    wordsContainer.addUnnecessaryWords(addedUnnecessaryWords.value);
                    // reset value of overused words input
                    addedUnnecessaryWords.value = "";

                    // update display list of overused words and unnecessary words
                    updateListOfWords();

                    // find overused/unnecessary words, create elements ( span, input ), add event listeners
                    findWords(userInput);
                    // call a function which highlight overused/unnecessary words
                    outputParagraph.innerHTML = highlightWords(userInput);
                });
                break;
            case 4:
                // reference to popup Window Overlay
                var popupWindowOverlayReplace = document.getElementsByClassName("popup-window-overlay")[1];
                popupWindowOverlayReplace.style.display = "block";
                document.getElementById("nav").style.width = "0%";

                var closeReplaceWords = document.getElementsByClassName("closeReplaceWords")[0];
                closeReplaceWords.addEventListener("click", function () {
                    popupWindowOverlayReplace.style.display = "none";
                });

                var preview = document.getElementById("preview");

                preview.innerHTML = highlightWords(userInput);

                var replaceWordsBtn = document.getElementsByClassName("replaceWordsBtn")[0];
                replaceWordsBtn.addEventListener("click", function () {
                    // change words and return ( clean edited user input, highlighted edited user input )
                    var arrayOfTwoResults = changeWords(userInput);
                    // assign clean edited user input
                    userInput = arrayOfTwoResults[0];
                    // find overused/unnecessary words, create elements ( span, input ), add event listeners
                    findWords(arrayOfTwoResults[1]);
                    // call a function which highlight overused/unnecessary words
                    outputParagraph.innerHTML = highlightWords(arrayOfTwoResults[1]);
                    preview.innerHTML = highlightWords(arrayOfTwoResults[1]);
                });
                break;
            case 5:
                // reference to popup Window Overlay
                var popupWindowOverlayShow = document.getElementsByClassName("popup-window-overlay")[2];
                popupWindowOverlayShow.style.display = "block";
                document.getElementById("nav").style.width = "0%";

                var closeShowWords = document.getElementsByClassName("closeShowWords")[0];
                closeShowWords.addEventListener("click", function () {
                    popupWindowOverlayShow.style.display = "none";
                });

                var dropDown = document.getElementsByClassName("dropDown");
                var wordsList = document.getElementsByClassName("wordsList");

                dropDown[0].addEventListener("click", function () {
                    wordsList[0].style.visibility = wordsList[0].style.visibility === "visible" ? "hidden" : "visible";
                });

                dropDown[1].addEventListener("click", function () {
                    wordsList[1].style.visibility = wordsList[1].style.visibility === "visible" ? "hidden" : "visible";
                });
                break;
        }
    };
});