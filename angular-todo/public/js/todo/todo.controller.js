(function () {
    angular.module("todoApp")
        .controller("TodoCtrl", TodoCtrl);
    function TodoCtrl($scope, $location, TodoService) {
        $scope.title = $location.path().substring(1);

        TodoService.getTodos("*").then(function (data) {
            $scope.todos = data.data.data;
        });

        $scope.addTodo = function (content) {
            TodoService.addTodo(content)
                .then(function () {
                    $scope.newContent = "";
                    TodoService.getTodos("*").then(function (data) {
                        $scope.todos = data.data.data;
                    });
                });
        };











        $scope.toggleDone = function (todo) {
            TodoService.updateTodo(todo.id, todo);
        }
    }
})();