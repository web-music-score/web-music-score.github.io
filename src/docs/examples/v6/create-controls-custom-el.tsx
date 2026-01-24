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

        player.bindElement("controlsId");
    }, []);

    return <wms-controls id="controlsId"></wms-controls>;
}`;

export default code;
