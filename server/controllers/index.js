var models = require('../models');
var parser = require('body-parser');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    }
  }
};

