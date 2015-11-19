var mysql = require('mysql');
var config = require('../../config/config');
var connection = mysql.createConnection({
    host:config.mySqlOption.host,
    user:config.mySqlOption.user,
    password:config.mySqlOption.password,
    database:config.mySqlOption.database,
    port:config.mySqlOption.prot
});

exports.getUserByName = function (name, callBack){
    connection.query('select * from user where userName = ?',name, function(err, rows, fields){
       callBack(rows);
    });
}


exports.userDao = 'userDao';