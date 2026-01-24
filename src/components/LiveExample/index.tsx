import { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import * as Core from "web-music-score-v6/core";
import * as Audio from "web-music-score-v6/audio";
import * as AudioCG from "web-music-score-v6/audio-cg";
import * as AudioSynth from "web-music-score-v6/audio-synth";
import * as Score from "web-music-score-v6/score";
import * as Theory from "web-music-score-v6/theory";
import * as Pieces from "web-music-score-v6/pieces";
import * as ReactUI from "web-music-score-v6/react-ui";
import BrowserOnly from "@docusaurus/BrowserOnly";
import * as React from "react";

export function LiveExample(props: { code: string, onEdit?: (newCode: string) => void }) {
    const [code, setCode] = useState(props.code);

    const onEdit = (newCode: string) => {
        if (props.onEdit) props.onEdit(newCode);
        setCode(newCode);
        Audio.stop();
    };

    return <BrowserOnly>
        {() => {
            return <>
                <LiveProvider language="jsx" code={code.trim()} scope={{ Core, Audio, AudioCG, AudioSynth, Score, Theory, Pieces, ReactUI, React }} >
                    <LiveEditor onChange={onEdit} />
                    <LiveError />
                    <br />
                    <LivePreview />
                </LiveProvider>
                <br />
                <p>ℹ️ Runs on <code>{Core.getLibInfo()}</code>.</p>
            </>;
        }}
    </BrowserOnly>;
}
