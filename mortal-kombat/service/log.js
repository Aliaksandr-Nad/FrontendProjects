import {logs} from '../constants.js';
import {getRandom} from "./utils.js";

const $chat = document.querySelector(".chat")


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


export default saveLog;
