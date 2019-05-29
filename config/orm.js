
var connection = require("./connection.js");

var orm = {

  selectAll: function (table, cb) {
    var queryString = "SELECT * FROM ??;" //SELECT * FROM burgers
    connection.query(queryString, table, function (err, res) {
      if (err) throw err;
      console.log(res);
      cb(res);
    });
  },
// do I need the condition of the button pushing SHOULD BE CONDITION not value
  //table in mysql, the inputed new name, and devour it value  false
  insertOne: function (table, colName, colValue, cb) {
    // var queryString = "INSERT INTO ?? (??) VALUES (?)" //INSERT INTO burgers (burger name) VALUES (false/default until button pushed)
     var queryString = "INSERT INTO " + table + " ("+colName.toString()+") VALUES (?)" //INSERT INTO burgers (burger name) VALUES (false/default until button pushed)

    connection.query(queryString, colValue, function (err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
      cb(res);
      
    });
  },
      // table, colvalue? boolean and id to update devour is true
  updateOne: function (table, colValue, id, cb) {
    console.log(1)

      var queryString = "UPDATE "+table;  //UPDATE burgers SET devoured = true WHERE id = ?
      queryString += " SET  " + colValue
      queryString += " WHERE id = "+id
      console.log(queryString)
      connection.query(queryString, function (err, res) {
        if (err) {
          throw err;
        }
        console.log("got here")
        cb(res);    
    });
  },
  // delete burger from table when button is pushed (CONDITION)
  deleteOne: function (table, id, cb) {
    var queryString = "DELETE FROM " + table; //DELETE FROM burgers WHERE id =?
    queryString += " WHERE  ?? = ?"
    connection.query(queryString, [id,], function (err, res) {
      if (err) {
        throw err;
      }
      console.log(res);
      cb(res);
    });
  }
};

module.exports = orm;