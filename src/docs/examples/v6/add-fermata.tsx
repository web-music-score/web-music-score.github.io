const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .addNote(0, "C4", "4n").addFermata()
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n").addFermata("atNote")
        .addNote(0, "C4", "4n")
        .addFermata("atMeasureEnd")
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;