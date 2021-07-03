import React from 'react';

function TodoItem({ todoItem, onCompletedChange }) {
  const className = todoItem.completed ? 'completed' : '';

  const handleClick = (event) => {
    onCompletedChange(event.target.checked);
  };

  return (
    <div className={className}>
      <span>
        <input
          type="checkbox"
          defaultChecked={todoItem.completed}
          onClick={handleClick}
          readOnly
        />
      </span>
      {todoItem.text}
    </div>
  );
}

export default TodoItem;
