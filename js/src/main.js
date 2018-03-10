define(['menu', 'updateListOfWords', 'findWords', 'highlightWords'],
    function (menu, updateListOfWords, findWords, highlightWords) {

        let userInput = "";

        // references to elements
        const input = document.getElementById("input");
        const outputParagraph = document.getElementById("output");
        const nav = document.getElementById("nav");
        const options = document.getElementById("options");
        const menuOptions = options.getElementsByTagName("span");
        const lint = document.getElementById("lint");
        const openbtn = document.getElementById("openbtn");
        const closebtn = document.getElementById("closebtn");

        // open menu
        openbtn.addEventListener("click", () => {
            nav.style.width = "50%";
            setTimeout(() => {
                options.style.opacity = "1";
            }, 300)
        });

        // close menu
        closebtn.addEventListener("click", () => {
            options.style.opacity = "0";
            setTimeout(() => {
                nav.style.width = "0%";
            }, 100);
        });

        // update display list of overused words and unnecessary words
        updateListOfWords();

        lint.addEventListener("click", () => {
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
        for (let menuOptionsIndex = 0; menuOptionsIndex < menuOptions.length; menuOptionsIndex++) {
            menuOptions[menuOptionsIndex].addEventListener("click", () => {
                menu(menuOptionsIndex);
            }, false);
        }
    });






