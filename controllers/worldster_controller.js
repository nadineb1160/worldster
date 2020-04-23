var express = require("express");

var router = express.Router();

var worldster = require("../models/worldster.js");

router.get("/", function(req, res) {
    worldster.selectAll(function(data) {
        var hbsObject = {
            worldster: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/worldster", function(req, res) {
    worldster.insertOne([
        "country_name", "visited"
    ], [
        req.body.country_name, req.body.visited
    ], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/worldster", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    worldster.updateOne({
        visited: req.body.visited
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
