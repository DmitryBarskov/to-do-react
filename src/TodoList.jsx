import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

function TodoList({ todoItems }) {
  return (
    <div>
      {todoItems.map((todoItem) => (
        <TodoItem key={todoItem.id} todoItem={todoItem} />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todoItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
