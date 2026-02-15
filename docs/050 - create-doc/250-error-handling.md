---
sidebar_position: 250
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/error-handling";

# Error Handling

## Planned for 6.4.x

ℹ️ Available currently in 6.4.0-pre-release.

You can set error handler for documentation builder.

```ts
// throw (default)
builder.setErrorHandler((e) => { throw e; });
// log
builder.setErrorHandler((e) => { console.error("Doc build failed:", e); });
// log and throw
builder.setErrorHandler((e) => { console.error("Doc build failed:", e); throw e; });
// Silent
builder.setErrorHandler((e) => { });
```

There are separate error classes. They all derive from `Core.MusicError`.
- `Core.InvalidArgError`
- `Audio.AudioError`
- `Score.ScoreError`
- `Theory.KeySignatureError`
- `Theory.TimeSignatureError`
- `Theory.NoteError`
- `Theory.NoteDurationError`
- `Theory.ScaleError`

Catch errors.

```ts
try {
    // Do your music stuff here.
}
catch (e) {
    if(e instanceof Core.MusicError) {
        // Catch all errors.
    }
}
```

## 6.3.x and Earlier

Catch errors.

```ts
try {
    // Do your music stuff here.
}
catch (e) {
    if(e instanceof Core.MusicError) {
        // Catch all music errors.
    }
}
```

## Live Example

<LiveExample code={ExampleCode} />
