'use strict';

define(['menu', 'updateListOfWords', 'findWords', 'highlightWords'], function (menu, updateListOfWords, findWords, highlightWords) {

    var userInput = "";

    // references to elements
    var input = document.getElementById("input");
    var outputParagraph = document.getElementById("output");
    var nav = document.getElementById("nav");
    var options = document.getElementById("options");
    var menuOptions = options.getElementsByTagName("span");
    var lint = document.getElementById("lint");
    var openbtn = document.getElementById("openbtn");
    var closebtn = document.getElementById("closebtn");

    // open menu
    openbtn.addEventListener("click", function () {
        nav.style.width = "50%";
        setTimeout(function () {
            options.style.opacity = "1";
        }, 300);
    });

    // close menu
    closebtn.addEventListener("click", function () {
        options.style.opacity = "0";
        setTimeout(function () {
            nav.style.width = "0%";
        }, 100);
    });

    // update display list of overused words and unnecessary words
    updateListOfWords();

    lint.addEventListener("click", function () {
        // get input from user and set "userInput" variable using this value
        userInput = input.value;
        // find overused/unnecessary words, create elements ( span, input ), add event listeners
        findWords(userInput);
        // call a function which highlight overused/unnecessary words
        outputParagraph.innerHTML = highlightWords(userInput);
        // change style after elements are added
        outputParagraph.style.padding = ".8em";
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