import {useState} from 'react';
import Input from "../input";
import {useEffect} from "react";

import s from './style.module.css';



const LoginForm = ({isOpen, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (!isOpen){
            cleanForm();
        }
    }, [isOpen]);

    const cleanForm = () => {
        setEmail('');
        setPassword('');
    };

    const handlerSubmit = (event) => {
        event.preventDefault();

        onSubmit && onSubmit({
            email,
            password,
        })

        cleanForm();
    };

    const handlerSwitch = (event) => {
        event.preventDefault();
        console.log("####: event", event);

    };

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <Input
                    type="text"
                    value={email}
                    name="email"
                    label="email"
                    onChange={(event) => setEmail(event.target.value)}
                    required={true}
                />
            </div>
            <div>
                <Input
                    type="password"
                    value={password}
                    name="password"
                    label="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required={true}
                />
            </div>
            <button>
                Login
            </button>
            <span
                className={s.secondButton}
                onClick={handlerSwitch}
            >
                Login
            </span>
        </form>
    );
};

export default LoginForm;
