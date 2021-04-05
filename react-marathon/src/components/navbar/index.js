import React from 'react';

import {ReactComponent as LoginSVG} from '../../images/login.svg'

import cn from 'classnames'
import s from './style.module.css'


function Navbar({onClickHamburger, isActive, bgActive = false, onClickLogin}) {
    return (
        <nav id={s.navbar} className={cn({[s.bgActive]: bgActive})}>
            <div className={s.navWrapper}>
                <p className={s.brand}>
                    LOGO
                </p>
                <div className={s.loginAndMenu}>
                    <div
                        className={s.loginWrapper}
                        onClick={onClickLogin}
                    >
                        <LoginSVG/>
                    </div>
                    <div className={cn(s.menuButton, {[s.active]: isActive})}
                         onClick={onClickHamburger}
                    >
                        <span/>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
