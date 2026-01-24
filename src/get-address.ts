export function getStaticAddress(path: string) {
    if (path.startsWith('/'))
        path = path.substring(1);

    return process.env.NODE_ENV === 'development'
        ? `http://localhost:3000/${path}`
        : `https://web-music-score.org/${path}`;
}

export function getApiAddress(version: string) {
    return getStaticAddress(`api/v${version}/index.html`);
}
