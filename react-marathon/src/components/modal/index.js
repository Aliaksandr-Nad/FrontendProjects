import {useRef, useEffect} from 'react';

import cn from 'classnames'
import s from './style.module.css'


const Modal = ({title, children, isOpen, oncloseModal}) => {
    const modalEL = useRef()

    useEffect(() => {
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
    }, [isOpen]);


    const handlerCloseModal = () => {
        oncloseModal && oncloseModal(false);
    };

    const handlerClickRoot = (event) => {
        if (!modalEL.current.contains(event.target)) {
            handlerCloseModal();
        }
    };

    return (
        <div
            className={cn(s.root, {[s.open]: isOpen})}
            onClick={handlerClickRoot}
        >
            <div
                ref={modalEL}
                className={s.modal}
            >
                <div className={s.head}>
                    {title}
                    <span
                        className={s.btnClose}
                        onClick={handlerCloseModal}
                    />
                </div>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
