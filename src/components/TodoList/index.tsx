'use client';

import TodoItem from './TodoItem';
import Button from '../Button';
import TodosFilter from '@/components/TodosFilter';
import { useTodos } from '@/context/todos';
import { remove } from '@/context/todos/action';
import { useState } from 'react';

import type { Filter } from '@/components/TodosFilter';

import styles from './index.module.css';

const TodoList: React.FC = () => {
  const { todos, dispatch } = useTodos();
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');
  const filteredTodos =
    currentFilter === 'all'
      ? todos
      : todos.filter((todo) => todo.status === currentFilter);

  const handleFilterSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentFilter(e.currentTarget.value as Filter);
  };
  const handleClear = () => {
    todos
      .filter((todo) => todo.status === 'completed')
      .forEach((todo) => dispatch(remove(todo.id)));
  };

  const progressText =
    filteredTodos.length === 0
      ? 'No item left'
      : filteredTodos.length === 1
      ? '1 item left'
      : `${filteredTodos.length} items left`;

  return (
    <>
      {todos.length === 0 ? null : (
        <ul className={styles.list}>
          {filteredTodos.map((todo) => (
            <li key={todo.id} className={styles.listItem}>
              <TodoItem todo={todo} key={todo.id} />
            </li>
          ))}
          <li
            key="footer"
            className={styles.footer}
            style={
              filteredTodos.length === 0
                ? {}
                : ({
                    '--border-radius': '0 0 0.25rem 0.25rem',
                  } as React.CSSProperties)
            }
          >
            <div>{progressText}</div>
            <div className={styles.filterDesktop}>
              <TodosFilter
                currentFilter={currentFilter}
                handleClick={handleFilterSelect}
              />
            </div>
            <Button
              value="Clear Completed"
              handleClick={handleClear}
              selected={false}
            />
          </li>
          <li key="todoSegmentedControl" className={styles.filterMobile}>
            <TodosFilter
              currentFilter={currentFilter}
              handleClick={handleFilterSelect}
            />
          </li>
        </ul>
      )}
    </>
  );
};

export default TodoList;
