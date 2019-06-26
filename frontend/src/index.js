import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import TodoStore from "./Store/TodoStore"

ReactDOM.render(
  <TodoList store={TodoStore} />, 
  document.getElementById('root')
);