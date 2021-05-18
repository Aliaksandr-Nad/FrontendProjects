import React from 'react';

import cn from 'classnames';

import s from './button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width: 'part' | 'full';
  color: 'green' | 'yellow';
  size: 'small' | 'medium' | 'large';
}

const Button: React.FC<IButtonProps> = ({ children, onClick, width, color, size }) => {
  return (
    <button type="button" className={cn(s.root, s[width], s[color], s[size])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
