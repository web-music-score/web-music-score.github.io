const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTimeSignature("3/4")
        .addNote(0, "C4", "4.", { stem: "down" })
        .addNote(0, "E4", "4.", { stem: "up" })
        .addMeasure()
        .addNote(0, ["G4", "B4", "D5"], "4n", { stem: "auto" })
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "1n")
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;