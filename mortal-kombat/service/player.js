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
    let {name: player1Name, hp: player1HP} = this;
    let {name: player2Name, attackOption: {value: player2Damage}} = opponent;

    if (opponent.attackOption.hit !== this.attackOption.defence) {
        changeHP(this, opponent.attackOption.value);
        player1HP = this.hp;
        saveLog('hit', player1Name, player1HP, player2Name, player2Damage);
    } else {
        saveLog('defence', player1Name, player1HP, player2Name, player2Damage);
    }
}

let changeHP = (player, damage) => {
    player.calculateHP(damage);
    player.renderHP();
}
