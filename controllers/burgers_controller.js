
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var burgerList = {
      burgers: data
      
    };console.log("burgerList = " + burgerList);
    res.render("index", burgerList);
  });
});


router.post("/api/burger", function (req, res) { //usually we would do a post route to something like /api/burgers
  burger.insertOne(['burger_name'], [req.body.burger_name], function (data) {
   console.log("insert = " + { id: data.insertId }) //data not results
    res.json({ id: data.insertId }); // data not result is what you are passing

  }); 
});

router.put("/api/burger/:id", function (req, res) {
  var condition =  req.params.id; //setup what condition to change
  var changes = "devoured=true"
  var table = "burgers"
  console.log(1)
  burger.updateOne(table,changes ,condition, function (data) { 
    if (data.changedRows === 0) { //data not results
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function (req, res) {
  var id = req.params.id;
  var table = "burgers"
  var condition
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
