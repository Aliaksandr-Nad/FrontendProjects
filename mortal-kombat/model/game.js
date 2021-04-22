import {createPlayer} from '../service/dom.js';
import {playerAttack, enemyAttack} from '../service/attack.js';
import {Player} from './player.js';

import {$arenas, $form} from '../constants.js';

import saveLog from '../service/log.js';
import checkResult from '../service/result.js';


class Game {
    start = () => {
        const $randomButton = document.querySelector(".button")

        let isFirstRound = true;

        const player1 = new Player({
            player: 1,
            name: "Noob",
            img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif"
        });

        const player2 = new Player({
            player: 2,
            name: "Sub Zero",
            img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif"
        });

        $arenas.appendChild(createPlayer(player1));
        $arenas.appendChild(createPlayer(player2));

        $form.addEventListener('submit', (e) => {
            e.preventDefault();

            if (isFirstRound) {
                saveLog('start', player1.name, player1.hp, player2.name);
                isFirstRound = false;
            }

            player1.attackOption = playerAttack($form);
            player2.attackOption = enemyAttack();

            player1.takeHit(player2);
            player2.takeHit(player1);

            if (player1.hp === 0 || player2.hp === 0) {
                $randomButton.disabled = true;
                checkResult(player1, player2);
            }
        })
    }
}


export default Game;
