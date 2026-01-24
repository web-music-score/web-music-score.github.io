---
sidebar_position: 250
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/error-handling";

# Error Handling

This library throws `MusicError` exception.

```ts
try {
    // Do your music stuff here.
}
catch (e) {
    if(e instanceof Core.MusicError) {
        // There was a music error.
    }
}
```

## Live Example

<LiveExample code={ExampleCode} />
