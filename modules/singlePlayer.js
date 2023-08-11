import { input } from '@inquirer/prompts';

import showBoard from './board.js';

let lettersValue = {
    1: 0,
    2: 8,
    3: 16,
    4: 24,
    5: 32,
    6: 40,
    7: 48,
    8: 56,
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
};

const singlePlayer = () => {
    showBoard();

    const pickPiece = async () => {
        let pieceChoice = await input({
            message: 'Select piece',
        });

        let pickedPiece = pieceChoice
            .toUpperCase()
            .split('')
            .map((el) => {
                el = lettersValue[el];
                return parseInt(el, 10);
            });

        pickedPiece = pickedPiece[0] + pickedPiece[1];
    };

    pickPiece();
};

export default singlePlayer;
