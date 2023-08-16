'use client';

import Button from '../Button';
import React from 'react';

import styles from './index.module.css';

export const filters = {
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
    <ul className={styles.tablist} role="tablist">
      {Object.values(filters).map((filter) => (
        <li key={filter} role="tab" aria-selected={filter === currentFilter}>
          <Button value={filter} handleClick={handleClick} selected={false} />
        </li>
      ))}
    </ul>
  );
};

export default TodosFilter;
