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

export const fire = firebase;
export const db = firebase.database();

export default db;
