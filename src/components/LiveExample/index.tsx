import * as React from "react";
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

type CodeEntry = { name: string, code: string };

function getCodeEntries(codes: (string | CodeEntry) | (string | CodeEntry)[]): CodeEntry[] {
    return (Array.isArray(codes) ? codes : [codes]).map((entry, entryId, entryArr) => {
        if (typeof entry === "string") {
            const name = entryArr.length > 1 ? ("Example " + (entryId + 1)) : "";
            const code = name === "" ? entry.trim() : `// ${name}\n${entry.trim()}`;
            return { name, code };
        }
        else {
            const name = entry.name.trim();
            const code = name === "" ? entry.code.trim() : `// ${name}\n${entry.code.trim()}`;
            return { name, code };
        }
    });
}

function SingleLiveExample(props: { entry: CodeEntry, onEdit?: (newCode: string) => void }) {
    const [entryCode, setEntryCode] = React.useState(props.entry.code);

    const onEdit = (newCode: string) => {
        if (props.onEdit) props.onEdit(newCode);
        setEntryCode(newCode);
        Audio.stop();
    };

    return <BrowserOnly>
        {() => {
            return <>
                <LiveProvider language="jsx" code={entryCode} scope={{ Core, Audio, AudioCG, AudioSynth, Score, Theory, Pieces, ReactUI, React }} >
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

export function LiveExample(props: { code: (string | CodeEntry) | (string | CodeEntry)[] }) {
    const [exampleId, setExampleId] = React.useState(0);
    const entries = getCodeEntries(props.code);
    const entry = entries[exampleId];

    return <>
        {entries.length > 1
            ? <>
                <select
                    value={exampleId}
                    onChange={e => setExampleId(Number(e.target.value))}
                    className="select"
                >
                    {entries.map((entry, id) => (
                        <option key={id} value={id}>
                            {entry.name}
                        </option>
                    ))}
                </select>
                <br /><br />
            </>
            : null
        }
        <SingleLiveExample
            key={exampleId}
            entry={entry}
        />
    </>;
}
