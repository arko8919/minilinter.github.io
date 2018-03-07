define(function() {
    return function(userInput) {
        const userInputWords = [];
        let tempArray = "";

        for(let characterIndex = 0; characterIndex < userInput.length; characterIndex++) {
            if(tempArray !== "" && userInput[characterIndex] === " ") {
                userInputWords.push(tempArray);
                tempArray = "";
            }

            else if(userInput[characterIndex] === ",") {
                if(tempArray !== "") {
                    userInputWords.push(tempArray);
                    tempArray = "";
                    userInputWords.push(userInput[characterIndex]);
                }
                else
                    userInputWords.push(userInput[characterIndex]);

            }
            else if(userInput[characterIndex] === "!") {
                if(tempArray !== "") {
                    userInputWords.push(tempArray);
                    tempArray = "";
                    userInputWords.push(userInput[characterIndex]);
                }
                else
                    userInputWords.push(userInput[characterIndex]);
            }
            else if(userInput[characterIndex] === ".") {
                if(tempArray !== "") {
                    userInputWords.push(tempArray);
                    tempArray = "";
                    userInputWords.push(userInput[characterIndex]);
                }
                else
                    userInputWords.push(userInput[characterIndex]);
            }

            else if(userInput[characterIndex] !== " ") {
                tempArray += userInput[characterIndex];
            }
        }
        return userInputWords;
    }

});