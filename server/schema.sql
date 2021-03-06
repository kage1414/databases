DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username TEXT NOT NULL,
  PRIMARY KEY (id)
  -- UNIQUE INDEX (username)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  usernameid INT NOT NULL,
  roomname TEXT NOT NULL,
  message TEXT,
  PRIMARY KEY (id),
  FOREIGN KEY (username) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

