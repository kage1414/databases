var models = require('../models');
var _ = require('lodash');
var parser = require('body-parser');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

var User = db.define('users', {
  username: Sequelize.TEXT
}, {
  timestamps: false
});

var Message = db.define('messages', {
  username: Sequelize.INTEGER,
  roomname: Sequelize.TEXT,
  message: Sequelize.TEXT
}, {
  timestamps: false
});

module.exports = {
  messages: {
    get: (req, res) => {
      Message.sync()
        .then(function() {
          return Message.findAll({
            attributes: ['username', 'message', 'roomname']
          });
        })
        .then((values) => {

          var results = values.map((idx) => {
            return idx.dataValues;
          });
          res.send(results);
        })
        // .then(() => {
        //   db.close();
        // })
        .catch( (err) => {
          console.error(err);
          // db.close();
        });
    },
    post: (req, res) => {
      Message.sync()
        .then(() => {
          return User.findAll({
            where: {
              username: req.body.username
            }
          });
        })
        .then((results) => {
          if (results.length === 0) {
            return User.create({username: req.body.username})
              .then(() => {
                return User.findAll({
                  where: {
                    username: req.body.username
                  }
                });
              });
          } else {
            return results;
          }
        })
        .then((user) => {

          let [usernameVal, messageVal, roomnameVal] = [user[0].id, req.body.message, req.body.roomname];
          let vals = {
            username: usernameVal,
            message: messageVal,
            roomname: roomnameVal
          };
          return Message.create(vals);
        })
        .then(() => {
          res.send('');
        })
        .catch(function(err) {
          console.error(err);
          // db.close();
        });
    }
  },

  users: {
    get: (req, res) => {
      User.sync()
        .then(function() {
          return User.findAll({
            attributes: ['username']
          });
        })
        .then((values) => {
          var results = values.map((idx) => {
            return idx.dataValues;
          });
          res.send(results);
        })
        .catch(function(err) {
          console.error(err);
          // db.close();
        });
    },
    post: (req, res) => {
      User.sync()
        .then(() => {
          return User.findAll({
            where: {
              username: req.body.username
            }
          });
        })
        .then((result) => {

          if (result.length > 0) {
            return 'User exists in database\n';
          } else {
            User.create(req.body);
            return 'User added\n';
          }
        })
        .then((string) => {
          res.send(string);
        })
        .catch(function(err) {
          console.error(err);
          // db.close();
        });
    },
  }
};