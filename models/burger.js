var orm = require("../config/orm.js")

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burger", function (res) {
            cb(res)
        })
    },
    create: function(cols, vals, cb){
        orm.create("burger", cols, vals, function(res){
            cb(res);
        })
    },
    update: function(condition, cb){
        orm.update("burger", "devour", condition, function(res){
            cb(res);
        })
    }
}

module.exports = burger;
