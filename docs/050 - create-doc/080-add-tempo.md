---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-tempo";

# Add Tempo

Set tempo from the start of current measure. Tempo uunit is beats per minute.

```ts
builder.setTempo(100);
```

You can also set tempo with custom beat length.

```ts
builder.setTempo(100, "4n"); // Use beat length of quarter note.
builder.setTempo(80, "4.."); // Use beat length of double dotted quarter note.
```

## Live Example

<LiveExample code={ExampleCode} />
