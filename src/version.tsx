import { getLibVersion } from 'web-music-score-v6/core';

export function getWmsVersion() {
    return getLibVersion();
}

export function WmsVersion(props: { }) {
    return <code>web-music-score@{getWmsVersion()}</code>;
}
