import { input } from '@inquirer/prompts';

import showBoard from './board.js';

let squaresValues = {
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

let squareKeysNum = Object.keys(squaresValues);

squareKeysNum = squareKeysNum
    .filter((el) => !isNaN(el))
    .map((x) => parseInt(x, 10));

const singlePlayer = () => {
    showBoard();

    const pickPiece = async () => {
        // Get piece to move
        const getPiece = async () => {
            let validateStatus = true;
            do {
                validateStatus = true;
                let pieceChoice = await input({
                    message: 'Select piece',
                });

                // If first is not a letter
                if (squareKeysNum.includes(parseInt(pieceChoice[0]))) {
                    validateStatus = false;
                }

                if (pieceChoice.length !== 2) validateStatus = false;
                console.log(validateStatus);
            } while (validateStatus === false);
        };

        getPiece();

        let pickedPiece = pick
            // Upper letter
            .toUpperCase()
            // Make an array
            .split('')
            .map((el) => {
                // Get value of picked piece
                el = squaresValues[el];
                // Return elements as numbers
                return parseInt(el, 10);
            });

        // Add value to get correct piece
        pickedPiece = pickedPiece[0] + pickedPiece[1];
    };

    pickPiece();
};

export default singlePlayer;
