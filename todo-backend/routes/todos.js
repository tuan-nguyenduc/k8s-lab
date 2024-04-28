// routes/todos.js
const express = require('express');
const Todo = require('../models/Todo');
const router = express.Router();

// Create a new Todo
router.post('/', async (req, res) => {
  try {
    const { text } = req.body;
    const todo = await Todo.create({ text });
    res.status(201).json(todo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Error creating todo' });
  }
});

// Get all Todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Error fetching todos' });
  }
});

// Update a Todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    if (text != null) {
      todo.text = text;
    }
    if (completed != null) {
      todo.completed = completed;
    }
    
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Error updating todo' });
  }
});

// Delete a Todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByPk(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    await todo.destroy();
    res.json({ message: 'Todo deleted successfully' });
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Error deleting todo' });
  }
});

module.exports = router;
