const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTimeSignature("4/4")
        .addRest(0, "1n")
        .addMeasure()
        .addRest(1, "2n")
        .addRest(1, "4n")
        .addRest(1, "8n")
        .addRest(1, "16n", { staffPos: "G4" })
        .addRest(1, "16n", { staffPos: "C5" })
        .addMeasure()
        .addRest(2, "32n")
        .fillWithRests()
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;