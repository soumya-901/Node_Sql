const mysql = require('mysql');

// my sql connection

const dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Soumya9938@",
    database: "soum_db"
});

dbConn.connect(function (error) {
    if (error) throw error;
    console.log('database connected succesfully');
});
module.exports = dbConn;