var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.database.query('SELECT * from messages', (error, results) => {
        if (error) {
          callback(error);
          console.log('Error: ', error);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (body, callback) {
      let queryArg = [body.username, body.roomname, body.message];
      db.database.query('INSERT INTO messages (username, roomname, message) VALUES ((SELECT id FROM users WHERE username = ?), ?, ?)', queryArg, (error, results) => {
        if (error) {
          callback(error);
          console.log('Error: ', error);
        } else {
          callback(null, results);
        }
      });
    }
  },

  users: {
    get: function (callback) {
      db.database.query('SELECT * from users', (error, results) => {
        if (error) {
          callback(error);
          console.log('Error: ', error);
        } else {
          callback(null, results);
        }
      });
    },
    post: function (body, callback) {
      let queryArg = [body.username];
      db.database.query('INSERT INTO users (username) VALUES (?)', queryArg, (error, results) => {
        if (error) {
          callback(error);
          console.log('Error: ', error);
        } else {
          callback(null, results);
        }
      });
    }
  }
};

