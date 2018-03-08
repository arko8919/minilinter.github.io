define(['menu', 'updateListOfWords', 'findWords', 'highlightWords'],
    function (menu, updateListOfWords, findWords, highlightWords) {
        let userInput = "";
        let outputParagraph = document.getElementById("output");

        const openbtn = document.getElementById("openbtn");
        const closebtn = document.getElementById("closebtn");

        openbtn.addEventListener("click", () => {
            document.getElementById("nav").style.width = "50%";
            setTimeout(() => {
                document.getElementById("options").style.opacity = "1";
            }, 300)
        });

        closebtn.addEventListener("click", ()  => {
            document.getElementById("options").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("nav").style.width = "0%";
            }, 100);
        });


        // update display list of overused words and unnecessary words
        updateListOfWords();


        // using function (getElementById) we grab reference to <div> element with "id" identifier "dropDown-content"
        // --> [object HTMLDivElement]
        const options = document.getElementById("options");

        // using function (getElementsByTagName) we grab reference to all <span> elements --> [object HTMLCollection]
        const menuOptions = options.getElementsByTagName("span");

        //Lint
         const lint = document.getElementById("lint");
         lint.addEventListener("click", ()=> {
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
        for (let menuOptionsIndex = 0; menuOptionsIndex < menuOptions.length; menuOptionsIndex++) {
            menuOptions[menuOptionsIndex].addEventListener("click", function () {
                menu(menuOptionsIndex, userInput);
            }, false);
        }
    });






