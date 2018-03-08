'use strict';

define(['menu', 'updateListOfWords', 'findWords', 'highlightWords'], function (menu, updateListOfWords, findWords, highlightWords) {
    var userInput = "";
    var outputParagraph = document.getElementById("output");

    var openbtn = document.getElementById("openbtn");
    var closebtn = document.getElementById("closebtn");

    openbtn.addEventListener("click", function () {
        document.getElementById("nav").style.width = "50%";
        setTimeout(function () {
            document.getElementById("options").style.opacity = "1";
        }, 300);
    });

    closebtn.addEventListener("click", function () {
        document.getElementById("options").style.opacity = "0";
        setTimeout(function () {
            document.getElementById("nav").style.width = "0%";
        }, 100);
    });

    // update display list of overused words and unnecessary words
    updateListOfWords();

    // using function (getElementById) we grab reference to <div> element with "id" identifier "dropDown-content"
    // --> [object HTMLDivElement]
    var options = document.getElementById("options");

    // using function (getElementsByTagName) we grab reference to all <span> elements --> [object HTMLCollection]
    var menuOptions = options.getElementsByTagName("span");

    //Lint
    var lint = document.getElementById("lint");
    lint.addEventListener("click", function () {
        // get input from user and set "userInput" variable using this value
        userInput = document.getElementById("input").value;
        // find overused/unnecessary words, create elements ( span, input ), add event listeners
        findWords(userInput);
        // call a function which highlight overused/unnecessary words
        outputParagraph.innerHTML = highlightWords(userInput);
        document.getElementById("output").style.padding = "10px";
    });

    // creating event listeners for all span elements and pass "index" as argument
    // each index is different option { case inside switch statement } --> menu.js file

    var _loop = function _loop(menuOptionsIndex) {
        menuOptions[menuOptionsIndex].addEventListener("click", function () {
            menu(menuOptionsIndex, userInput);
        }, false);
    };

    for (var menuOptionsIndex = 0; menuOptionsIndex < menuOptions.length; menuOptionsIndex++) {
        _loop(menuOptionsIndex);
    }
});