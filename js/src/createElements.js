define(function () {
        return function(selectedWords, parentElement) {
            // when called remove old elements
            while (parentElement.firstChild) {
                parentElement.removeChild(parentElement.firstChild);
            }

            for (let selectedWordsIndex = 0; selectedWordsIndex < selectedWords.length; selectedWordsIndex++) {
                // create <span> element
                const newSpanElement = document.createElement("span");
                // add value to <span> element
                const newSpanTextNode = document.createTextNode(selectedWords[selectedWordsIndex].name);
                // append as child value to <span> element
                newSpanElement.appendChild(newSpanTextNode);
                // append as child <span> element to parent element with class identifier 'sideForm'
                parentElement.appendChild(newSpanElement);

                // create <input> element
                const newInputElement = document.createElement("input");
                // append as child <input> element to parent element with class identifier 'sideForm'
                parentElement.appendChild(newInputElement);

                // create "type" attribute
                const newTypeAttribute = document.createAttribute("type");
                // add value to "type" attribute
                newTypeAttribute.value = "text";
                // add "type" attribute to new <input> element
                newInputElement.setAttributeNode(newTypeAttribute);
            }
        }

});