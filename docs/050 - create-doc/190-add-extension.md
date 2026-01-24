---
sidebar_position: 190
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-extension";

# Add Extension

Adds extension line to previously added element (label, annotation).

```ts
builder.addExtension(ext => {
    // Add extension length by noteLength * noteCount (1 if omitted).
    ext.notes(noteLength, noteCount?);
    // Add extension length by number of measures.
    ext.measures(measureCount);
    // Set as extension long as possible.
    ext.infinity();
    // Hide extension line.
    ext.hide();
});
```

## Examples

Add extension line, length is 2 whole notes:

```ts
builder.addExtension(ext => ext.notes("1n", 2));
```

Add extension line, length is 3 measures, hidden:

```ts
builder.addExtension(ext => ext.measures(3).hide());
```

Add extension line, length is 1 measure + 1 eigth note:

```ts
builder.addExtension(ext => ext.measures(1).notes("8n"));
```

Add extension line, length is as long as possible:

```ts
builder.addExtension(ext => ext.infinity());
builder.addExtension();
```

## Live Example

<LiveExample code={ExampleCode} />
