var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'test',
	port:3306
});

var name = 'kyle';
conn.connect();
var values = ['kyle'];
conn.query('select * from user where userName = ?',values, function(err,rows,fields){
	    if (err) throw err;
    console.log('The solution is: ', rows[0].password);
});
conn.end();