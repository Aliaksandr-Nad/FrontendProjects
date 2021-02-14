import {useContext, useState} from "react";
import {useHistory} from "react-router-dom";

import {PokemonContext} from "../../../../context/pokemonContext";

import FinishBoard from "./component/FinishBoard";
import Layout from "../../../../components/Layout";

import s from './style.module.css';
import {FirebaseContext} from "../../../../context/firebaseContext";

const FinishPage = () => {
    const {player1Pokemons, player2Pokemons, gameResult} = useContext(PokemonContext);
    const {addPokemon} = useContext(FirebaseContext);
    const [selectedPokemon, setSelectedPokemon] = useState({});

    const history = useHistory();

    const handlerButtonClick = () => {
        addPokemon(selectedPokemon);
        history.replace('/game');
    }

    if (player1Pokemons.length === 0 || player2Pokemons.length === 0) {
        handlerButtonClick();
    }

    console.log(gameResult);

    return (
            <Layout
                id="2"
                title="Finish Page!"
                colorBg="#040497"
            >
                <FinishBoard cards={player1Pokemons} disableClick={true}/>
                <button onClick={handlerButtonClick}>END GAME</button>
                <FinishBoard cards={player2Pokemons} disableClick={gameResult !== 'WIN'} onClickCard={setSelectedPokemon}/>
            </Layout>
    );
};

export default FinishPage;
