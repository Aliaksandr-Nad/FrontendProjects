import React from 'react';

import './style.module.scss';

interface IHeadingProps {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, type = 'h1', className }) => {
  return React.createElement(type, { className }, children);
};

export default Heading;
