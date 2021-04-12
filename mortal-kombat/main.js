const $arenas = document.querySelector("div .arenas")
const $randomButton = document.querySelector(".button")

const player1 = {
    player: 1,
    name: "Noob",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["A", "B"],
    attack: (name) => {
        console.log(name + ' Fight!');
    }
};

const player2 = {
    player: 2,
    name: "Sub Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["A", "B"],
    attack: (name) => {
        console.log(name + ' Fight!');
    }
};

let createElement = (tag, className) => {
    const $element = document.createElement(tag);
    if (className) {
        $element.classList.add(className);
    }
    return $element;
}

let createPlayer = (playerObj) => {
    const $player = createElement('div', 'player' + playerObj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    $life.style.width = playerObj.hp + '%';

    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = createElement('div', 'character');
    const $img = createElement('img');
    $img.src = playerObj.img;

    $character.appendChild($img);
    $player.appendChild($progressbar);
    $player.appendChild($character);

    return $player;
};

let changeHP = (player) => {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    let damage = Math.ceil(Math.random() * 20);
    player.hp = player.hp <= damage ? 0 : player.hp - damage;
    $playerLife.style.width = player.hp + '%';

    if (player.hp <= 0) {
        $arenas.appendChild(playerLose(player));
    }
}

let playerLose = (player) => {
    const $title = createElement('div', 'loseTitle');
    $title.innerText = getTitleText(player.player);
    $randomButton.disabled = true;

    return $title;
}

getTitleText = (player) => {
    switch (player.player) {
        case 1:
            return player2.name + ' win!'
        case 2:
            return player1.name + ' win!'
    }
}

$randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
