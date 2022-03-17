DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INT NOT NULL, userName TEXT, PRIMARY KEY (id)
);

CREATE TABLE rooms (
  id INT NOT NULL, roomName TEXT, PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL, textmsg TEXT, createdAt TIMESTAMP NOT NULL, user INT, room INT, FOREIGN KEY (user) REFERENCES users(id), FOREIGN KEY (room) REFERENCES rooms(id), PRIMARY KEY(id)
);





/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

