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
    let damage = getRandom();
    player.hp = player.hp <= damage ? 0 : player.hp - damage;
    $playerLife.style.width = player.hp + '%';
}

let getRandom = () => {
    return Math.ceil(Math.random() * 200);
}

let showResultText = (name) => {
    const $title = createElement('div', 'loseTitle');
    if (name) {
        $title.innerText = name + ' Win!';
    } else {
        $title.innerText = 'Draw!';
    }

    return $title;
}


$randomButton.addEventListener('click', () => {
    changeHP(player1);
    changeHP(player2);

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
    }

    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(showResultText(player1.name));
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(showResultText(player2.name));
    } else if (player2.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(showResultText());
    }
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
