import BrowserOnly from "@docusaurus/BrowserOnly";
import { getLibInfo } from "web-music-score-v6/core";
import { WmsView, WmsControls } from "web-music-score-v6/react-ui";
import { MDocument } from "web-music-score-v6/score";

export default function ViewSong({ doc }: { doc: MDocument }) {
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
