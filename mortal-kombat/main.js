const player1 = {
    name: "Noob",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["A", "B"],
    attack: () => {
        console.log(name + ' Fight!');
    }
}

const player2 = {
    name: "Sub Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["A", "B"],
    attack: () => {
        console.log(name + ' Fight!');
    }
}

let createPlayer = (player, champion) => {
    const $player = document.createElement('div');
    $player.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');

    const $life = document.createElement('div');
    $life.style.width = '100%'
    $life.classList.add('life');
    $life.innerText = champion.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = champion.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    $character.classList.add('character');

    const $img = document.createElement('img');
    $img.src = champion.img;

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);

    const $arena = document.querySelector("div .arenas")
    $arena.appendChild($player);
}

player2.attack();
player1.attack();

createPlayer('player1', player1);
createPlayer('player2', player2);
