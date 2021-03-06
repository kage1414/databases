var models = require('../models');
var parser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      // access database, models/index.js?
      let messages = models.messages.get();

      // send messages back to client
      res.send(messages);
    }, // a function which handles a get request for all messages
    post: function (req, res) {

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {

      console.log(req.body);

      // req.on('end', () => {
      //   console.log
      // })
    }
  }
};

