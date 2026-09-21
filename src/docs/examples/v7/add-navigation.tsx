const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .addMeasure()
        .addNavigation("startRepeat")
        .addNote(0, "G4", "1n")
        
        .addMeasure()
        .addNote(0, "G4", "1n")
        .addNavigation("ending", 1, 2) // Enter current measure on first and second runs.
        .addNavigation("endRepeat") // Jump to "startRepeat"

        .addMeasure()
        .addNote(0, "G4", "1n")
        .addNavigation("ending", 3) // Enter current measure on third run.

        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;