DROP DATABASE IF EXISTS worldster_db;

CREATE DATABASE worldster_db;
USE worldster_db;

CREATE TABLE worldster_db (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(30) NOT NULL;
    visited BOOLEAN DEFAULT false;
);