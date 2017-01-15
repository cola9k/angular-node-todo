(function () {
    function randomInt() {
        return Math.floor(Math.random() * 10000 + 1);
    }
    angular
        .module("todoApp")
        .service("TodoService", TodoService);

    function TodoService($http) {
        this.getTodos = function (projectId) {
            return $http.get("projects/"+projectId+"/todos");
        };
        this.addTodo = function (content) {
          return $http.post("todos/"+randomInt(), {
              content : content,
              done : false,
              project_id : "0"
          });
        };
        this.updateTodo = function (id, todo) {
            return $http.put("todos/"+id, todo);
        };
    }
})();