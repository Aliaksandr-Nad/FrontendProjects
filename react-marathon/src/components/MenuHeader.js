import React from 'react';
import Menu from "./Menu";
import Navbar from "./Navbar";
import {useState} from 'react'

function MenuHeader({bgActive}) {
    const [isActive, setActive] = useState(false);

    const handlerHamburger = () => {
        setActive(prevState => !prevState)
    }

    return (
        <>
            <Menu isActive={isActive} handlerHamburger={handlerHamburger}/>
            <Navbar isActive={isActive} bgActive={bgActive} onClickHamburger={handlerHamburger}/>
        </>
    );
}

export default MenuHeader;
