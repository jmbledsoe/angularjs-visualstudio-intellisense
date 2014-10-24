(function () {
    'use strict';

    var commonModule = angular.module('common', []);

    commonModule.factory('common', function ($injector, logger) {
        //logger. // No IntelliSense, right here
        return { foo: true }
    });
})();