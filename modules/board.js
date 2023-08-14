let board = `
    1   R N B Q K B N R
    2   p p p p p p p p
    3   · · · · · · · ·
    4   · · · · · · · ·
    5   · · · · · · · ·
    6   · · · · · · · ·
    7   p p p p p p p p
    8   R N B Q K B N R

        A B C D E F G H
`;

let squaresStatus = {
    R: 'Rook',
    N: 'Knight',
    B: 'Bishoop',
    Q: 'Queen',
    K: 'King',
    p: 'pawn',
    '·': 'Empty',
};

class boardInfo {
    constructor(board) {
        let boardPositions = board
            .replace(/[1-9]|[\s+]|[A-H]/g, '')
            .split('')
            .map((el) => [...el]);

        this.boardPositions = boardPositions.map(
            (piece) => squaresStatus[piece]
        );
    }
}

const showBoard = () => {
    process.stdout.write(board);
};

let defaultBoard = new boardInfo(board);

export { defaultBoard, showBoard };

