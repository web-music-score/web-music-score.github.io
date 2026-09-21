const code = `
function ExampleCode() {
    const doc = new Score.DocumentBuilder({ showMeasureNumbers: true })
        .setMeasuresPerRow(3)
        .addMeasure()    // Measure 1
        .fillWithRests()
        .addMeasure({ showNumber: false }) // Measure 2
        .fillWithRests()
        .addMeasure()    // Measure 3
        .fillWithRests()
        .addMeasure()    // Measure 4 (auto new row)
        .fillWithRests()
        .addMeasure()    // Measure 5
        .fillWithRests()
        .endRow()
        .addMeasure()    // Measure 6 (requested new row)
        .fillWithRests()
        .getDocument();

    return <div>
        <ReactUI.WmsControls doc={doc} playStopPause />
        <br />
        <ReactUI.WmsView doc={doc} />
    </div>;
}`;

export default code;