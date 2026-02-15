const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder({ color: "red", background: "lightgreen" })
        .setScoreConfiguration("guitarCombined")
        .setKeySignature("C Major")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n", { string: [ 4, 3, 2, 1], color: "blue" })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;
