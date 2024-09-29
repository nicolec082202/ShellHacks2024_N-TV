const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

app.use(express.json());