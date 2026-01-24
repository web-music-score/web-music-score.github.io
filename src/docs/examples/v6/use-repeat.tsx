const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .repeat(2, b1 => {
            b1.repeat(3, b2 => {
            b1.addMeasure();
                b2.addNote(0, "C4", "8n");
                b2.addNote(0, "E4", "8n");
                b2.addRest(0, "4n");
            })
            b1.endRow();
        })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;
