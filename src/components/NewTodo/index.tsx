'use client';

import { useTodos } from '@/context/todos';
import { add } from '@/context/todos/action';
import { useState } from 'react';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

const NewTodo: React.FC = () => {
  const initialTodo = {
    text: '',
    status: 'active',
  } as const;
  const [todo, setTodo] = useState<Omit<Todo, 'id'>>(initialTodo);
  const { dispatch } = useTodos();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((previousTodo) => ({ ...previousTodo, text: e.target.value }));
  };
  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((previousTodo) => ({
      ...previousTodo,
      status: e.target.checked ? 'completed' : 'active',
    }));
  };
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key === 'Enter') {
      dispatch(add(todo.text, todo.status));
      setTodo(initialTodo);
    }
  };

  return (
    <div className={styles.module}>
      <input
        type="checkbox"
        onChange={handleStatusChange}
        className={styles.checkbox}
        required
        checked={todo.status === 'completed'}
      />
      <input
        type="text"
        className={styles.textbox}
        placeholder="Create a new todo..."
        value={todo.text}
        required
        onChange={handleTextChange}
        onKeyDown={handleSubmit}
      />
    </div>
  );
};

export default NewTodo;
