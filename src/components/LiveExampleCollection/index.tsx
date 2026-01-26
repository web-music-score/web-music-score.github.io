import * as React from "react";
import { LiveExample } from "../LiveExample";

export function LiveExampleCollection({ codes }: { codes: { name: string, code: string }[] }) {
    const [exampleId, setExampleId] = React.useState(0);

    const code = `// ${codes[exampleId].name}\n${codes[exampleId].code.trim()}`;

    return <>
        <select
            value={exampleId}
            onChange={e => setExampleId(Number(e.target.value))}
            className="select"
        >
            {codes.map((e, id) => (
                <option key={id} value={id}>
                    {e.name}
                </option>
            ))}
        </select>
        <br /><br />
        <LiveExample
            key={exampleId}
            code={code}
        />
    </>;
}
