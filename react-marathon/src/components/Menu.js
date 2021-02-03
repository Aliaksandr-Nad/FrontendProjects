import React from 'react';
import cn from "classnames"

import s from './Menu.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '#welcome'
    },
    {
        title: 'GAME',
        to: '#game'
    },
    {
        title: 'ABOUT',
        to: '#about'
    },
    {
        title: 'CONTACT',
        to: '#contact'
    },
]

function Menu({isActive}) {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false,
        })}>
            <div className={s.overlay}/>
            <ul>
                {
                    MENU.map(({title, to}, index) => (
                        <li key={index}>
                            <a href={to}>{title}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Menu;
