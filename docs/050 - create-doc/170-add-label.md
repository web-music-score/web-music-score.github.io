---
sidebar_position: 170
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-label";
import Hint from "@site/src/Components/Hint";

# Add Label

Add text label.
It will be anchored to previously added symbol (note, rest).

There are two types of labels currently.

1. `"chord"`

Add chord label, positioned above staff by default.

```ts
builder
    .addChord(0, ["A3", "C4", "E4"], "2n")
    .addLabel("chord", "Am");
```

2. `"note"`

Add note label, positioned below staff by default.

```ts
builder
    .addChord(0, "C#5", "2n")
    .addLabel("note", "C#5");
```

---

<Hint>You can as well use `Score.Label` enum values.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
