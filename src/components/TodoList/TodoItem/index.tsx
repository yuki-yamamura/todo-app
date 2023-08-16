import { useTodos } from '@/context/todos/';
import { remove, update } from '@/context/todos/action';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};
const TodoItem: React.FC<Props> = ({ todo }) => {
  const { dispatch } = useTodos();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(update({ ...todo, text: e.target.value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      update({ ...todo, status: e.target.checked ? 'completed' : 'active' }),
    );
  };

  const handleRemove = () => {
    dispatch(remove(todo.id));
  };

  return (
    <div className={styles.module}>
      <input
        type="checkbox"
        onChange={handleStatusChange}
        className={styles.checkbox}
        checked={todo.status === 'completed'}
      />
      <input
        type="text"
        className={styles.textbox}
        required
        value={todo.text}
        onChange={handleTextChange}
      />
      <label htmlFor="delete-todo">
        <button
          type="button"
          onClick={handleRemove}
          className={styles.deleteTodo}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="icon-cross.svg" alt="delete-todo" />
        </button>
      </label>
    </div>
  );
};

export default TodoItem;
