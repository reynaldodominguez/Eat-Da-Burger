var connection = require("./connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput;

        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res)
        })

    },
    create: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table + "(" + cols.toString() + ") VALUES (?) ";
        console.log(queryString);

        connection.query(queryString, vals, function (err, res) {
            if (err) {
                throw err;
            }

            cb(res);
        })
    },
    update: function (table, colToUpdate, condition, cb) {
        var queryString = "UPDATE " + table + " SET " + colToUpdate + " = 1" + " WHERE " + condition;
        console.log(queryString);
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        })
    }

}

module.exports = orm;