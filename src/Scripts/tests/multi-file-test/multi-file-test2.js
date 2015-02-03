/// <reference path="multi-file-test1.js"/>
(function () {
    'use strict';

    angular.module('multi-file')

    .controller('myController', function (service1) {
        // TEST: a completion list shows up below
        //service1.
    });
})();