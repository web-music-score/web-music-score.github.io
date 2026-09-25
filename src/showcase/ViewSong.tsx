import BrowserOnly from "@docusaurus/BrowserOnly";

import * as Core from "web-music-score-v7/core";
import * as Audio from "web-music-score-v7/audio";
import * as ReactUI from "web-music-score-v7/react-ui";
import * as Score from "web-music-score-v7/score";
import * as Pieces from "web-music-score-v7/pieces";

export default function ViewSong(props: { songName: string }) {

    return <BrowserOnly>
        {() => {
            let doc: Score.MDocument;

            switch (props.songName) {
                case "AndanteByDiabelli":
                    doc = Pieces.createAndanteByDiabelli();
                    break;
                case "CanonInD":
                    doc = Pieces.createCanonInD();
                    break;
                case "FrereJacques":
                    doc = Pieces.createFrereJacques();
                    break;
                case "Greensleeves":
                    doc = Pieces.createGreensleeves();
                    break;
                default:
                    doc = new Score.DocumentBuilder().getDocument();
                    break;
            }

            Audio.setDefaultInstrument(0); // Play with "Acoustic Grand Piano"

            return <>
                <ReactUI.WmsControls doc={doc} playPauseStop />
                <br />
                <ReactUI.WmsView doc={doc} />
                <br />
                <p>ℹ️ Runs on <code>{Core.getLibInfo()}</code>.</p>
            </>
        }}
    </BrowserOnly>;
}
