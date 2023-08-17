'use client';

import TodoItem from './TodoItem';
import Button from '../Button';
import TodosFilter from '@/components/TodosFilter';
import { useTodos } from '@/context/todos';
import { useState } from 'react';

import type { Filter } from '@/components/TodosFilter';

import styles from './index.module.css';

const TodoList: React.FC = () => {
  const { todos, removeTodo } = useTodos();
  const [currentFilter, setCurrentFilter] = useState<Filter>('all');
  const filteredTodos =
    currentFilter === 'all'
      ? todos
      : todos.filter((todo) => todo.status === currentFilter);

  const handleFilterSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentFilter(e.currentTarget.value as Filter);
  };
  const handleClearButtonClick = () => {
    todos
      .filter((todo) => todo.status === 'completed')
      .forEach((todo) => removeTodo(todo.id));
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
        <>
          <ul className={styles.list}>
            {filteredTodos.map((todo) => (
              <li key={todo.id} className={styles.listItem}>
                <TodoItem todo={todo} />
              </li>
            ))}
            <li key="footer" className={styles.footer}>
              <div>{progressText}</div>
              <div className={styles.filterDesktop}>
                <TodosFilter
                  currentFilter={currentFilter}
                  handleClick={handleFilterSelect}
                />
              </div>
              <Button
                value="Clear Completed"
                handleClick={handleClearButtonClick}
              />
            </li>
            <li key="todoSegmentedControl" className={styles.filterMobile}>
              <TodosFilter
                currentFilter={currentFilter}
                handleClick={handleFilterSelect}
              />
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default TodoList;
