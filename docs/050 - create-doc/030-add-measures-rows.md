---
sidebar_position: 30
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-measures-rows";

# Add Measures And Rows

## Add A New Measure

```ts
// Add new measure.
builder.addMeasure();
```

## Add A New Row

```ts
// Mark end of row.
builder.endRow();
```

This does not add a new row but requests a row change.
New row will be started by adding a measure.

## Automatic Row Change

You can set automatic row change by setting number of measures per row.

```ts
// Set 4 measures per row.
builder.setMesuresPerRow(4);

// Turn of automatic row change with a big value.
builder.setMesuresPerRow(Infinity);
```

## Live Example

<LiveExample code={ExampleCode} />
