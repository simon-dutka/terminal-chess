import { select } from '@inquirer/prompts';
import singlePlayer from '../modules/singlePlayer.js';
import engines from '../modules/engine.js';

const menu = async () => {
    let menuChoice = await select({
        message: '',
        choices: [
            {
                name: 'One player',
                value: 0,
            },
            {
                name: 'Two players',
                value: 1,
            },
            {
                name: 'Exit',
                value: 2,
            },
        ],
    });

    switch (menuChoice) {
        case 0:
            console.clear();
            singlePlayer();
            break;
        case 1:
            console.clear();
            engines();
            break;
        case 2:
            console.clear();
            process.exit();
            break;
        default:
            break;
    }
};

export default menu;
