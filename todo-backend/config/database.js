// config/database.js
const { Sequelize } = require('sequelize');

// Initialize Sequelize with connection parameters
const sequelize = new Sequelize('mysql://root:password@localhost:3306/todo_db', {
  dialect: 'mysql'
});

// Create the database if it doesn't exist
sequelize.query('CREATE DATABASE IF NOT EXISTS todo_db')
  .then(() => console.log('Database created or successfully connected'))
  .catch(error => console.error('Error creating database:', error));

module.exports = sequelize;
