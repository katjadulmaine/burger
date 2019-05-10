
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
// var app = express();

// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerList = {
      burgers: data
      
    };console.log("burgerList = " + burgerList);
    res.render("index", burgerList);
  });
});

//PROBLEM AREA THANKS MAX
router.post("/", function (req, res) {
  burger.insertOne(['burger_name'], [req.body.burger_name], function (data) {
   console.log("insert = " + { id: result.insertId })
    res.json({ id: result.insertId });
  });
});

router.put("/:id", function (req, res) {
  var id = "id = " + req.params.id;
  console.log("id = " + id)

  burger.updateOne({devoured: true} ,id, function (data) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var id = "id = " + req.params.id;
  console.log("id = " + id)
  burger.delete(id, function (data) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;
