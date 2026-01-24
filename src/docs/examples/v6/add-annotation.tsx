const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTempo(80)
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "ppp")
        .addNote(0, "E4", "4n").addAnnotation("dynamics", "cresc.")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("dynamics", "fff")
        
        .addMeasure()
        .addNote(0, "C4", "4n").addAnnotation("tempo", "accel.")
        .addNote(0, "E4", "4n")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n").addAnnotation("tempo", "a tempo")
        
        .addMeasure()
        .addNote(0, "C4", "4n")
        .addNote(0, "E4", "4n").addAnnotation("fermata")
        .addNote(0, "G4", "4n")
        .addNote(0, "C4", "4n")
        .addAnnotation("measureEndFermata")
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;