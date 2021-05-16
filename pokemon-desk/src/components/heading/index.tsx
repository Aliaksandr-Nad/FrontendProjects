import React from 'react';

interface IHeadingProps {
  type: HeadingSize;
}

enum HeadingSize {
  h1 = 1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
}

const Heading: React.FC<IHeadingProps> = ({ children, type }) => {
  return React.createElement(HeadingSize[type], null, children);
};

export default Heading;
