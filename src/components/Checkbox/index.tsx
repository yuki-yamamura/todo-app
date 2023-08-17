import styles from './index.module.css';

type Props = {
  checked: boolean;
  handleClick: () => void;
};

const Checkbox: React.FC<Props> = ({ checked, handleClick }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleClick}
      className={styles.module}
    />
  );
};

export default Checkbox;
