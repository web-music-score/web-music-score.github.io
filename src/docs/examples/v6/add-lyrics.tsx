const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addNote(0, "C4", "4n").addLyrics(1, "La", "4n")
        .addNote(0, "D4", "4n").addLyrics(1, "La", "4n", { hyphen: "-" })
        .addNote(0, "E4", "4n").addLyrics(1, "La", "4n", { hyphen: "---" })
        .addNote(0, "C4", "4n").addLyrics(1, "Laa", "4n")
        .addMeasure()
        .addNote(0, "C4", "4n").addLyrics(1, "Left", "4n", { align: "left" })
        .addNote(0, "D4", "4n").addLyrics(1, "Center", "4n", { align: "center" })
        .addNote(0, "E4", "4n").addLyrics(1, "Right", "4n", { align: "right" })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;