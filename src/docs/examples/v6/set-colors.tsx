const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder({ color: "red", background: "lightyellow" })
        .setScoreConfiguration("guitarCombined")
        .setKeySignature("C Major")
        .addNote(0, "C4", "4n", { string: 4, color: "blue" }).addAnnotation("staccato", { color: "green" })
        .addNote(0, "E4", "4n", { string: 3, color: "blue" }).addAnnotation("staccato", { color: "green" })
        .addNote(0, "G4", "4n", { string: 2, color: "blue" }).addAnnotation("staccato", { color: "green" })
        .addNote(0, "C5", "4n", { string: 1, color: "blue" }).addAnnotation("staccato", { color: "green" })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;
