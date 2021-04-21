import {getResultText, getReloadButton} from './dom.js';
import {$arenas, $form} from '../constants.js';

import saveLog from './log.js';


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


export default checkResult;
