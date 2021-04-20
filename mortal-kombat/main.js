const $arenas = document.querySelector("div .arenas")
const $randomButton = document.querySelector(".button")
const $form = document.querySelector(".control")
const $chat = document.querySelector(".chat")

let isFirstRound = true;

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: ['Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.'],
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: ['Ничья - это тоже победа!']
};

const player1 = {
    player: 1,
    name: "Noob",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
    weapon: ["A", "B"],
    attack: (name) => {
        console.log(name + ' Fight!');
    },
    calculateHP,
    elHP,
    renderHP,
    takeHit,
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
    calculateHP,
    elHP,
    renderHP,
    takeHit,
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

function calculateHP(damage) {
    this.hp = this.hp <= damage ? 0 : this.hp - damage;
}

function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

function takeHit(opponent) {
    if (opponent.attackOption.hit !== this.attackOption.defence) {
        changeHP(this, opponent.attackOption.value);
        saveLog('hit', this, opponent);
    } else {
        saveLog('defence', this, opponent);
    }
}

let changeHP = (player, damage) => {
    player.calculateHP(damage);
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

let checkResult = (player1, player2) => {
    if (player1.hp === 0 && player1.hp < player2.hp) {
        showResult(player2.name);
        saveLog('end', player2, player1);
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        showResult(player1.name);
        saveLog('end', player1, player2);
    } else if (player2.hp === 0 && player2.hp === 0) {
        showResult();
        saveLog('draw');
    }
}

let showResult = (name) => {
    $arenas.appendChild(getResultText(name));
    $form.before(getReloadButton());
}

let saveLog = (type, player1, player2) => {
    const log = generateLog(type, player1, player2)
    const el = `<p>${log}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
}

let generateLog = (type, player1, player2) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    let text = logs[type][getRandom(logs[type].length) - 1];

    switch (type) {
        case 'start':
            return text.replace('[time]', time)
                .replace('[player1]', player1.name)
                .replace('[player2]', player2.name);
        case 'end':
            return text.replace('[playerWins]', player1.name)
                .replace('[playerLose]', player2.name);
        case 'hit':
            text = text.replace('[playerKick]', player2.name)
                .replace('[playerDefence]', player1.name);
            return `${time} - ${text} -${player2.attackOption.value} [${player1.hp}/100]`;
        case 'defence':
            text = text.replace('[playerDefence]', player1.name)
                .replace('[playerKick]', player2.name);
            return `${time} - ${text}`
        case 'draw':
            return text;
    }
}

$form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (isFirstRound) {
        saveLog('start', player1, player2);
        isFirstRound = false;
    }

    player1.attackOption = playerAttack();
    player2.attackOption = enemyAttack();

    player1.takeHit(player2);
    player2.takeHit(player1);

    if (player1.hp === 0 || player2.hp === 0) {
        $randomButton.disabled = true;
        checkResult(player1, player2);
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

