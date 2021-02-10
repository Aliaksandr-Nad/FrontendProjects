import {Route, Switch, useRouteMatch} from "react-router-dom";
import {useState} from "react";

import {PokemonContext} from "../../../context/pokemonContext";

import StartPage from "./Start/StartPage";
import BoardPage from "./Board/BoardPage";
import FinishPage from "./Finish/FinishPage";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemon, setSelectedPokemon] = useState({});

    const handlerSelectedPokemons = (key, pokemon) => {
        setSelectedPokemon(prevState => {
            if (prevState[key]){
                const copyState = {...prevState};
                delete copyState[key];

                return copyState;
            }

            return{
                ...prevState,
                [key]: pokemon,
            }
        })

    }

    return (
        <PokemonContext.Provider value={{
            pokemons: selectedPokemon,
            onSelectedPokemons: handlerSelectedPokemons
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
