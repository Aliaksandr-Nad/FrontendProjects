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
      btnColor = s.colorGreen;
      break;
    case ButtonColor.Yellow:
      btnColor = s.colorYellow;
      break;
    case ButtonColor.Blue:
      btnColor = s.colorBlue;
      break;
    default:
      btnColor = s.colorGreen;
  }

  let btnSize;
  switch (size) {
    case ButtonSize.Small:
      btnSize = s.sizeSmall;
      break;
    case ButtonSize.Medium:
      btnSize = s.sizeMedium;
      break;
    case ButtonSize.Large:
      btnSize = s.sizeLarge;
      break;
    default:
      btnSize = s.sizeMedium;
  }

  return (
    <button type="button" className={cn(s.root, btnWidth, btnColor, btnSize)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
