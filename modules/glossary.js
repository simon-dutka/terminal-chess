const showGlossary = () => {
    let glossary = `Pieces names:
        K - King
        Q - Queen
        N - Knight
        B - Bishop
        R - Rook
        p - Pawn
        x - Empty square
`;
    process.stdout.write(glossary);
};

export default showGlossary;
