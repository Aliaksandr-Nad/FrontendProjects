import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react"

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import db from "./../../service/firebase"
import s from "./style.module.css";


const GamePage = () => {
        const history = useHistory();
        const handlerButtonClick = () => {
            history.goBack();
        }

        const [isChanged, setChange] = useState(true);

        const [pokemons, setPokemon] = useState({});
        const handlerPokemonClick = (id) => {
            setPokemon(prevState => {
                return Object.entries(prevState).reduce((acc, item) => {
                    const pokemon = {...item[1]};
                    if (pokemon.id === id) {
                        pokemon.isActive = !pokemon.isActive;
                        HandlerSavePokemon(item[0], pokemon)
                    }
                    acc[item[0]] = pokemon;

                    return acc;
                }, {});
            });
        }

        useEffect(() => {
            db.ref('pokemons').once('value', (snapshot) => {
                setPokemon(snapshot.val());
            });

            console.log('effect');
        }, [isChanged]);

        const HandlerSavePokemon = (Key, pokemon) => {
            db.ref('pokemons/' + Key).set(pokemon);
            console.log('save');
        }

        const HandlerCreateRandomPokemon = () => {
            const pokemonsArr = Object.entries(pokemons);
            const randomInt = Math.floor(Math.random() * pokemonsArr.length)
            const newKey = db.ref().child('pokemons').push().key;

            HandlerSavePokemon(newKey, pokemonsArr[randomInt][1]);

            setChange(prevState => !prevState);
        }

        return (
            <>
                <Layout
                    id="2"
                    title="Cool layout !)"
                    colorBg="#040497"
                >
                    <div className={s.buttonWrapper}>
                        <p>Game Page!</p>
                        <button onClick={handlerButtonClick}>
                            return
                        </button>
                        <button onClick={HandlerCreateRandomPokemon}>
                            Generate pokemon duplicates
                        </button>
                    </div>
                    <div className={s.flex}>
                        {
                            Object.entries(pokemons).map(([key, {id, name, type, values, img, isActive}]) =>
                                <PokemonCard
                                    key={key}
                                    id={id}
                                    name={name}
                                    type={type}
                                    values={values}
                                    img={img}
                                    isActive={isActive}
                                    handlerClick={handlerPokemonClick}/>)
                        }
                    </div>
                </Layout>
            </>
        );
    }
;

export default GamePage;
