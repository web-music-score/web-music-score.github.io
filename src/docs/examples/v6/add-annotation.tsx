const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTempo(80)
        .addNote(0, "C4", "4n").addAnnotation("fff")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n").addAnnotation("ppp")
        .addNote(0, "C4", "4n")
        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("cresc.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("fff")
        .endRow()

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("accel.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("rit.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("a tempo")
        
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;