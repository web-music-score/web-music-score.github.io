const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setTempo(120)
        .addNote(0, "C4", "4n").addAnnotation("p")
        .addNote(0, "E4", "4n").addSpan("<", span => span.infinity())
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addSpan("fff")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;