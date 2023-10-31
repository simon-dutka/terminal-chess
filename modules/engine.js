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
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
};

let squaresKeysNum = Object.keys(squaresValues);
let squaresKeysStr = Object.keys(squaresValues);

squaresKeysNum = squaresKeysNum
    .filter((el) => !isNaN(el))
    .map((x) => parseInt(x, 10));

squaresKeysStr = squaresKeysStr.filter((el) => isNaN(el)).map((x) => x);

const engine = async () => {
    let validationStatus, pickedPiece, pickedMove;

    // ToDo:  -check if square is not empty; -check if move is allowed -check if picked square is not the same square

    const defaultValidation = (answer) => {
        // ToDo: separate syntax error and wrong numbers/letters selected
        if (
            squaresKeysStr.includes(answer[0]) === false ||
            squaresKeysNum.includes(Number(answer[1])) === false ||
            answer.length < 2 ||
            answer.length > 2
        ) {
            console.log('Wrong syntax! Right syntax example: a1');
            validationStatus = false;
        } else {
            validationStatus = true;
        }
    };

    const movePieceValidation = (answer) => {
        defaultValidation(answer);
        if (pickedPiece === answer) {
            console.log('Piece to move cannot be current pawn piece');
            validationStatus = false;
        }
    };

    // Get piece to move
    const getPiece = async () => {
        do {
            pickedPiece = await input({
                message: 'Select piece',
            });

            defaultValidation(pickedPiece);
        } while (validationStatus === false);
    };

    const movePiece = async () => {
        do {
            pickedMove = await input({
                message: 'Move to',
            });

            movePieceValidation(pickedMove);
        } while (validationStatus === false);
    };

    const getValueOfPiece = async (itemToGetValue) => {
        let item = itemToGetValue
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
        item = itemToGetValue[0] + itemToGetValue[1];
    };

    let id = 0;
    const movePawn = async () => {
        let item = defaultBoard.boardPositions[id];
        defaultBoard.boardPositions.splice(id, 1, '·');
        defaultBoard.boardPositions.splice(id + 8, 1, item);
    };

    await getPiece();
    await movePiece();
    await movePawn(pickedPiece, pickedMove);
};

export default engine;
