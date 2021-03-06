var models = require('../models');
var parser = require('body-parser');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('users', {
  username: Sequelize.TEXT
});

var Message = db.define('messages', {
  usernameid: Sequelize.INTEGER,
  roomname: Sequelize.TEXT,
  message: Sequelize.TEXT
});

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
    },
    post: function (req, res) {
      models.messages.post(req.body, (error, results) => {
        if (error) {
          res.send(error);
        } else {
          res.send(results);
        }
      });
    }
  },

  users: {
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

