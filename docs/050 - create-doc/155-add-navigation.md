---
sidebar_position: 155
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-navigation";
import Hint from "@site/src/Components/Hint";

# Add Navigation

## Planned for 6.4.x

ℹ️ Available currently in 6.4.0-pre-release.

Navigation will be part of annotation. See [Add Annotation](./add-annotation).

Support for `addNavigation()` function will remain because navigation
is meaningful annotation kind.

## 6.3.x and Earlier

```ts
builder.addNavigation("D.C. al Fine"); // Add "D.C. al Fine"
builder.addNavigation("D.C. al Coda"); // Add "D.C. al Coda"
builder.addNavigation("D.S. al Fine"); // Add "D.S. al Fine"
builder.addNavigation("D.S. al Coda"); // Add "D.S. al Coda"
builder.addNavigation("Coda");         // Add "Coda"
builder.addNavigation("toCoda");       // Ass "toCoda"
builder.addNavigation("Segno");        // Add "Segno" symbol
builder.addNavigation("Fine");         // Add "Fine"
builder.addNavigation("startRepeat");  // Add start repeat at start of measure
builder.addNavigation("endRepeat", 3); // Add end repeat at end of measure, play 3 times
builder.addNavigation("ending", 1, 2); // Add ending, play on 1st and 2nd passes
```

## Live Example

<LiveExample code={ExampleCode} />
