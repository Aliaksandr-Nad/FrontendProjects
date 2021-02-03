import {useHistory} from "react-router-dom"
import s from './Header.module.css';

const Header = ({title, descr, onClickButton}) => {
    const history = useHistory();
    const handlerClick = () => {
        history.push('/game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handlerClick}>
                    start game
                </button>
            </div>
        </header>
    );
}

export default Header;
