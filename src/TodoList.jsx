import React from 'react';

import TodoItem from './TodoItem';

function TodoList({ todoItems, onCompletedChange, onDelete }) {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem
          key={todoItem.id}
          todoItem={todoItem}
          onCompletedChange={(completed) => onCompletedChange(todoItem, completed)}
          onDelete={() => onDelete(todoItem)}
        />
      ))}
    </div>
  );
}

export default TodoList;
