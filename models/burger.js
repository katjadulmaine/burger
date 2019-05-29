
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
            // put list of all burger
        });
    }, 
    insertOne: function (colName, colValue, cb) {
        orm.insertOne("burgers", colName, colValue, function (res) {
            cb(res);
            // insert new burger
        });
    },
    updateOne: function (table,colvalue, id, cb) {
        orm.updateOne("burgers", colvalue, id, function (res) {
            cb(res);
            // to move to DEVOUR IT column  
        });
    },
    deleteOne: function (table,id, condition, cb) {
        orm.deleteOne("burgers", id, condition, function (res) {
            cb(res);
            // to remove a burger from list
        });
    }
};   
    module.exports = burger;
