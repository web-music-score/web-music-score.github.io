const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addNote(0, "C4", "4n").addLabel("note", "C4")
        .addNote(0, "E4", "4n").addLabel("note", "E4")
        .addNote(0, "G4", "4n").addLabel("note", "G4")
        .addNote(0, "C4", "4n").addLabel("note", "C4")

        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "4n").addLabel("chord", "C")
        .addChord(0, ["G4", "B4", "D5"], "4n").addLabel("chord", "G")
        .addChord(0, ["A4", "C5", "E5"], "4n").addLabel("chord", "Am")
        .addChord(0, ["F4", "A4", "C5"], "4n").addLabel("chord", "F")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;