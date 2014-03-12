(function (angular) {
    // Create a test module.
    var testApp = angular.module('tests', ['ng', 'ngAnimate', 'ngRoute'], ['$logProvider', function(logProvider) {
        // Test: Providers can be injected into module config functions in module declaration.
        // logProvider.
    }]);

    // Create a test provider.
    testApp.provider('testComponent', ['$logProvider', function (logProvider) {
        // Test: Providers can be injected into other provider functions.
        // logProvider.

        this.someProviderField = 42;
        this.someProviderFunction = function () {

        };

        this.$get = ['$q', function ($q) {
            // Test: Components can be injected into inline functions. (FAIL)
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
    }]);
    
})(angular);