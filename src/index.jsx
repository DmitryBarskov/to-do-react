import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './TodoList';

// TODO: load todo items from storage
const todoItems = [
  { text: 'Write tests' },
  { text: 'Ride the bike' },
  { text: 'Buy some milk', completed: true }
];

ReactDOM.render(
  <React.StrictMode>
    <TodoList todoItems={todoItems} />
  </React.StrictMode>,
  document.getElementById('root')
);
