import { input } from '@inquirer/prompts';

import engine from './engine.js';

const singlePlayer = () => {
    engine();
};

singlePlayer(); //! Test log

export default singlePlayer;
