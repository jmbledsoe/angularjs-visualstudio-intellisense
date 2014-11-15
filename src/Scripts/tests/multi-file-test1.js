(function () {
    'use strict';

    angular.module('multi-file', ['ng'])

    .service('service1', function ($http) {
        // TEST: a completion list shows up below
        // $http.
        return { member1: 'test' };
    });
})();