let createElement = (tag, className) => {
    const $element = document.createElement(tag);
    if (className) {
        $element.classList.add(className);
    }
    return $element;
}

export let createPlayer = (playerObj) => {
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

export let getReloadButton = () => {
    const $reloadDiv = createElement('div', 'reloadWrap');
    const $reloadButton = createElement('button', 'button');

    $reloadButton.innerText = 'Restart';
    $reloadButton.addEventListener('click', () => {
        window.location.reload();
    });

    $reloadDiv.appendChild($reloadButton);

    return $reloadDiv;
}

export let getResultText = (name) => {
    const $title = createElement('div', 'loseTitle');

    if (name) {
        $title.innerText = name + ' Win!';
    } else {
        $title.innerText = 'Draw!';
    }

    return $title;
}
