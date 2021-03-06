var db = require('../db');


module.exports = {
  messages: {
    get: function () {
      console.log('db');
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      db.database.connect();
      db.database.query();
    }
  }
};

