import { combineReducers } from 'redux';
import pokemons from './pokemon';

const createRootReducer = () => combineReducers({ pokemons });

export default createRootReducer;
