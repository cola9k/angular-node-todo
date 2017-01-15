(function () {
    function Config($routeProvider) {
        $routeProvider
            .when('/inbox', {
                templateUrl : 'js/todo/todo.html',
                controller : 'TodoCtrl'
            })
            .when('/today', {
                templateUrl : 'js/todo/todo.html',
                controller : 'TodoCtrl'
            })
            .otherwise({
                redirectTo : "/inbox"
            });
    }

    angular
        .module("todoApp") // define한 todoAPP을 get함
        .config(Config);
})();