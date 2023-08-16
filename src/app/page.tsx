import NewTodo from '@/components/NewTodo';
import TodoList from '@/components/TodoList';

import type { NextPage } from 'next';

import styles from '@/app/index.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>TODO</h1>
      <NewTodo />
      <TodoList />
      <div className={styles.remark}>drag and drop to reorder list</div>
    </main>
  );
};

export default Home;
