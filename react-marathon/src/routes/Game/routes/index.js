import {Route, Switch, useRouteMatch} from "react-router-dom";
import {useState} from "react";

import {PokemonContext} from "../../../context/pokemonContext";

import StartPage from "./Start/StartPage";
import BoardPage from "./Board/BoardPage";
import FinishPage from "./Finish/FinishPage";

const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemon, setSelectedPokemon] = useState([]);

    return (
        <PokemonContext.Provider value={selectedPokemon}>
            <Switch>
                <Route path={`${match.path}/`} exact component={() => <StartPage setSelectedPokemon={setSelectedPokemon}/>}/>
                <Route path={`${match.path}/board`} component={BoardPage}/>
                <Route path={`${match.path}/finish`} component={FinishPage}/>
            </Switch>
        </PokemonContext.Provider>
    );
};


export default GamePage;
