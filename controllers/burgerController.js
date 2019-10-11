var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

var data = "";


console.log("Datos " + data);



router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject)
    });

  
});


module.exports = router;