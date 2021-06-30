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
      todoItems: [],
    };
  }

  componentDidMount() {
    const { storage } = this.props;

    this.setState({
      todoItems: storage.all(),
    });
  }

  changeCompleted(todoItem, completed) {
    const { storage } = this.props;

    storage.update({ ...todoItem, completed });

    this.setState({
      todoItems: storage.all(),
    });
  }

  addTodoItem(text) {
    const { storage } = this.props;

    const todoItem = { text, completed: false };
    storage.save(todoItem);

    this.setState({
      todoItems: storage.all(),
    });
  }

  render() {
    const { todoItems } = this.state;
    return (
      <div>
        <TodoList
          todoItems={todoItems}
          onCompletedChange={(todoItem, completed) => this.changeCompleted(todoItem, completed)}
        />
        <TodoForm
          onSubmit={(todoItemText) => this.addTodoItem(todoItemText)}
        />
      </div>
    );
  }
}

export default TodoApp;
