const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setTimeSignature("3/4")
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
        .getDocument();

    return <div>
        <p>Click below to play/stop.</p>
        <ReactUI.WmsControls doc={doc} singlePlayStop />
    </div>;
}`;

export default code;
