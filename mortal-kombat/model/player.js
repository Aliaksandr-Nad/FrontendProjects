import {calculateHP, elHP, renderHP, takeHit} from '../service/player.js';


let createPlayerModel = (playerNumber, name, hp) => {
    const player = Object.create(playerModel);
    player.player = playerNumber;
    player.name = name;
    player.img = hp;

    return player;
}

const playerModel = {
    player: 1,
    name: "default",
    hp: 100,
    img: "default",
    weapon: ["A", "B"],
    attack: function () {
        console.log(this.name + ' Fight!');
    },
    calculateHP,
    elHP,
    renderHP,
    takeHit,
};


export default createPlayerModel;
