import {useState} from 'react'

import {NotificationManager} from "react-notifications";

import Menu from "./Menu";
import Navbar from "./Navbar";
import Modal from "./modal/index";
import LoginForm from "./loginForm";

function MenuHeader({bgActive}) {
    const [isActive, setActive] = useState(null);
    const [isOpenModal, setOpenModal] = useState(null);

    const handlerHamburger = () => {
        setActive(prevState => !prevState)
    }

    const handlerClickLogin = () => {
        setOpenModal(prevState => !prevState)
    }

    const handlerSubmitMenuForm = async ({email, password}) => {
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            })
        };
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCt91QcxAv0f7zM-3pDqEaLqLI5t6HdB2k', requestOptions)
            .then(res => res.json());
        console.log("####: response", response);
        if (response.hasOwnProperty('error')){
            NotificationManager.error(response.error.message, 'Wrong!');
        }else {
            NotificationManager.success('Success login');
        }
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
                <LoginForm
                    onSubmit={handlerSubmitMenuForm}
                />
            </Modal>
        </>
    );
}


export default MenuHeader;
