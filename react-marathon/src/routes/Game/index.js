const GamePage = ({onChangePage}) => {
    const handlerClick = () => {
        onChangePage && onChangePage('home');
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
