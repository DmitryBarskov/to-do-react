import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './index.css';

class TodoApp extends React.Component {
  // TODO: Add ability to persist todo items
  // TODO: load todo items from storage
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { id: 1, text: 'Write tests' },
        { id: 2, text: 'Ride the bike' },
        { id: 3, text: 'Buy some milk', completed: true },
      ],
      nextId: 4,
    };
  }

  addTodoItem(text) {
    this.setState((state) => ({
      todoItems: [
        ...state.todoItems,
        { id: state.nextId, text, completed: false },
      ],
      nextId: state.nextId + 1,
    }));
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div>
        <TodoList todoItems={todoItems} />
        <TodoForm
          onSubmit={(todoItemText) => this.addTodoItem(todoItemText)}
        />
      </div>
    );
  }
}

export default TodoApp;
