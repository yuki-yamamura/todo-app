'use client';

type Props = {
  displayText: string;
  handleClick: () => void;
};

const Button: React.FC<Props> = ({ displayText, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>
      {displayText}
    </button>
  );
};

export default Button;
