import { input } from '@inquirer/prompts';
import { showBoard, defaultBoard } from './board.js';
import { showBoard, board } from './board.js';

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
    let validationStatus, firstSquare, secondSquare;

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

    const secondSquareValidation = (answer) => {
        if (firstSquare === answer) {
            console.log('Piece to move cannot be current pawn piece');
            validationStatus = false;
        }
    };

    const getFirstSquare = async () => {
        // User pick square with piece on board
        do {
            firstSquare = await input({
                message: 'Select piece',
            });

            defaultValidation(firstSquare);
        } while (validationStatus === false);

        // then get value of square position on board
        return await getValueOfPiece(firstSquare);
    };

    // User pick square to mvoe piece to this square
    const getSecondSquare = async () => {
        do {
            secondSquare = await input({
                message: 'Move to',
            });
            defaultValidation(secondSquare);
            secondSquareValidation(secondSquare);
        } while (validationStatus === false);

        return await getValueOfPiece(secondSquare);
    };

    // Square value is postion of square on board
    // Example a1 = 0 -> a = 0 (first column) + 1 (first row)
    const getValueOfPiece = async (piece) => {
        let pickedSquareValue = 0;

        // Letters are multiples of 8 (because we got 8 columns)
        // We get value after add value of letter to digit (row) set by user
        piece.split('').forEach((el) => {
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

    await movePawn(pickedPiece, pickedMove);
    await getValueOfPiece(pickedPiece);
    await getFirstSquare();
    await getSecondSquare();
};

export default engine;
