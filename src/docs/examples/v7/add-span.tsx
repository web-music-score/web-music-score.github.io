const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setTempo(120)
        .addNote(0, "C4", "4n").addSpan("cresc.", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addSpan("fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan(">", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addSpan("p")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan("accel.", span => span.infinity())
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addSpan("accel.", span => span.beats(4))
        .addNote(0, ["E4", "G4", "C4"], "4n")
        .addMeasure()
        .addNote(0, ["C4", "E4", "G4", "C4"], "4n")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;