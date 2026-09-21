const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addNote(0, ["C4", "D4", "E4"], "8t")
        .addTuplet(0, { parts: 3, inTimeOf: 2 }, notes => {
            notes.addNote("C4", "8n");
            notes.addNote("D4", "8n");
            notes.addNote("E4", "8n");
        })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;