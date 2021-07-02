import React from 'react';

function TodoItem({ todoItem, onCompletedChange, onDelete }) {
  const className = todoItem.completed ? 'completed' : '';

  const handleClick = (event) => {
    onCompletedChange(event.target.checked);
  };

  return (
    <div>
      <span className={className}>
        <span>
          <input
            type="checkbox"
            defaultChecked={todoItem.completed}
            onClick={handleClick}
            readOnly
          />
        </span>
        <span>
          {todoItem.text}
        </span>
      </span>
      <span>
        <button onClick={onDelete}> delete</button>
      </span>
    </div>
  );
}

export default TodoItem;
