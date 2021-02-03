import React from 'react';
import cn from 'classnames'

import s from './Navbar.module.css'


function Navbar({onClickHamburger, isActive}) {
    const handlerHamburger = () => {
        onClickHamburger && onClickHamburger();
    }

    return (
        <nav id={s.navbar}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <a className={cn(s.menuButton, {[s.active]: isActive})}
                   onClick={handlerHamburger}
                >
                    <span/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
