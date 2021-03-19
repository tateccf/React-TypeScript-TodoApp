import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState: Todo[]): Todo[] => {
      return [...prevState, { id: Math.random().toString(), text }];
    });
  };

  const todoDeleteHandler = (id: string): void => {
    setTodos((prevState: Todo[]): Todo[] => {
      return prevState.filter(todo => todo.id !== id);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
}

export default App;
