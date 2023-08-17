import NewTodo from '@/components/NewTodo';
import TodoList from '@/components/TodoList';

import type { NextPage } from 'next';

import styles from './index.module.css';

const Page: NextPage = () => {
  return (
    <main className={styles.module}>
      <h1 className={styles.heading}>TODO</h1>
      <NewTodo />
      <TodoList />
    </main>
  );
};

export default Page;
