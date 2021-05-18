import React from 'react';
import cn from 'classnames';

import s from './style.module.scss';

interface LayoutClassName {
  className: string;
}

const Layout: React.FC<LayoutClassName> = ({ children, className = null }) => (
  <div className={cn(s.root, className)}>{children}</div>
);

export default Layout;
