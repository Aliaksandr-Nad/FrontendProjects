import React from 'react';
import cn from 'classnames'

import s from './Navbar.module.css'


function Navbar({onClickHamburger, isActive, bgActive = false}) {
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={cn(s.menuButton, {[s.active]: isActive})}
                   onClick={onClickHamburger}
                >
                    <span/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
