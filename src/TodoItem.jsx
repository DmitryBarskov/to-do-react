import React from 'react';
import PropTypes from 'prop-types';

// TODO: Add ability to complete tasks
function TodoItem({ todoItem }) {
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

TodoItem.propTypes = {
  todoItem: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TodoItem;
