import * as React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { CodeEntry, getCodeEntries } from "./code-entry";
import BrowserOnly from "@docusaurus/BrowserOnly";

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

function SingleLiveExample(props: { entry: CodeEntry, onEdit?: (newCode: string) => void }) {
    const [entryCode, setEntryCode] = React.useState(props.entry.code);

    return <BrowserOnly>
        {() => {
            const [modules, setModules] = React.useState<Awaited<ReturnType<typeof loadWebMusicScore7>> | null>(null);

            React.useEffect(() => {
                loadWebMusicScore7().then(modules => {
                    setModules(modules);
                });
            }, []);

            if (!modules) {
                return <div>Loading...</div>;
            }

            const { Core, Audio, ReactUI, Score, Theory, Pieces } = modules;

            const onEdit = (newCode: string) => {
                if (props.onEdit) props.onEdit(newCode);
                setEntryCode(newCode);
                Audio.stop();
            };

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
