import { input } from '@inquirer/prompts';
import { showBoard, defaultBoard } from './board.js';

let squaresValues = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    a: 0,
    b: 8,
    c: 16,
    d: 24,
    e: 32,
    f: 40,
    g: 48,
    h: 56,
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

    const getValueOfPiece = async (pickedPiece) => {
        let pickedSquareValue = 0;

        pickedPiece.split('').forEach((el) => {
            console.log(squaresValues[el]);
            pickedSquareValue += squaresValues[el];
        });

        return pickedSquareValue;
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
    await getValueOfPiece(pickedPiece);
};

export default engine;
