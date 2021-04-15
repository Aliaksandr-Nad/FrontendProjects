const $arenas = document.querySelector("div .arenas")
const $randomButton = document.querySelector(".button")
const $form = document.querySelector(".control")

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = {
    player: 1,
    name: "Noob",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["A", "B"],
    attack: (name) => {
        console.log(name + ' Fight!');
    },
    changeHP,
    elHP,
    renderHP,
};

const player2 = {
    player: 2,
    name: "Sub Zero",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["A", "B"],
    attack: (name) => {
        console.log(name + ' Fight!');
    },
    changeHP,
    elHP,
    renderHP,
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

let getReloadButton = () => {
    const $reloadDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');

    $reloadButton.innerText = 'Restart';
    $reloadButton.addEventListener('click', () => {
        window.location.reload();
    });

    $reloadDiv.appendChild($reloadButton);

    return $reloadDiv;
}

function changeHP(damage) {
    this.hp = this.hp <= damage ? 0 : this.hp - damage;
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

let attack = (player, damage) => {
    player.changeHP(damage);
    player.renderHP();
}

let getRandom = (span) => {
    return Math.ceil(Math.random() * span);
}

let getResultText = (name) => {
    const $title = createElement('div', 'loseTitle');

    if (name) {
        $title.innerText = name + ' Win!';
    } else {
        $title.innerText = 'Draw!';
    }

    return $title;
}

let checkResult = () => {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        showResult(player1.name);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        showResult(player2.name);
    } else if (player2.hp === 0 && player2.hp === 0) {
        showResult();
    }
}

let showResult = (name) => {
    $arenas.appendChild(getResultText(name));
    $form.before(getReloadButton());
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    const enemy = enemyAttack();
    const player = playerAttack();

    if (enemy.hit !== player.defence) {
        attack(player1, enemy.value)
    }

    if (player.hit !== enemy.defence) {
        attack(player2, player.value)
    }

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        checkResult();
    }
})

let enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

let playerAttack = () => {
    let result = {};

    for (let item of $form) {
        if (item.checked && item.name === 'hit') {
            result.value = getRandom(HIT[item.value]);
            result.hit = item.value;
        }

        if (item.checked && item.name === 'defence') {
            result.defence = item.value;
        }

        item.checked = false;
    }

    return result;
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

