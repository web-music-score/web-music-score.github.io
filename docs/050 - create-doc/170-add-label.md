---
sidebar_position: 170
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-label";
import Hint from "@site/src/Components/Hint";

# Add Label

Add text label that will be anchored to previously added note or rest.

```ts
// Add note/pitch label.
builder.addNote(0, "C#5", "1n").addLabel("note", "C#5");

// Add chord label.
builder.addChord(0, ["A3", "C4", "E4"], "1n").addLabel("chord", "Am");
```

## Live Example

<LiveExample code={ExampleCode} />
