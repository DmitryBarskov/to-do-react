import React from 'react';

function TodoItem({ todoItem, onCompletedChange, onDelete }) {
  const className = todoItem.completed ? 'completed' : '';

  const handleClick = (event) => {
    onCompletedChange(event.target.checked);
  };

  return (
    <div>
      <input
        type="checkbox"
        defaultChecked={todoItem.completed}
        onClick={handleClick}
        readOnly
      />
      <span className={className}>{todoItem.text}</span>
      <button type="submit" className="link" onClick={onDelete}>
        delete
      </button>
    </div>
  );
}

export default TodoItem;
