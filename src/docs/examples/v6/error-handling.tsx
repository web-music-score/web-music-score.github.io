const code = `
function ExampleCode() {
    try {
        const doc = new Score.DocumentBuilder()
            .setErrorHandler((e) => { console.error("Doc build failed:", e); throw e; })
            .addNote(0, "E4", "2n")
            .addNote(0, "E4", "2")  // Error!
            .getDocument();

        return <div>
            <ReactUI.WmsControls doc={doc} playStopPause />
            <br />
            <ReactUI.WmsView doc={doc} />
        </div>;
    }
    catch(e) {
        return <div>
            Caught error!<br />
            {e.toString()}
        </div>;
    }
}`;

export default code;
