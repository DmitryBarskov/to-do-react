import React from 'react';

function TodoItem({ todoItem, onChange }) {
  const className = todoItem.completed ? 'completed' : '';
  return (
    <div className={className}>
      <span>
        <input
          type="checkbox"
          checked={todoItem.completed}
          readOnly
        />
      </span>
      {todoItem.text}
    </div>
  );
}

export default TodoItem;
