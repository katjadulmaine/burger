
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");
var app = express();
 
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
        var burgerList = {
      burgers: data
    };
    console.log(burgerList);
    res.render("index", burgerList);
  }); 
});

 //PROBLEM AREA THANKS MAX
router.post("/", function(req, res) {
  
  burger.insertOne(colName, colValue, function (data) {
    res.json({ id: result.insertId });
  });
});
   

router.put("/:id", function(req, res) {
  var id = req.params.id;
  console.log("id", id);

   burger.updateOne(id, function (data) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(data) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  })
});

module.exports = router;
