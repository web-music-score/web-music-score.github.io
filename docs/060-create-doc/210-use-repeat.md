---
sidebar_position: 210
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-repeat";

# Use Repeat

You can repeat builder actions given number of times using `repeat` function.

```ts
builder.repeat(2, b => {
    b.addNote(0, "C4", "8n");
    b.addNote(0, "E4", "8n");
    b.addRest(0, "4n");
});
```

## Live Example

<LiveExample code={ExampleCode} />
