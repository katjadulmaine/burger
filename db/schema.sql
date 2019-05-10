DROP TABLE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INTEGER auto_increment not null,
    burger_name VARCHAR(65),
    devoured BOOLEAN DEFAULT false,
    primary key(id)
    );
    