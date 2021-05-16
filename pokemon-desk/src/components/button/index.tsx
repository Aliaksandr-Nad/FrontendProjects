import React from 'react';

import cn from 'classnames';

import s from './button.module.scss';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth: boolean;
  color: ButtonColor;
  size: ButtonSize;
}

enum ButtonColor {
  Green = 1,
  Yellow,
  Blue,
}

enum ButtonSize {
  Small = 1,
  Medium,
  Large,
}

const Button: React.FC<IButtonProps> = ({ children, onClick, isFullWidth, color, size }) => {
  let btnWidth;
  if (isFullWidth) {
    btnWidth = s.fullWidth;
  }

  let btnColor;
  switch (color) {
    case ButtonColor.Green:
      btnColor = s['color-green'];
      break;
    case ButtonColor.Yellow:
      btnColor = s['color-yellow'];
      break;
    case ButtonColor.Blue:
      btnColor = s['color-blue'];
      break;
    default:
      btnColor = s['color-green'];
  }

  let btnSize;
  switch (size) {
    case ButtonSize.Small:
      btnSize = s['size-small'];
      break;
    case ButtonSize.Medium:
      btnSize = s['size-medium'];
      break;
    case ButtonSize.Large:
      btnSize = s['size-large'];
      break;
    default:
      btnSize = s['size-medium'];
  }

  return (
    <button type="button" className={cn(s.root, btnWidth, btnColor, btnSize)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
