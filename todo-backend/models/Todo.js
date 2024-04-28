// models/Todo.js
const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Todo = db.define('Todo', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false // Default value for completed field
  }
});

Todo.sync({ force: false })
  .then(() => console.log('Todo table synchronized successfully'))
  .catch(error => console.error('Error synchronizing Todo table:', error));

module.exports = Todo;
