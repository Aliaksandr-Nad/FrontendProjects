import saveLog from "../service/log.js";


export class Player {
    constructor(props) {
        this.player = props.player;
        this.name = props.name;
        this.hp = props.hp ??= 100;
        this.img = props.img;
    }

    calculateHP = (damage) => {
        this.hp = this.hp <= damage ? 0 : this.hp - damage;
    }

    elHP = () => {
        return document.querySelector('.player' + this.player + ' .life');
    }

    renderHP = () => {
        this.elHP().style.width = this.hp + '%';
    }

    takeHit = (opponent) => {
        let {name: player1Name, hp: player1HP} = this;
        let {name: player2Name, attackOption: {value: player2Damage}} = opponent;

        if (opponent.attackOption.hit !== this.attackOption.defence) {
            this.changeHP(this, opponent.attackOption.value);
            player1HP = this.hp;
            saveLog('hit', player1Name, player1HP, player2Name, player2Damage);
        } else {
            saveLog('defence', player1Name, player1HP, player2Name, player2Damage);
        }
    }

    changeHP = (player, damage) => {
        player.calculateHP(damage);
        player.renderHP();
    }
}
