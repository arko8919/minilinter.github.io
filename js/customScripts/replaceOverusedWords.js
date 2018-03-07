"use strict";

define(function () {
                return {
                                add: function add(overused) {
                                                // function get array of overused words with word name and index
                                                var myParentNode = document.getElementsByClassName("sideForm")[0];
                                                while (myParentNode.firstChild) {
                                                                myParentNode.removeChild(myParentNode.firstChild);
                                                }

                                                for (var overusedIndex = 0; overusedIndex < overused.length; overusedIndex++) {

                                                                var newLabelElement = document.createElement("label"); // create span element
                                                                var newInputElement = document.createElement("input"); // create input element
                                                                var newLabelTextNode = document.createTextNode(overused[overusedIndex].word); // add value to text

                                                                var newTypeAttribute = document.createAttribute("type"); //create type attribute
                                                                newTypeAttribute.value = "text";
                                                                var newForAttribute = document.createAttribute("for"); // create for attribute
                                                                newForAttribute.value = "" + overused[overusedIndex].index;
                                                                var newIdAttribute = document.createAttribute("id"); // create id attribute
                                                                newIdAttribute.value = "" + overused[overusedIndex].index;
                                                                var newClassAttribute = document.createAttribute("class");
                                                                newClassAttribute.value = "selectWord";

                                                                newInputElement.setAttributeNode(newTypeAttribute); // add type attribute to new input element
                                                                newInputElement.setAttributeNode(newIdAttribute); // add id attribute to new input element
                                                                newInputElement.setAttributeNode(newClassAttribute); // add class attribute to new input element


                                                                newLabelElement.setAttributeNode(newForAttribute); // add for attribute to new label element
                                                                newLabelElement.appendChild(newLabelTextNode); // add text node to span element

                                                                var parent = document.getElementsByClassName("sideForm")[0];
                                                                parent.appendChild(newLabelElement);
                                                                parent.appendChild(newInputElement);
                                                }
                                }
                };
});