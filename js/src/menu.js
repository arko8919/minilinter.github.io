define(['wordsContainer', 'findWords', 'updateListOfWords', 'highlightWords', 'changeWords'],
    function (wordsContainer, findWords, updateListOfWords, highlightWords, changeWords) {
        // store sequence of text typed by user --> this part change through program running
        // let userInput = "";
        // reference to paragraph element
        let outputParagraph = document.getElementById("output");


        return function (option, userInput) {
            switch (option + 1) {
                case 1:
                    // get input from user and set "userInput" variable using this value
                    userInput = document.getElementById("input").value;
                    // find overused/unnecessary words, create elements ( span, input ), add event listeners
                    findWords(userInput);
                    // call a function which highlight overused/unnecessary words
                    outputParagraph.innerHTML = highlightWords(userInput);
                    document.getElementById("output").style.padding = "10px";
                    break;
                case 2:

                    // find overused/unnecessary words, create elements ( span, input ), add event listeners
                    findWords(userInput);
                    // call a function which highlight overused/unnecessary words
                    outputParagraph.innerHTML = highlightWords(userInput);
                    break;
                case 3:
                    // reference to popup Window Overlay
                    const popupWindowOverlayAdd = document.getElementsByClassName("popup-window-overlay")[0];
                    // Open addWords PopUp Window
                    popupWindowOverlayAdd.style.display = "block";
                    document.getElementById("nav").style.width = "0%";

                    const closeAddWords = document.getElementsByClassName("closeAddWords")[0];
                    closeAddWords.addEventListener("click", () => {
                        popupWindowOverlayAdd.style.display = "none";
                    });

                    const addWordBtn = document.getElementsByClassName("addWordBtn")[0];
                    addWordBtn.addEventListener("click", () => {
                        // grab input from user ( new overused word/words )
                        const addedOverusedWords = document.getElementById("overusedWords");
                        // calls function which add new overused words to list
                        wordsContainer.addOverusedWords(addedOverusedWords.value);
                        // reset value of overused words input
                        addedOverusedWords.value = "";

                        // grab input from user ( new unnecessary word/words )
                        const addedUnnecessaryWords = document.getElementById("unnecessaryWords");
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
                    const popupWindowOverlayReplace = document.getElementsByClassName("popup-window-overlay")[1];
                    popupWindowOverlayReplace.style.display = "block";
                    document.getElementById("nav").style.width = "0%";

                    const closeReplaceWords = document.getElementsByClassName("closeReplaceWords")[0];
                    closeReplaceWords.addEventListener("click", () => {
                        popupWindowOverlayReplace.style.display = "none";
                    });

                    const preview = document.getElementById("preview");

                    preview.innerHTML = highlightWords(userInput);

                    const replaceWordsBtn = document.getElementsByClassName("replaceWordsBtn")[0];
                    replaceWordsBtn.addEventListener("click", ()=> {
                        // change words and return ( clean edited user input, highlighted edited user input )
                        const arrayOfTwoResults = changeWords(userInput);
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
                    const popupWindowOverlayShow = document.getElementsByClassName("popup-window-overlay")[2];
                    popupWindowOverlayShow.style.display = "block";
                    document.getElementById("nav").style.width = "0%";

                    const closeShowWords = document.getElementsByClassName("closeShowWords")[0];
                    closeShowWords.addEventListener("click", () => {
                        popupWindowOverlayShow.style.display = "none";
                    });


                    const dropDown = document.getElementsByClassName("dropDown");
                    const wordsList = document.getElementsByClassName("wordsList");

                    dropDown[0].addEventListener("click", ()=> {
                        wordsList[0].style.display = wordsList[0].style.display === "block" ? "none" : "block";
                    });

                    dropDown[1].addEventListener("click", ()=> {
                        wordsList[1].style.display = wordsList[1].style.display === "block" ? "none" : "block";
                    });
                    break;
            }
        }

    });