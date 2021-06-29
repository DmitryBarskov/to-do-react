import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

import './index.css';

// TODO: load todo items from storage
const todoItems = [
  { text: 'Write tests' },
  { text: 'Ride the bike' },
  { text: 'Buy some milk', completed: true }
];

function TodoApp() {
  return (
    <div>
      <TodoList todoItems={todoItems} />
      <TodoInput />
    </div>
  );
}

export default TodoApp;
