'use client';

import { toUpperCaseFirstCharacter } from '@/utils';
import React from 'react';

import styles from './index.module.css';

type Props = {
  value: string;
  selected: boolean;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ value, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      value={value}
      className={styles.button}
    >
      {toUpperCaseFirstCharacter(value)}
    </button>
  );
};

export default Button;
