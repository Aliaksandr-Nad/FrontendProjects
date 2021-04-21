import {ATTACK, HIT} from "../constants.js";
import {getRandom} from "./utils.js";


export let enemyAttack = () => {
    const hit = ATTACK[getRandom(3) - 1];
    const defence = ATTACK[getRandom(3) - 1];

    return {
        value: getRandom(HIT[hit]),
        hit,
        defence
    }
}

export let playerAttack = ($form) => {
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
