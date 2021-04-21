import {getResultText, getReloadButton} from './dom.js';
import {$arenas, $form} from '../constants.js';

import saveLog from './log.js';


let checkResult = ({
                       name: player1Name,
                       hp: player1HP,
                       attackOption: {value: player1Damage}
                   } = player1,
                   {
                       name: player2Name,
                       hp: player2HP,
                       attackOption: {value: player2Damage}
                   } = player2
) => {
    if (player1HP === 0 && player1HP < player2HP) {
        showResult(player2Name);
        saveLog('end', player2Name, player2HP, player1Name, player1Damage);
    } else if (player2HP === 0 && player2HP < player1HP) {
        showResult(player1Name);
        saveLog('end', player1Name, player1HP, player2Name, player2Damage);
    } else if (player2HP === 0 && player2HP === 0) {
        showResult();
        saveLog('draw');
    }
}

let showResult = (name) => {
    $arenas.appendChild(getResultText(name));
    $form.before(getReloadButton());
}


export default checkResult;
