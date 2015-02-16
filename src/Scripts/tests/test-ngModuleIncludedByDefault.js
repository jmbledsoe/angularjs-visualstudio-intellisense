/// <reference path="../angular.js" />
// NOTE: Do NOT include this file in _references.js. It's meant to test IntelliSense in the absence of any
// other Angular code executing.
( function ( angular ) {
    angular.module( "implicitNgModTest", [] )
    .controller( 'MyController', function ( $location ) {
        // TEST: the 'ng' module should be implicitly included by default and core services "just work"
        //$location.
    } );
} )( angular );