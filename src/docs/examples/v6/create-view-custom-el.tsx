const code = `
function ExampleCode() {
    // This example requires use of useEffect() because of React environment.
    // In real world, the HTML elements need to be declared before using them in JavaScript.
    React.useEffect(() => {
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setTimeSignature("3/4")
            .addNote(0, ["C4", "E4", "G4"], "4n")
            .addMeasure()
            .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
            .getDocument();

        const paint = new Score.Paint();
        paint.setColor("background", "#ffd")

        doc.bindElement("viewId");
        paint.bindElement("viewId");
    }, []);

    return <wms-view id="viewId" zoom="1.2"></wms-view>;
}`;

export default code;
