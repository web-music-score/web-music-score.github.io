const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setTimeSignature("2/4")
        .addMeasure()
        .setTempo(80)
        .addMeasure()
        .setTempo(120, "2n")
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;