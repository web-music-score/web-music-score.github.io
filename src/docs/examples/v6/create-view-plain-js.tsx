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

        const view = new Score.WmsView();
        
        const canvas = document.getElementById("canvasId");

        view.setCanvas(canvas);
        view.setDocument(doc);
        view.setZoom(1.2);

        view.draw();
    }, []);

    return (
        <div id="divId">
            <canvas id="canvasId"></canvas>
        </div>
    );
}`;

export default code;
