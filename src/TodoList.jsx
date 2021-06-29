import React from 'react';

import TodoItem from './TodoItem';

function TodoList(props) {
  return (
    <div>
      {props.todoItems.map((todoItem, i) => (
        <TodoItem key={i} todoItem={todoItem} />
      ))}
    </div>
  );
}

export default TodoList;
