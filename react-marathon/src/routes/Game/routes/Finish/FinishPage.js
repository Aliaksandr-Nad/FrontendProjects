import {useContext} from "react";
import {useHistory} from "react-router-dom";

import {PokemonContext} from "../../../../context/pokemonContext";

import FinishBoard from "../Board/component/FinishBoard";
import Layout from "../../../../components/Layout";

import s from './style.module.css';

const FinishPage = () => {
    const {player1Pokemons, player2Pokemons} = useContext(PokemonContext);
    const history = useHistory();

    const handlerButtonClick = () => {
        history.replace('/game');
    }

    if (player1Pokemons.length === 0 || player2Pokemons.length === 0) {
        handlerButtonClick();
    }

    return (
            <Layout
                id="2"
                title="Finish Page!"
                colorBg="#040497"
            >
                <FinishBoard
                    player={1}
                    cards={player1Pokemons}
                />
                <button onClick={handlerButtonClick}>END GAME</button>
                <FinishBoard
                    player={2}
                    cards={player2Pokemons}
                />
            </Layout>
    );
};

export default FinishPage;
