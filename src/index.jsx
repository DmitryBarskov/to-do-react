import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';

import InMemoryStorage from './InMemoryStorage';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp storage={new InMemoryStorage()} />
  </React.StrictMode>,
  document.getElementById('root'),
);
