import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, onCompletedChange }) {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onCompletedChange={(completed) => onCompletedChange(todoItem, completed)}
        />
      ))}
    </div>
  );
}

export default TodoList;
