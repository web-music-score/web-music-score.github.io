const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setTempo(120)
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "ppp")
        .addNote(0, "E4", "4n").addAnnotation("dynamics", "cresc.").addExtension()
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")

        .addMeasure()
        .addNote(0, "C4", "4n")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("tempo", "accel.").addExtension()
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")

        .addMeasure()
        .addNote(0, "C4", "4n")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("tempo", "a tempo")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("tempo", "accel.").addExtension(ext => ext.notes("2n"))
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;