const code = `
function ExampleCode() {
    // Add classical guitar
    const { ClassicalGuitar } = AudioCG;
    Audio.addInstrument(ClassicalGuitar);
    
    // Audio.useInstrument("Classical Guitar");
    Audio.useInstrument("Synthesizer");

    const doc = new Score.DocumentBuilder()
        .setKeySignature("C Major")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
        .getDocument();

    return <div>
        <p>Available instruments are: {Audio.getInstrumentList().map(s => '"' + s + '"').join(", ")}</p>
        <p>Current instrument is: "{Audio.getCurrentInstrument()}"</p>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;
