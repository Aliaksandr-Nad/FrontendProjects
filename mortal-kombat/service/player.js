import saveLog from './log.js';


export function calculateHP(damage) {
    this.hp = this.hp <= damage ? 0 : this.hp - damage;
}

export function elHP() {
    return document.querySelector('.player' + this.player + ' .life');
}

export function renderHP() {
    this.elHP().style.width = this.hp + '%';
}

export function takeHit(opponent) {
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
