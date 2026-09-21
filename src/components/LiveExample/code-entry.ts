export type CodeEntry = { name: string, code: string };

export function getCodeEntries(codes: (string | CodeEntry) | (string | CodeEntry)[]): CodeEntry[] {
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
