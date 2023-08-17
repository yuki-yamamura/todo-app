import Button from '../Button';
import React from 'react';

import styles from './index.module.css';

const filters = {
  all: 'all',
  active: 'active',
  completed: 'completed',
} as const;

export type Filter = (typeof filters)[keyof typeof filters];

type Props = {
  currentFilter: Filter;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TodosFilter: React.FC<Props> = ({ currentFilter, handleClick }) => {
  return (
    <ul className={styles.module}>
      {Object.values(filters).map((filter) => (
        <li
          key={filter}
          aria-current={filter === currentFilter}
          className={styles.listItem}
        >
          <Button value={filter} handleClick={handleClick} />
        </li>
      ))}
    </ul>
  );
};

export default TodosFilter;
