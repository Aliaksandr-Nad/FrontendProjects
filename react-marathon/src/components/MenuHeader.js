import React from 'react';
import Menu from "./Menu";
import Navbar from "./Navbar";
import {useState} from 'react'

function MenuHeader() {
    const [isActive, setActive] = useState(false);
    const handlerHamburger = () => {
        setActive(prevState => !prevState)
        console.log(isActive);
    }

    return (
        <>
            <Menu isActive={isActive}/>
            <Navbar isActive={isActive} onClickHamburger={handlerHamburger}/>
        </>
    );
}

export default MenuHeader;
