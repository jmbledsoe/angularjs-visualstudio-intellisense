angular.module('module1', [])
.service("MyService", function () {
    return {
        fnFromMyService1: function () { }
    }
});

angular.module('module2', [])
.service("MyService", function () {
    return {
        fnFromMyService2: function () { }
    }
});

angular.module("app", ['module1'])
.run(['MyService', function (service) {
    // ERROR: IntelliSense for service. should show fnFromMyService1, but it shows fnFromMyService2
    //service.
}]);