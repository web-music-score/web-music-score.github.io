import BrowserOnly from "@docusaurus/BrowserOnly";
import { getLibInfo } from "web-music-score-v7/core";
import { setDefaultInstrument } from "web-music-score-v7/audio";
import { WmsView, WmsControls } from "web-music-score-v7/react-ui";
import { MDocument } from "web-music-score-v7/score";

export default function ViewSong({ doc }: { doc: MDocument }) {
    
    // Play with "Acoustic Grand Piano"
    setDefaultInstrument(0);

    return <BrowserOnly>
        {() => {
            return <>
                <WmsControls doc={doc} playPauseStop />
                <br />
                <WmsView doc={doc} />
                <br />
                <p>ℹ️ Runs on <code>{getLibInfo()}</code>.</p>
            </>
        }}
    </BrowserOnly>;
}
