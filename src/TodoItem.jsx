import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <span>
        <input type="checkbox" />
      </span>
      {props.todoItem.text}
    </div>
  );
}

export default TodoItem;
