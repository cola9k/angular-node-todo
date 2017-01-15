/**
 * Created by KTH_LAP on 2017-01-15.
 */
const express = require("express");
const router = express.Router();
const _ = require("underscore");

var project = [
    {id: 0, name: "study"},
    {id: 1, name: "health"},
    {id: 2, name: "travel"}
];

router.get("/", function (req, res) {
    res.json({
        data: project
    });
});

router.get("/:projectId", function (req, res) {
    let projectId = parseInt(req.params.projectId);
    let pro = project.filter(data => data.id === projectId);
    if (pro.length === 0) res.status(404).json({message: "not found"});
    else res.json(pro[0]);
});

router.get("/:projectId/todos", function (req, res) {
    var todos = global.memoryDb;
    var todoArr = _.map(todos, (ob, key) => {
        ob.id = key;
        return ob;
    });

    if(req.params.projectId === "*"){
        res.json({data: todoArr});
    }else{
        let projectId = parseInt(req.params.projectId);
        let projectTodos = todoArr.filter((v) => v["project_id"] === projectId);
        res.json({data: projectTodos});
    }

});

module.exports = router;