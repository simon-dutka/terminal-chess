import { input } from '@inquirer/prompts';
import { showBoard, board } from './board.js';
import engine from './engine.js';

const singlePlayer = () => {
    showBoard();
    engine();
};

singlePlayer(); //! Test log

export default singlePlayer;
