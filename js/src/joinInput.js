define(function() {
   return function(input) {
       let newInput = ""; // result of combining words
       let combine = "";

       for(let wordIndex = 0; wordIndex < input.length; wordIndex++) {
           if(input[wordIndex+1] === "," || input[wordIndex+1] === "." || input[wordIndex+1] === "!") {
               combine = input[wordIndex];
           }
           else if(input[wordIndex] === "," || input[wordIndex] === "." || input[wordIndex] === "!") {
               combine += input[wordIndex];
               newInput += combine + " ";
               combine = "";
           }
           else
               newInput += input[wordIndex] + " ";
       }
       return newInput;
   }
});