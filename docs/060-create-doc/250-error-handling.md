---
sidebar_position: 250
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/error-handling";

# Error Handling

All errors are subclasses of `Core.MusicError`.

To set error handler for `DocumentBuilder`:

```ts
// Throw (default)
builder.setErrorHandler((e) => { throw e; });
// Log
builder.setErrorHandler((e) => { console.error("Doc build failed:", e); });
// Log and throw
builder.setErrorHandler((e) => { console.error("Doc build failed:", e); throw e; });
// Silent
builder.setErrorHandler((e) => { });
```

To catch errors:

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

## Live Example

<LiveExample code={ExampleCode} />
