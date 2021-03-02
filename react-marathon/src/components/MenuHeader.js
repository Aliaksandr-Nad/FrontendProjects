import React from 'react';
import Menu from "./Menu";
import Navbar from "./Navbar";
import Modal from "./modal/index";
import {useState} from 'react'

function MenuHeader({bgActive}) {
    const [isActive, setActive] = useState(false);
    const [isOpenModal, setOpenModal] = useState(false);

    const handlerHamburger = () => {
        setActive(prevState => !prevState)
    }

    const handlerClickLogin = () => {
        setOpenModal(prevState => !prevState)
    }

    return (
        <>
            <Menu
                isActive={isActive}
                handlerHamburger={handlerHamburger}
            />
            <Navbar
                isActive={isActive}
                bgActive={bgActive}
                onClickHamburger={handlerHamburger}
                onClickLogin={handlerClickLogin}
            />
            <Modal
                title="LOGIN"
                isOpen={isOpenModal}
                oncloseModal={handlerClickLogin}
            >
                Some text
            </Modal>
        </>
    );
}


export default MenuHeader;
