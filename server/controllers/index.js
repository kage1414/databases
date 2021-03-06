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
    get: (req, res) => {
      User.sync()
        .then(() => {
          return User.findAll({ where: req.body });
        })
        .catch();
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

// User.sync()
//   .then(function() {
//     // Now instantiate an object and save it:
//     return User.create({username: 'Jean Valjean'});
//   })
//   .then(function() {
//     // Retrieve objects from the database:
//     return User.findAll({ where: {username: 'Jean Valjean'} });
//   })
//   .then(function(users) {
//     users.forEach(function(user) {
//       console.log(user.username + ' exists');
//     });
//     db.close();
//   })
//   .catch(function(err) {
//     // Handle any error in the chain
//     console.error(err);
//     db.close();
//   });