(function (angular) {
    // Create a test module.
    var testApp = angular.module('tests', ['ng', 'ngAnimate', 'ngRoute'], ['$logProvider', function(logProvider) {
        // Test: Providers can be injected into module config functions in module declaration.
        // logProvider.
    }]);

    testApp.constant('testConstant', { foo: 1, bar: 2 });

    // Create a test provider.
    testApp.provider('testComponent', ['$logProvider', 'testConstant', function (logProvider, constant) {
        // Test: Providers can be injected into other provider functions.
        // logProvider.

        // Test: Constants can be injected into provider functions.
        // constant.

        this.someProviderField = 42;
        this.someProviderFunction = function () {

        };

        this.$get = ['$q', function ($q) {
            // Test: Components can be injected into inline functions.
            // $q.

            return {
                someField: 21,
                someFunction: function () {
                }
            };
        }];
    }]);

    // Create another test provider
    testApp.provider('testAnotherComponent', ['testComponentProvider', function(componentProvider) {
        // Test: Providers can be injected into other providers.
        // componentProvider.
    }]);

    // Create a test factory.
    testApp.factory('testFactory', ['$q', 'testComponent', function ($q, component) {
        // Test: Components can be injected into factory functions.
        // $q.
        // component.
        return {
            someFactoryField: 21,
            someFactoryFunction: function() {
            }
        };
    }]);

    // Create a test service.
    testApp.service('testService', ['$q', 'testFactory', function ($q, factory) {
        // Test: Components can be injected into factory functions.
        // $q.
        // factory.

        this.someServiceField = 42;
        this.someServiceFunction = function() {

        };
    }]);

    // Create a test controller.
    testApp.controller('testController', ['$q', 'testFactory', 'testService', function ($q, factory, service) {
        // Test: Components can be injected into controllers.
        // $q.
        // factory.
        // service.
    }]);

    // Create a test module config function.
    testApp.config(['testConstant', 'testComponentProvider', function (constant, provider) {
        // Test: Constants can be injected into config functions.
        // constant.

        // Test: Providers can be injected into config functions.
        // provider.
    }]);
    
})(angular);