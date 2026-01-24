---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-navigation";
import Hint from "@site/src/Components/Hint";

# Add Navigation

Add navigation element to measure.

```ts
builder.addNavigation("D.C. al Fine"); // Add "D.C. al Fine"
builder.addNavigation("D.C. al Coda"); // Add "D.C. al Coda"
builder.addNavigation("D.S. al Fine"); // Add "D.S. al Fine"
builder.addNavigation("D.S. al Coda"); // Add "D.S. al Coda"
builder.addNavigation("Coda");         // Add "Coda"
builder.addNavigation("toCoda");       // Ass "toCoda"
builder.addNavigation("Segno");        // Add "Segno" symbol
builder.addNavigation("Fine");         // Add "Fine"
builder.addNavigation("startRepeat");  // Add repeat sections start position
builder.addNavigation("endRepeat", 3); // Add repeat sections end position (play 3 times)
builder.addNavigation("ending", 1, 2); // Add ending (played on 1st and 2nd run)
```

---

<Hint>You can as well use `Score.Navigation` enum values.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
