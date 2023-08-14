import styles from './index.module.css';

const NewTodo: React.FC = () => {
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
      <input
        type="text"
        className={styles.textbox}
        placeholder="Create a new todo..."
        required
      />
    </form>
  );
};

export default NewTodo;
