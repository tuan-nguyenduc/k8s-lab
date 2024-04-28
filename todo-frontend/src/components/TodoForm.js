// TodoForm.js
import React, { useState } from 'react';
import axios from '../configs/axios';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';


const TodoForm = ({fetchTodos}) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = async () => {
    try {
      await axios.post('/api/todos', { text: newTodo });
      setNewTodo('');
      fetchTodos();
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#1976d2', marginBottom: 2 }}>Add New Todo</Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            label="New Todo"
            variant="outlined"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            sx={{ height: '100%' }} // Set height to 100%
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            sx={{ height: '100%' }} // Set height to 100%
          >
            Add Todo
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoForm;
