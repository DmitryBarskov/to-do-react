import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';

import LocalStorage from './LocalStorage';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp storage={new LocalStorage(window.localStorage)} />
  </React.StrictMode>,
  document.getElementById('root'),
);
