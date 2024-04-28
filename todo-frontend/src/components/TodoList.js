// TodoList.js
import React, { useState, useEffect } from 'react';
import axios from '../configs/axios';
import { List, Typography, Box } from '@mui/material';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('api/todos');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(prevTodos =>
      prevTodos.filter(todo => todo.id !== id)
    );
  };  

  return (
    <>
    <TodoForm fetchTodos={fetchTodos}/>
    <Box sx={{ p: 2, backgroundColor: '#f5f5f5', borderRadius: 8 , marginTop: 5}}> {}
      <Typography variant="h6" gutterBottom sx={{ color: '#1976d2' }}>Todo List</Typography> {/* Typography color */}
      <List>
        
        {todos.length == 0 ? <Typography>Your todo list is empty. Let add new one!</Typography> : todos.map(todo => (
          <Box key={todo.id} sx={{ backgroundColor: '#bdbdbd', borderRadius: 4, marginBottom: 2, padding: 1 }}> {/* Changed background color, added borderRadius, margin and padding */}
            <TodoItem todo={todo} onToggle={handleToggleTodo} onDelete={handleDeleteTodo} />
          </Box>
        ))}
      </List>
    </Box>
    </>
  );
};

export default TodoList;
