const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setHeader("Silence", "Tim", "Tom")
        .repeat(4, b => {
            b.addMeasure();
            b.addNote(0, "C5", "8n");
            b.fillWithRests();
        })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;