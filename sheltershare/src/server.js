const express = require('express');
const { Sequelize } = require('sequelize');
const PORT = process.env.PORT || 5000;
const app = express();
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

app.use(express.json());