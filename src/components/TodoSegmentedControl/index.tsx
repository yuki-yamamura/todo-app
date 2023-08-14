'use client';

import Button from '@/components/Button';
import { toUpperCaseFirstCharacter } from '@/utils';

import styles from './index.module.css';

const TodoSegmentedControl: React.FC = () => {
  const items = ['all', 'active', 'completed'];

  return (
    <ul className={styles.module}>
      {items.map((item) => (
        <li key={item}>
          <Button
            displayText={toUpperCaseFirstCharacter(item)}
            handleClick={() => console.log('dummy function')}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoSegmentedControl;
