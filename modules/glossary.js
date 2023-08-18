const showGlossary = () => {
    let glossary = `
Pieces names:
        K - King
        Q - Queen
        N - Knight
        B - Bishop
        R - Rook
        p - Pawn
        • - Empty square

How to play:
        1. Select piece wchich you want to move
        2. Select square you want to move selected pawn
`;
    process.stdout.write(glossary);
};

export default showGlossary;
