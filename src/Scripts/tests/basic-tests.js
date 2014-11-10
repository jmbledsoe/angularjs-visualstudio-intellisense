_$AngularJS_VisualStudio_Intellisense.setLogLevelVerbose();
(function (angular) {
    // Create a test module.
    var testApp = angular.module('tests', ['ng', 'ngAnimate', 'ngRoute'], ['$logProvider', function (logProvider) {
        // Test: Providers can be injected into module config functions in module declaration.
        //logProvider.
    }]).config(['$locationProvider', function ($locationProvider) {
        $locationProvider.html5Mode = true;
    }]).factory('chainedFactory', function ($location) {
        // Test: Components can be injected into chained provider functions.
        // Test: Components can be injected by function parameter name.
        //$location.
    });

    testApp.constant('testConstant', { foo: 1, bar: 2 });

    // Create a test provider.
    testApp.provider('testComponent', ['$logProvider', 'testConstant', function (logProvider, testConstant) {
        // Test: Constants can be injected into other provider functions
        //testConstant.
        // Test: Providers can be injected into other provider functions.
        //logProvider.

        this.someProviderField = 42;
        this.someProviderFunction = function () {
            // Test: Providers injected into provider functions can be referenced in closures.
            //logProvider.
        };

        this.$get = ['$q', function ($q) {
            // Test: Components can be injected into provider $get functions.
            //$q.

            return {
                someField: 21,
                someFunction: function ($scope) {
                    // Test: Components injected into provider $get functions can be referenced in closures.
                    //$q.
                    //$scope.
                }
            };
        }];
    }]);

    // Create another test provider
    testApp.provider('testAnotherComponent', ['testComponentProvider', function (componentProvider) {
        // Test: Providers can be injected into other providers.
        //componentProvider.
    }]);

    // Create a test factory.
    testApp.factory('testFactory', ['$q', 'testComponent', function ($q, component) {
        // Test: Components can be injected into factory functions.
        //$q.
        //component.
        return {
            someFactoryField: 21,
            someFactoryFunction: function () {
                // Test: Components injected into factory functions can be referenced in closures.
                //$q.
                //component.

                var foo = function (param) {
                    // Test: Components injected into factory functions can be referenced in multiple levels of closures.
                    //$q.
                    //component.
                    //param.
                }

                return function () {
                    foo(component);

                    // Test: Components injected into factory functions can be referenced in multiple levels of closures.
                    //$q.
                    //component.


                };
            }
        };
    }]);

    // Create a test service.
    testApp.service('testService', ['$q', 'testFactory', function ($q, factory) {
        // Test: Components can be injected into factory functions.
        //$q.
        //factory.
        return {foo: true};
    }]);

    testApp.controller('testController', function ($scope){
        // Test: $scope can be injected into controller functions.
        // $scope.
    });

    // Create a test config block.
    testApp.config(['testComponentProvider', function (componentProvider) {
        // Test: Providers can be injected into config blocks.
        //componentProvider.
    }]);

    // Create a test run block.
    testApp.run(['testFactory', function (component) {
        // Test: Components can be injected into run blocks.
        //component.
    }]);

    // Create a test animate block.
    testApp.animation('testAnimation', function (testFactory) {
        // Test: Components can be injected into animation factory functions.
        //testFactory.

        return {
            enter: function (element, callback) {
                // Test: Components can be injected into animation functions.
                // testFactory
            }
        };
    });
} )( angular );

(function ( angular ) {
    // Tests modules not bound to variables/global
    angular.module( "isolatedTestApp", ['ngRoute', 'tests'] )

    angular.module( 'isolatedTestApp' ).config( ['$routeProvider', function (routeProvider) {
        // Test: Providers can be injected into config blocks, in modules that are not
        // bound to a variable or globally exposed
        //routeProvider.
    }] );
} )( angular );