const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTempo(80)
        .addNote(0, "C4", "4n").addConnective("tie")
        .addNote(0, "C4", "4n")
        .addNote(0, "G4", "8n").addConnective("slur")
        .addNote(0, "B4", "8n")
        .addNote(0, "C4", "4n")

        .addMeasure()
        .addNote(0, "C4", "2n").addConnective("slide")
        .addNote(0, "E4", "2n")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;