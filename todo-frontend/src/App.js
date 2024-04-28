// App.js
import React from 'react';
import TodoList from './components/TodoList';
import { Box, Typography } from '@mui/material';


const App = () => {
  return (
    <div>
      <Typography variant="h3" gutterBottom sx={{ color: '#1976d2' }}> {/* Typography color */}
          TODO List App
        </Typography>
      <TodoList />
    </div>
  );
};

export default App;
