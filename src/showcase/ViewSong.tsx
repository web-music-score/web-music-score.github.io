import BrowserOnly from "@docusaurus/BrowserOnly";
import { useEffect, useState } from "react";

import type { MDocument } from 'web-music-score-v7/score';

async function loadWebMusicScore7() {
    const [Core, Audio, ReactUI, Theory, Score, Pieces] = await Promise.all([
        import('web-music-score-v7/core'),
        import('web-music-score-v7/audio'),
        import('web-music-score-v7/react-ui'),
        import('web-music-score-v7/theory'),
        import('web-music-score-v7/score'),
        import('web-music-score-v7/pieces'),
    ]);

    return { Core, Audio, ReactUI, Theory, Score, Pieces };
}

export default function ViewSong(props: { songName: string }) {
    return <BrowserOnly>
        {() => {

            const [modules, setModules] = useState<Awaited<ReturnType<typeof loadWebMusicScore7>> | null>(null);

            useEffect(() => {
                loadWebMusicScore7().then(modules => {
                    modules.Audio.setDefaultInstrument(0); // Play with "Acoustic Grand Piano"
                    setModules(modules);
                });
            }, []);

            if (!modules) {
                return <div>Loading...</div>;
            }

            const { Core, ReactUI, Score, Pieces } = modules;

            let doc: MDocument;

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
