import type { NextPage } from 'next';

import styles from '@/app/index.module.css';

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1>Hello, World!</h1>
    </main>
  );
};

export default Home;
