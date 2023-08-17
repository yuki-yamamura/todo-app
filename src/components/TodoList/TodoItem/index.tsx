import Checkbox from '@/components/Checkbox';
import { useTodos } from '@/context/todos/';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

type Props = {
  todo: Todo;
};
const TodoItem: React.FC<Props> = ({ todo }) => {
  const { removeTodo, updateTodo } = useTodos();

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...todo, text: e.currentTarget.value });
  };

  const handleStatusChange = () => {
    updateTodo({
      ...todo,
      status: todo.status === 'active' ? 'completed' : 'active',
    });
  };

  const handleRemove = () => {
    removeTodo(todo.id);
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
        required
        onChange={handleTextChange}
        className={styles.textbox}
      />
      <label htmlFor="delete-todo">
        <button type="button" onClick={handleRemove} className={styles.button}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="icon-cross.svg" alt="delete-todo" />
        </button>
      </label>
    </div>
  );
};

export default TodoItem;
