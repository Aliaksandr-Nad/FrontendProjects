import {useHistory} from "react-router-dom";
import {useState} from "react"

import Layout from "../../components/Layout";
import PokemonCard from "../../components/PokemonCard";

import POKEMONS from "./../../components/POKEMONS.json"
import s from "../Home/style.module.css";


const GamePage = () => {
    const history = useHistory();
    const handlerButtonClick = () => {
        history.goBack();
    }

    const [pokemons, setPokemon] = useState(POKEMONS);
    const handlerPokemonClick = (id) => {
        setPokemon(prevState => prevState.map(v => ({...v, isActive: (v.id === id ? !v.isActive : v.isActive)})));
    }

    return (
        <>
            <p>Game Page!</p>
            <button onClick={handlerButtonClick}>
                return
            </button>
            <Layout
                id="2"
                title="Cool layout !)"
                colorBg="#040497"
            >
                <div className={s.flex}>
                    {
                        pokemons.map(item =>
                            <PokemonCard key={item.id} id={item.id} name={item.name} type={item.type}
                                         values={item.values} img={item.img} isActive={item.isActive}
                                         handlerClick={handlerPokemonClick}/>)
                    }
                </div>
            </Layout>
        </>
    );
};

export default GamePage;
