import Link from '@docusaurus/Link';
import React from 'react';
import { getApiAddress, getStaticAddress } from '../../get-address';

export function StaticLink({ path, children }: { path: string, children: React.ReactNode }) {
    return <Link className="button button--primary" to={getStaticAddress(path)}> {children} </Link>
}

export function ApiLink({ version, children }: { version: string, children?: React.ReactNode }) {
    return <Link to={getApiAddress(version)}>{children ?? version}</Link>
}

function getSortedVersionArray(versions: string) {
    const parsePart = p => {
        if (p === "x" || p === "*") return Infinity;
        return Number(p);
    }

    return versions
        .split(";")
        .map(v => v.trim())
        .sort((a, b) => {
            const pa = a.split(".").map(parsePart);
            const pb = b.split(".").map(parsePart);

            const len = Math.max(pa.length, pb.length);

            for (let i = 0; i < len; i++) {
                const da = pa[i] ?? 0;
                const db = pb[i] ?? 0;

                if (da !== db) return db - da; // descending
            }
            return 0;
        });
}

export function ApiLinkList({ versions }: { versions: string, children?: React.ReactNode }) {
    const varr = getSortedVersionArray(versions);
    return <>
        <ul>
            {varr.map((v, i) => <li><ApiLink version={v} />{i === 0 ? " (latest)" : ""}</li>)}
        </ul>
    </>;
}
