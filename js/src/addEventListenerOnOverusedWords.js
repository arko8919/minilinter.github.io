define(['highlightSelectedWords'],
    function (highlightSelectedWords) {
        return function (userInput,overusedWords, unnecessaryWords) {

            // select class identifiers, created before in createElements.js
            const leftSideForm = document.getElementsByClassName('sideForm')[0];
            const leftSide = leftSideForm.getElementsByTagName('input');
            const rightSideForm = document.getElementsByClassName('sideForm')[1];
            const rightSide = rightSideForm.getElementsByTagName('input');

            for (let leftSideIndex = 0; leftSideIndex < leftSide.length; leftSideIndex++) {
                // creating events for overused words
                leftSide[leftSideIndex].addEventListener("click", getLeftInputId, false);
                function getLeftInputId() {
                    highlightSelectedWords(overusedWords[leftSideIndex],
                        userInput);
                }
            }
            
            for (let rightSideIndex = 0; rightSideIndex < rightSide.length; rightSideIndex++) {
                // creating events for unnecessary words
                rightSide[rightSideIndex].addEventListener("click", getRightInputId, false);
                function getRightInputId() {
                     highlightSelectedWords(unnecessaryWords[rightSideIndex],
                        userInput);
                }
            }
        }
    });
