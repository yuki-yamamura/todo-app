import Image from 'next/image';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TodoItem: React.FC<Props> = ({ todo }) => {
  return (
    <form
      onSubmit={() => console.log('dummy function')}
      className={styles.module}
    >
      <input
        type="checkbox"
        onChange={() => console.log('dummy function')}
        className={styles.checkbox}
      />
      <input type="text" className={styles.textbox} required />
      <label htmlFor="delete-todo">
        <button
          type="button"
          onClick={() => console.log('dummy function')}
          className={styles.deleteTodo}
        >
          <Image
            src="icon-cross.svg"
            alt="delete-todo"
            width={18}
            height={18}
          />
        </button>
      </label>
    </form>
  );
};

export default TodoItem;
