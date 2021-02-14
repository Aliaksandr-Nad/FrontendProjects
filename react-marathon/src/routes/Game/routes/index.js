import {Route, Switch, useRouteMatch} from "react-router-dom";
import {useState} from "react";

import {PokemonContext} from "../../../context/pokemonContext";

import StartPage from "./Start/StartPage";
import BoardPage from "./Board/BoardPage";
import FinishPage from "./Finish/FinishPage";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemon] = useState([]);
    const [enemyPokemons, setEnemyPokemons] = useState([]);
    const [gameResult, setGameResult] = useState("");

    const handlerSelectedPokemons = (pokemon) => {
        setSelectedPokemon(prevState => {
            if (prevState.find(x => x.id === pokemon.id)){
                return prevState.filter(x => x.id !== pokemon.id);
            }

            return [...prevState, pokemon];
        });
    }

    const handlerCleanPokemonContext = () => {
        setSelectedPokemon([]);
        setEnemyPokemons([]);
    }

    return (
        <PokemonContext.Provider value={{
            player1Pokemons: selectedPokemons,
            onSelectedPokemons: handlerSelectedPokemons,
            player2Pokemons: enemyPokemons,
            onEnemyPokemons: setEnemyPokemons,
            cleanPokemonContext: handlerCleanPokemonContext,
            gameResult: gameResult,
            setGameResult: setGameResult,
        }}>
            <Switch>
                <Route path={`${match.path}/`} exact component={StartPage}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};


export default GamePage;
