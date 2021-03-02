import {useHistory} from "react-router-dom"
import s from './style.module.css';

const Header = ({title, descr}) => {
    const history = useHistory();
    const handlerClick = () => {
        history.push('/game');
    }

    return (
        <header className={s.root}>
            <div className={s.forest}/>
            <div className={s.silhouette}/>
            <div className={s.moon}/>
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
