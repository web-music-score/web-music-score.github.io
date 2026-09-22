const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setScoreConfiguration([
            { type: "staff", clef: "G", name: "staff1" },
            { type: "staff", clef: "G", name: "staff2" }
        ])

        .addStaffGroup("grp1", 0, "auto")
        .addStaffGroup("grp2", "staff1", "above")
        .addStaffGroup("grp3", 1, "below")
        .addStaffGroup("grp4", "staff2", "both")

        .addNote(0, "C4", "4n").addAnnotationTo("grp1", "fermata")
        .addNote(0, "E4", "4n").addAnnotationTo("grp2", "fermata")
        .addNote(0, "G4", "4n").addAnnotationTo("grp3", "fermata")
        .addNote(0, "C4", "4n").addAnnotationTo("grp4", "fermata")

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;