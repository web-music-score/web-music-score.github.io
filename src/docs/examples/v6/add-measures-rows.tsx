const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder()
        .setMeasuresPerRow(3)
        .addMeasure({ showNumber: true })    // Measure 1
        .fillWithRests()
        .addMeasure({ showNumber: true })    // Measure 2
        .fillWithRests()
        .addMeasure({ showNumber: true })    // Measure 3
        .fillWithRests()
        .addMeasure({ showNumber: true })    // Measure 4 (auto new row)
        .fillWithRests()
        .addMeasure({ showNumber: true })    // Measure 5
        .fillWithRests()
        .endRow()
        .addMeasure({ showNumber: true })    // Measure 6 (requested new row)
        .fillWithRests()
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;