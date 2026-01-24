import clarity from "@microsoft/clarity";

export function initClarity(projectId: string) {
    try {
        // ❌ Skip during SSR
        if (typeof window === "undefined") return;

        // ❌ Skip localhost / dev
        const hostname = window.location.hostname;
        if (
            hostname === "localhost" ||
            hostname === "127.0.0.1" ||
            hostname.endsWith(".local")
        ) {
            return;
        }

        // ❌ Environment-based guard (extra safe)
        if (process.env.NODE_ENV !== "production") return;

        // ❌ Respect Do Not Track
        const dnt =
            navigator.doNotTrack === "1" ||
            // Safari / old IE variants
            (window as any).doNotTrack === "1" ||
            (navigator as any).msDoNotTrack === "1";

        if (dnt) return;

        // ✅ Init Clarity
        clarity.init(projectId);
    }
    catch (e) {
        console.error("initClarity() failed!");
        console.error(e);
    }
}
