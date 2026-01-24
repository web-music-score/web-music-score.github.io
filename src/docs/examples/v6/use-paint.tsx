const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("guitarCombined")
        .setKeySignature("C Major")
        .addNote(0, ["C4", "E4", "G4", "C5"], "4n", { string: [ 4, 3, 2, 1] })
        .getDocument();

    const paint = new Score.Paint();

    paint.setColor("background", "lime")

    paint.setColor("staff", "blue");
    paint.setColor("staff.signature.clef", "red");

    paint.setColor("tab", "yellow");
    paint.setColor("tab.tuning", "red");

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} paint={paint} />
    </div>;
}`;

export default code;
