const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .setKeySignature("D", "Major")
        .addMeasure()
        .setKeySignature("C Dorian")
        .addMeasure()
        .setKeySignature("F Natural Minor")
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;