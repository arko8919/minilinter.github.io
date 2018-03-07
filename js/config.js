// config.js

requirejs.config({
    //baseUrl: 'js',
    paths:  {
        //jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min', 'lib/jquery-3.2.1.min'],
        wordsContainer: 'src/wordsContainer',
        compareWords: 'src/compareWords',
        checkInput: 'src/checkInput',
        createElements: 'src/createElements',
        findWords: 'src/findWords',
        addEventListenerOnOverusedWords: 'src/addEventListenerOnOverusedWords',
        menu: 'src/menu',
        updateListOfWords: 'src/updateListOfWords',
        highlightWords: 'src/highlightWords',
        highlightSelectedWords: 'src/highlightSelectedWords',
        changeWords: 'src/changeWords',
        splitInput: 'src/splitInput',
        joinInput: 'src/joinInput'
    }
});