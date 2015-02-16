(function (intellisense) {
    if (!angular) {
        return;
    }

    if (window._$AngularJS_VisualStudio_Intellisense) {
        trackModule("ngRoute");
    }

    angular.module('ng').config(['$injector', '$provide', function ($injector, $provide) {
        // Keep track of the the provider injector.
        providerInjector = $injector;

        $provide.decorator('$routeProvider', ['$delegate', function ($delegate) {
            /**
            * @typedef {Object} routeParams
            *   @property {(string|function()=} controller
            *   @property {string=} controllerAs
            *   @property {string=|function()=} template
            *   @property {string=|function()=} templateUrl
            *   @property {Object.<string, function>=} resolve
            *   @property {(string|function())=}  redirectTo
            *   @property {boolean=} [reloadOnSearch=true]
            *   @property {boolean=} [caseInsensitiveMatch=false]
            */
            /**
            * @param {String} path
            * @param {routeParams} route
            */
            function routeWhenDocs(path, route) { }
            /**
            * @param {string|routeParams} params
            */
            function routeOtherwiseDocs(params) { }

            intellisense.annotate($delegate.when, routeWhenDocs);
            intellisense.annotate($delegate.otherwise, routeOtherwiseDocs);
            return $delegate;
        }]);

        // Decorate the $q service to resolve deferred objects at the end of the digest cycle.
        $provide.decorator('$q', ['$rootScope', '$delegate', function ($rootScope, $delegate) {
            var originalDefer = $delegate.defer;

            $delegate.defer = function () {
                // Create a deferred object.
                var deferred = originalDefer.apply($delegate, arguments);
                var promise = deferred.promise;

                // Override the promise methods to call handlers after the digest cycle.
                // This allows them to be called with parameters by user code, but if they
                // are never called on the first digest cycle they will still get Intellisense
                // on closure variables.
                function callArgsAfterDigest(originalFunc) {
                    return function () {
                        forEach(arguments, function (argument) {
                            if (angular.isFunction(argument)) {
                                $rootScope.$$postDigest(argument);
                            }
                        });

                        return originalFunc.apply(promise, arguments);
                    };
                }

                var originalThen = promise.then,
                    originalCatch = promise['catch'],
                    originalFinally = promise['finally'];

                promise.then = callArgsAfterDigest(originalThen);
                promise['catch'] = callArgsAfterDigest(originalCatch);
                promise['finally'] = callArgsAfterDigest(originalFinally);

                return deferred;
            };

            return $delegate;
        }]);

        // Decorate the $httpBackend service to execute the callback rather than using 
        // XHR, so that functions handling the response are called during Intellisense.
        $provide.decorator('$httpBackend', [function () {
            return function (method, url, post, callback) {
                callback(200, undefined, '', 'OK');
            };
        }]);

        // Decorate the $rootScope to always call event listeners registered 
        // with $on, so that listener functions are called during Intellisense.
        $provide.decorator('$rootScope', ['$delegate', function ($delegate) {
            var original$On = $delegate.$on;

            $delegate.$on = function (name) {
                $delegate.$$postDigest(function () {
                    $delegate.$emit(name);
                });

                return original$On.apply($delegate, arguments);
            };

            return $delegate;
        }]);
    }]);
})(window.intellisense);