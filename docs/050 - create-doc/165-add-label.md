---
sidebar_position: 165
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-label";
import Hint from "@site/src/Components/Hint";

# Add Label

## Planned for 6.4.x

ℹ️ Available currently in 6.4.0-pre-releaes.

Label will be part of annotation. See [Add Annotation](./add-annotation).

## 6.3.x and Earlier

Labels have their own `addLabel` function.

Label text will be anchored to previously added note or rest.

```ts
// Add note/pitch label.
builder.addNote(0, "C#5", "1n").addLabel("note", "C#5");

// Add chord label.
builder.addChord(0, ["A3", "C4", "E4"], "1n").addLabel("chord", "Am");
```

## Live Example

<LiveExample code={ExampleCode} />
