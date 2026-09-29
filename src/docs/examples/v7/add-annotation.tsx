const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTempo(120)
        .addNote(0, "C4", "4n").addAnnotation("ppp")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")

        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("fff")
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