import React from 'react';

type ButtonProps = {
  variant: 'big' | 'small';
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        onClick();
      }
    };
  
    return (
      <button className={`button ${variant}`} onClick={onClick} onKeyDown={handleKeyDown}>
        {children}
      </button>
    );
  };
  
  export default Button;