const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '192.168.241.72',
    user: 'efinFP',
    password: 'efinFP',
    database: 'CMMS'
});

connection.connect((err) => {
    if (!!err) {
        console.log(err);
    } else {
        console.log('Connected...');
    }
  
  });

  module.exports = connection
  
