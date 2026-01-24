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

        const player = doc.getDefaultPlayer();
        const controls = new Score.WmsControls();

        controls.setPlayPauseStop("playButtonId", "pauseButtonId", "stopButtonId");
        controls.setPlayer(player);
    }, []);

    return (
        <div id="divId">
            <div className="wms-button-group">
                <button id="playButtonId" className="wms-button"></button>
                <button id="pauseButtonId" className="wms-button"></button>
                <button id="stopButtonId" className="wms-button"></button>
            </div>
        </div>
    );
}
`;

export default code;
