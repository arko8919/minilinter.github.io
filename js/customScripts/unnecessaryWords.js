'use strict';

define(function () {
    return {
        _unnecessaryWords: ['extremely', 'literally', 'actually'],

        get unnecessaryWords() {
            return this._unnecessaryWords;
        }

    };
});