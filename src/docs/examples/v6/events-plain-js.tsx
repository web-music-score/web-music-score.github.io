const code = `
function ExampleCode() {
    React.useEffect(() => {
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setKeySignature("C Major")
            .addNote(0, ["C4", "E4", "G4", "C5"], "4n")
            .addMeasure()
            .addChord(0, ["C4", "E4", "G4", "C5"], "1n", { arpeggio: "up" })
            .getDocument();

        function onScoreEvent(event) {
            if (Score.ScoreEvent.is(event)) {
                console.log("ScoreEvent type = '" + event.type + "'");
            }

            if (Score.ScoreStaffEvent.is(event)) {
                event.view.hilightStaffPos(event.type === "leave" ? undefined : event);

                if(event.type === "click")
                    Audio.playNote(event.noteName);
            }

            if (Score.ScoreObjectEvent.is(event)) {
                event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);
            }
        }

        const view = new Score.WmsView();
        
        view.setCanvas("canvasId");
        view.setDocument(doc);
        view.setScoreEventListener(onScoreEvent);

        view.draw();
    }, []);

    return <canvas id="canvasId"></canvas>;
}`;

export default code;
