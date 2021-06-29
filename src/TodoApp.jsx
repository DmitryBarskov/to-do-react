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
        { text: 'Write tests' },
        { text: 'Ride the bike' },
        { text: 'Buy some milk', completed: true }
      ]
    };
  }

  addTodoItem(text) {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { text, completed: false }
      ]
    });
  }

  render() {
    return (
      <div>
        <TodoList todoItems={this.state.todoItems} />
        <TodoForm
          onSubmit={(todoItemText) => this.addTodoItem(todoItemText)}
        />
      </div>
    );
  }
}

export default TodoApp;
