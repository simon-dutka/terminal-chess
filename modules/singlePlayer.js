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

let squaresKeysNum = Object.keys(squaresValues);
let squaresKeysStr = Object.keys(squaresValues);

squaresKeysNum = squaresKeysNum
    .filter((el) => !isNaN(el))
    .map((x) => parseInt(x, 10));

squaresKeysStr = squaresKeysStr.filter((el) => isNaN(el)).map((x) => x);

const singlePlayer = () => {
    showBoard();

    let pickedPiece;

    const pickPiece = async () => {
        // Get piece to move
        const getPiece = async () => {
            let validateStatus = true;
            do {
                validateStatus = true;
                pickedPiece = await input({
                    message: 'Select piece',
                });

                const validation = () => {
                    if (
                        // If first is not a letter
                        squaresKeysNum.includes(parseInt(pickedPiece[0])) ||
                        pickedPiece.length !== 2 ||
                        squaresKeysStr.includes(pickedPiece[1])
                    ) {
                        validateStatus = false;
                    }
                };

                validation();
            } while (validateStatus === false);
        };

        await getPiece();

        pickedPiece = pickedPiece
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
