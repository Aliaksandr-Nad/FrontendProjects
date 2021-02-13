import {useHistory} from "react-router-dom";
import {useState, useEffect, useContext} from "react"

import {FirebaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

import Layout from "../../../../components/Layout";
import PokemonCard from "../../../../components/PokemonCard";

import s from "./style.module.css";


const StartPage = () => {
    const firebaseContext = useContext(FirebaseContext);
    const {player1Pokemons, onSelectedPokemons, cleanPokemonContext} = useContext(PokemonContext);
    const history = useHistory();
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        firebaseContext.getPokemonSocket((pokemons) => {
            setPokemons(pokemons);
        })
        cleanPokemonContext();

        return () => firebaseContext.offPokemonSocket();
    }, []);

    const handlerPokemonClick = (key) => {
        const pokemon = {...pokemons[key]};
        onSelectedPokemons(pokemon);

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected
            }
        }));
    }

    const HandlerStartGame = () => {
        history.push('/game/board');
    }

    return (
        <>
            <Layout
                id="2"
                title="Cool layout !)"
                colorBg="#040497"
            >
                <div className={s.buttonWrapper}>
                    <p>Start Page!</p>
                    <button
                        onClick={HandlerStartGame}
                        disabled={Object.keys(player1Pokemons).length < 5}
                    >
                        Start Game
                    </button>
                </div>
                <div className={s.flex}>
                    {
                        Object.entries(pokemons).map(([key, {name, img, id, type, values, isSelected}]) =>
                            <PokemonCard
                                key={key}
                                name={name}
                                img={img}
                                id={id}
                                type={type}
                                values={values}
                                className={s.Card}
                                isActive={true}
                                isSelected={isSelected}
                                handlerClick={() => {
                                    if (Object.keys(player1Pokemons).length < 5 || isSelected) {
                                        handlerPokemonClick(key)
                                    }
                                }}/>)
                    }
                </div>
            </Layout>
        </>
    );
};

export default StartPage;
