DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT PRIMARY KEY,
  username TEXT
);

CREATE TABLE messages (
  id INT PRIMARY KEY,
  username INT,
  roomname TEXT,
  message TEXT,
  -- time_stamp TIMESTAMP
  FOREIGN KEY (username) REFERENCES users(id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

