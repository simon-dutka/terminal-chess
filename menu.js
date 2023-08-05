import { select } from '@inquirer/prompts';

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
    if (menuChoice === 0) {
        console.clear();
    }
    if (menuChoice === 1) {
        console.clear();
    }
    if (menuChoice === 2) {
        console.clear();
        process.exit();
    }
};

export default menu;
