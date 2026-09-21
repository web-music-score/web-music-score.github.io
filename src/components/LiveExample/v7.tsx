import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CodeEntry, getCodeEntries } from "./code-entry";
import BrowserOnly from "@docusaurus/BrowserOnly";

import * as Core from "web-music-score-v7/core";
import * as Audio from "web-music-score-v7/audio";
import * as Score from "web-music-score-v7/score";
import * as Theory from "web-music-score-v7/theory";
import * as Pieces from "web-music-score-v7/pieces";
import * as ReactUI from "web-music-score-v7/react-ui";

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
                <LiveProvider language="jsx" code={entryCode} scope={{ Core, Audio, Score, Theory, Pieces, ReactUI, React }} >
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
