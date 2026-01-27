const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setTimeSignature("3/4")
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
        .getDocument();

    const paint = new Score.Paint();
    paint.setColor("background", "#ffd")

    return <ReactUI.WmsView doc={doc} paint={paint} zoom="1.2"/>;
}`;

export default code;
