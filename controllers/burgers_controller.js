var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log('controller: '+req.body.name);
    
    burger.create(
        "burger_name", 
        req.body.name, function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log(condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.affectedRows === 0) {
            return res.status(404).end();
        } else {
            return res.status(200).end();
        }
    })
})



module.exports = router;
