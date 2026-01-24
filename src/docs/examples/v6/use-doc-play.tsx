const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setTimeSignature("3/4")
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
        .getDocument();

    doc.play();

    return <p>Should play on page load!</p>;
}`;

export default code;
