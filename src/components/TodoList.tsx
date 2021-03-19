import React from 'react';

export interface TodoListProps {
  items: { id: string; text: string }[];
  todoDeleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(item => {
        return (
          <li key={item.id}>
            <span>{item.text}</span>
            <button
              onClick={() => {
                props.todoDeleteHandler(item.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
