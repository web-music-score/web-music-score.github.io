const code = `
function ExampleCode() {
    Audio.setDefaultInstrument("Banjo");

    const doc = new Score.DocumentBuilder()
        .setKeySignature("C Major")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
        .addMeasure()
        .setInstrument(0, "Rock Organ")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
        .getDocument();

    doc.loadInstruments();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
        <br />
        <p><b>Default instrument is:</b> "{Audio.getCurrentInstrument()}"</p>
        <p><b>Available instruments:</b> {Audio.getInstrumentList().map(s => '"' + s + '"').join(", ")}</p>
    </div>;
}`;

export default code;
