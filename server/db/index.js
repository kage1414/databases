var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports.database = mysql.createConnection({
  user: 'root',
  database: 'chat',
  password: ''
});

module.exports.database.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + module.exports.database.threadId);
});




