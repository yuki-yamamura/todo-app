import TodoItem from './TodoItem';
import Button from '../Button';
import TodoSegmentedControl from '../TodoSegmentedControl';

import type { Todo } from '@/types/Todo';

import styles from './index.module.css';

type Props = {
  todos: Todo[];
};

const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <li key={todo.id} className={styles.listItem}>
          <TodoItem todo={todo} key={todo.id} />
        </li>
      ))}
      <li key="footer">
        <div className={styles.footer}>
          <div>{`${todos.length} items left`}</div>
          <TodoSegmentedControl />
          <Button
            displayText="Clear Completed"
            handleClick={() => console.log('dummy function')}
          />
        </div>
      </li>
    </ul>
  );
};

export default TodoList;
