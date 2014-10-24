(function () {
    'use strict';

    var commonModule = angular.module('common');

    commonModule.factory('logger', function (common) { return { log: true } });
})();