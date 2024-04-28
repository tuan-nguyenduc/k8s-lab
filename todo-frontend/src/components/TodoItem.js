// TodoItem.js
import React from 'react';
import axios from '../configs/axios';
import { ListItem, Checkbox, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = async () => {
    try {
      await axios.put(`api/todos/${todo.id}`, { completed: !todo.completed });
      onToggle(todo.id);
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`api/todos/${todo.id}`);
      onDelete(todo.id);
    } catch (error) {
      console.error('Error delete todo:', error);
    }
  };

  return (
    
    <ListItem sx={todo.completed ? { textDecoration: 'line-through' } : {}}>
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        color="primary"
        inputProps={{ 'aria-label': 'toggle todo' }}
      />
      <ListItemText primary={todo.text} />
      <IconButton aria-label="delete" onClick={handleDelete} sx={{ color: 'red' }}> {/* Set color to red */}
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
};

export default TodoItem;
