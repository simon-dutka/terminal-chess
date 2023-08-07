// Pawn, Knight, Bishoop, Rook, Queen
let piecesNames = ['p', 'n', 'b', 'r', 'q'];
let piecesValues = [1, 3, 3, 5, 9];
let pieces = [];

let piece = {
    name: 'King',
    pieceValue: '0',
};

for (let i = 0; i < 4; i++) {
    let el = Object.create(piece);
    el.name = piecesNames[i];
    el.value = piecesValues[i];

    pieces.push(el);
}
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
