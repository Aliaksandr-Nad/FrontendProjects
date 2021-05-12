import React from 'react';
import cn from 'classnames'

import s from './app.module.scss';

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            Component App!!
        </div>
    )
}

export default App;
