import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCt91QcxAv0f7zM-3pDqEaLqLI5t6HdB2k",
    authDomain: "pokemon-game-cf31c.firebaseapp.com",
    databaseURL: "https://pokemon-game-cf31c-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-cf31c",
    storageBucket: "pokemon-game-cf31c.appspot.com",
    messagingSenderId: "315313153743",
    appId: "1:315313153743:web:9d3fd01029e1767510b9ba"
};

firebase.initializeApp(firebaseConfig);

class Firebase{
    constructor() {

        this.fire = firebase;
        this.db = this.fire.database();
    }

    getPokemonSocket = (cb) => {
        this.db.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.db.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (Key, pokemon) => {
        this.db.ref(`pokemons/${Key}`).set(pokemon);
    }

    addPokemon = (pokemon) => {
        const newKey = this.db.ref().child('pokemons').push().key;
        this.db.ref(`pokemons/${newKey}`).set(pokemon);
    }
}

export default Firebase;
