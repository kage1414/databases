var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('inside models.messages.get');
      db.database.query('SELECT * from messages', (error, results) => {
        if (error) {
          console.log('Error: ', error);
        }
        console.log(results[0].roomname);

        return results;
      });
    },
    post: function (body, callback) {
      console.log('inside models.messages.post');
      let queryArg = [body.username, body.roomname, body.message];
      db.database.query('INSERT INTO messages (username, roomname, message) VALUES ((SELECT id FROM users WHERE username = ?), ?, ?)', queryArg, (error, results) => {
        if (error) {
          callback(error);
          console.log('Error: ', error);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('inside models.users.get');
    },
    post: function () {
      console.log('inside models.users.post');
      // db.database.connect();
      // db.database.query();
    }
  }
};

