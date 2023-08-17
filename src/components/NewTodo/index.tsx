'use client';

import Checkbox from '@/components/Checkbox';
import { useTodos } from '@/context/todos';
import { useState } from 'react';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

const NewTodo: React.FC = () => {
  const initialTodo: Omit<Todo, 'id'> = {
    text: '',
    status: 'active',
  };
  const [todo, setTodo] = useState<typeof initialTodo>(initialTodo);
  const { addTodo } = useTodos();

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key === 'Enter') {
      addTodo(todo.text, todo.status);
      setTodo(initialTodo);
    }
  };
  const handleStatusChange = () => {
    setTodo((previousTodo) => ({
      ...previousTodo,
      status: previousTodo.status === 'active' ? 'completed' : 'active',
    }));
  };
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((previousTodo) => ({ ...previousTodo, text: e.target.value }));
  };

  return (
    <div className={styles.module}>
      <Checkbox
        checked={todo.status === 'completed'}
        handleClick={handleStatusChange}
      />
      <input
        type="text"
        value={todo.text}
        placeholder="Create a new todo..."
        required
        onChange={handleTextChange}
        onKeyDown={handleSubmit}
        className={styles.textbox}
      />
    </div>
  );
};

export default NewTodo;
