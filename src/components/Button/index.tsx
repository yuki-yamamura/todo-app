import { toUpperCaseFirstCharacter } from '@/utils';

import styles from './index.module.css';

type Props = {
  value: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button: React.FC<Props> = ({ value, handleClick }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      value={value}
      className={styles.module}
    >
      {toUpperCaseFirstCharacter(value)}
    </button>
  );
};

export default Button;
