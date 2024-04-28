const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// Initialize Sequelize with connection parameters
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql'
});

// Create the database if it doesn't exist (optional)
sequelize.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`)
  .then(() => console.log('Database created or successfully connected'))
  .catch(error => console.error('Error creating database:', error));

module.exports = sequelize;
