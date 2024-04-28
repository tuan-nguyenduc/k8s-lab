// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const todoRoutes = require('./routes/todos');
var cors = require('cors')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/todos', todoRoutes);

// Connect to database
db.authenticate()
  .then(() => console.log('Database connected'))
  .catch(error => console.error('Database connection failed:', error));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
