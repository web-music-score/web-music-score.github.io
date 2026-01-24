const code = `
function ExampleCode() {
    React.useEffect(() => {
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setTimeSignature("3/4")
            .addNote(0, ["C4", "E4", "G4"], "4n")
            .addMeasure()
            .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
            .getDocument();

        const paint = new Score.Paint();
        paint.setColor("background", "#eee")

        const view = new Score.WmsView();
        
        const canvas = document.getElementById("canvasId");

        view.setCanvas(canvas);
        view.setDocument(doc);
        view.setPaint(paint);

        view.draw();
    }, []);

    return (
        <div id="divId">
            <canvas id="canvasId"></canvas>
        </div>
    );
}`;

export default code;
