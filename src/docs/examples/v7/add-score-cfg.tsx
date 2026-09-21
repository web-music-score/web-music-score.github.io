const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        
        // Try presets "treble", "bass", "grand", "guitarTreble", "guitarTab" and "guitarCombined"
        .setScoreConfiguration("treble")
        .addMeasure()
        .addNote(0, "C4", "4n", { string: 3 })
        .addNote(0, ["C4", "C4"], "8n", { string: 3 })
        .addNote(0, "C4", "4n", { string: 3 })
        .addNote(0, ["C4", "C4"], "8n", { string: 3 })

        // More options using objects
        .setScoreConfiguration([
            { type: "staff", clef: "G", isOctaveDown: true, instrument: "Guitar", voiceId: [0] },
            { type: "tab", tuning: "Drop D", instrument: "Guitar", voiceId: [0] }
        ])
        .addMeasure()
        .addNote(0, "C4", "4n", { string: 3 })
        .addNote(0, ["C4", "C4"], "8n", { string: 3 })
        .addNote(0, "C4", "4n", { string: 3 })
        .addNote(0, ["C4", "C4"], "8n", { string: 3 })
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;