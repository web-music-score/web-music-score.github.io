---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-tempo";

# Add Tempo

Set tempo from the start of current measure.

```ts
// Set tempo 100 bpm (betas per minute).
builder.setTempo(100);
```

You can also set tempo together with custom beat length.

```ts
// Use beat length of quarter note.
builder.setTempo(100, "4n");

// Use beat length of double dotted quarter note.
builder.setTempo(100, "4..");
```

## Live Example

<LiveExample code={ExampleCode} />
