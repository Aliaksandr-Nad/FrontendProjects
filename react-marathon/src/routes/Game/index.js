import {useHistory} from "react-router-dom";

const GamePage = () => {
    const history = useHistory();
    const handlerClick = () => {
        history.goBack();
    }

    return (
        <>
            <p>Game Page!</p>
            <button onClick={handlerClick}>
                return
            </button>
        </>
    );
};

export default GamePage;
