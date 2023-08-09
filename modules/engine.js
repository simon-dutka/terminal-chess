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
