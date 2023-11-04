// Todo: Add helping letters and digits to board
//* Why it isn't here? Constructor getting this string and convert to array - help for changing positions
let defaultBoard = `
        R N B Q K B N R
        p p p p p p p p
        · · · · · · · ·
        · · · · · · · ·
        · · · · · · · ·
        · · · · · · · ·
        p p p p p p p p
        R N B Q K B N R
`;

let squaresStatus = {
    R: 'rook',
    N: 'knight',
    B: 'bishoop',
    Q: 'queen',
    K: 'king',
    p: 'pawn',
    '·': 'empty',
};

class boardInfo {
    constructor(board) {
        let boardPositions = board
            .replace(/[1-9]|[\s+]/g, '')
            .split('')
            .map((el) => [...el]);

        this.boardPositions = boardPositions.map(
            (piece) => squaresStatus[piece]
        );
    }
}

const showBoard = () => {
    process.stdout.write(defaultBoard);
};

let board = new boardInfo(defaultBoard);



export { board, showBoard };
