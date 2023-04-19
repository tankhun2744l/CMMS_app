const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '68.178.227.196',
    user: 'efinFP',
    password: 'efinFP',
    database: 'device_asset'
});

connection.connect((err) => {
    if (!!err) {
        console.log(err);
    } else {
        console.log('Connected...');
    }
  
  });

  module.exports = connection
  
