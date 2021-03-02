import {Link} from "react-router-dom"

import cn from "classnames"
import s from './style.module.css'

const MENU = [
    {
        title: 'HOME',
        to: '/'
    },
    {
        title: 'GAME',
        to: '/game'
    },
    {
        title: 'ABOUT',
        to: '/about'
    },
    {
        title: 'CONTACT',
        to: '/contact'
    },
]

function Menu({isActive, handlerHamburger}) {
    return (
        <div className={cn(s.menuContainer, {
            [s.active]: isActive === true,
            [s.deactive]: isActive === false,
        })}>
            <div className={s.overlay}/>
            <ul>
                {
                    MENU.map(({title, to}, index) => (
                        <li key={index} onClick={handlerHamburger}>
                            <Link to={to}>{title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Menu;
