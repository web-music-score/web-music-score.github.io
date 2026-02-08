---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

## Planned for 6.4.x



## 6.3.x and Earlier

Add annotation text. It will be anchored to previously added symbol (note, rest).

```ts
// These are the supported dynamics annotations
builder.addAnnotation("dynamics", "fff");
builder.addAnnotation("dynamics", "ff");
builder.addAnnotation("dynamics", "f");
builder.addAnnotation("dynamics", "mf");
builder.addAnnotation("dynamics", "m");
builder.addAnnotation("dynamics", "mp");
builder.addAnnotation("dynamics", "p");
builder.addAnnotation("dynamics", "pp");
builder.addAnnotation("dynamics", "ppp");
builder.addAnnotation("dynamics", "cresc.");
builder.addAnnotation("dynamics", "decresc.");
builder.addAnnotation("dynamics", "dim.");

// These are the supported tempo annotations
builder.addAnnotation("tempo", "accel.");
builder.addAnnotation("tempo", "rit.");
builder.addAnnotation("tempo", "a tempo");

// First argument annotation group is optional for supported annotation kinds.
builder.addAnnotation("ff");      // Detects "dynamics"
builder.addAnnotation("accel.");  // Detects "tempo"

// With annotation group you can add any annotation text.
builder.addAnnotation("dynamics", "play loud");
builder.addAnnotation("tempo", "play fast");
```

<Hint>List of supported annotation kinds in version 6.3.x and earlier is minimal.</Hint>

### Live Example

<LiveExample code={ExampleCode} />
