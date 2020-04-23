var orm = require("../config/orm.js");

var worldster = {
    selectAll: function(cb) { 
        orm.selectAll("worldster", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("worldster", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("worldster", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = worldster;