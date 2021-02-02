import React from 'react';
import cn from "classnames"

import s from './Menu.module.css'

function Menu({isActive}) {
    return (
        <div className={cn(s.menuContainer, {[s.active]: isActive})}>
            <div className={s.overlay}/>
                <ul>
                    <li>
                        <a href="#welcome">
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href="#game">
                            GAME
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
        </div>
    );
}

export default Menu;
