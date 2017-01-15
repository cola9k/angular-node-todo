const express = require("express"),
    router = express.Router();

var memoryDb ={};
global.memoryDb = memoryDb; // global에 memoryDb를 넣는다.

router.get("/:todoId", function (req,res) {
    let todoId = req.params.todoId;
    let todo = memoryDb[todoId];
    if(todo) res.json(todo);
    else res.status(404).send({message:"not found"});
});

router.post("/:todoId", (req, res) => {
    let todoId = req.params.todoId;
    let todo = req.body;
    if (todo.project_id) {
        memoryDb[todoId] = todo;
        res.json(todo);
    }
    else
    res.status(422).send({message: "Wrong body"});
});

router.put("/:todoId", function (req, res) {
    let todo = req.body;
    if(memoryDb[todo.id]){
        memoryDb[todo.id] = todo;
        res.json(todo);
    }
    else res.status(422).send({ message:"Wrong body"});
});

router.delete("/:todoId",function (req, res) {
    let todoId = req.params.todoId;
    if(memoryDb[todoId]){
        memoryDb[todoId] = undefined;
        res.json({ message:"Wrong body"});
    }else{
        res.status(404).send({ message:"No todo found"});
    }
});

module.exports = router;