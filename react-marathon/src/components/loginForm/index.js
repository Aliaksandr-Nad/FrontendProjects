import { useState } from 'react';

const LoginForm = ({onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();

        onSubmit && onSubmit({
            email,
            password,
        })

        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handlerSubmit}>
            <div>
                <input
                    value={email}
                    type="text"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>
            <div>
                <input
                    value={password}
                    type="password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>
            <button>
                Login
            </button>
        </form>
    );
};

export default LoginForm;
