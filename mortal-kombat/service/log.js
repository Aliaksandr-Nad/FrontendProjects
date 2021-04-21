import {logs} from '../constants.js';
import {getRandom} from "./utils.js";

const $chat = document.querySelector(".chat")


let saveLog = (type, player1Name, player1HP, player2Name, player2Damage) => {
    const log = generateLog(type, player1Name, player1HP, player2Name, player2Damage)
    const el = `<p>${log}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
}

let generateLog = (type, player1Name, player1HP, player2Name, player2Damage) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;
    let text = logs[type][getRandom(logs[type].length) - 1];

    switch (type) {
        case 'start':
            return text.replace('[time]', time)
                .replace('[player1]', player1Name)
                .replace('[player2]', player2Name);
        case 'end':
            return text.replace('[playerWins]', player1Name)
                .replace('[playerLose]', player2Name);
        case 'hit':
            text = text.replace('[playerKick]', player2Name)
                .replace('[playerDefence]', player1Name);
            return `${time} - ${text} -${player2Damage} [${player1HP}/100]`;
        case 'defence':
            text = text.replace('[playerDefence]', player1Name)
                .replace('[playerKick]', player2Name);
            return `${time} - ${text}`
        case 'draw':
            return text;
    }
}


export default saveLog;
