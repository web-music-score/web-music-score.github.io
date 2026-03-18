---
sidebar_position: 227
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/set-colors";

# Set Colors

It is currently possible to set colors of some score elements.

There is `"color"` property in
- `DocumentOptions` (since 6.4.0)
- `AnnotationOptions` (since 6.4.0)
- `NoteOptions`
- `RestOptions`

```ts
// Set document foreground and background color.
new DocumentBuilder({ color: "white", background: "black" });

// Set note color
builder.addNote(0, "C4", "2n", { color: "red" });

// Set rest color
builder.addRest(0, "2n", { color: "red" });

// Set annotation color
builder.addAnnotation("ppp", { color: "red" });
```

## Live Example

<LiveExample code={ExampleCode} />
