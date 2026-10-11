const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setTimeSignature("3/4")
        .addNote(0, "C4", "4.", { stem: "down" })
        .addNote(0, "E4", "4.", { stem: "up" })
        .addMeasure()
        .addNote(0, ["G4", "B4", "D5"], "4n", { stem: "auto", diamond: true })
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: "down" })
        .endRow()

        .setScoreConfiguration("guitarCombined")
        .addMeasure()
        .addNote(0, "E2", "4n", { string: 6 })
        .addNote(0, "E3", "4n", { string: 4 })
        .addNote(0, "E4", "4n", { string: 1 })
        .addMeasure()
        .addNote(0, ["G3", "B3", "D4"], "4n", { string: [3, 2, 2] })
        .addMeasure()
        .addChord(0, ["C3", "E3", "G3"], "2.", { string: [5, 4, 3] })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;