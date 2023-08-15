import { input } from '@inquirer/prompts';

import { showBoard, defaultBoard } from './board.js';

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

    let pickedPiece, pickedMove;

    const pickPiece = async () => {
        let validateStatus;

        const validation = (answer) => {
            if (
                // If first is not a letter
                squaresKeysNum.includes(parseInt(answer[0])) ||
                answer.length !== 2 ||
                squaresKeysStr.includes(answer[1])
            ) {
                validateStatus = false;
            }
        };

        // Get piece to move
        const getPiece = async () => {
            do {
                validateStatus = true;
                pickedPiece = await input({
                    message: 'Select piece',
                });

                validation(pickedPiece);
            } while (validateStatus === false);
        };

        const movePiece = async () => {
            do {
                validateStatus = true;
                pickedMove = await input({
                    message: 'Move to',
                });

                validation(pickedMove);
            } while (validateStatus === false);
        };

        await getPiece();
        await movePiece();

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
