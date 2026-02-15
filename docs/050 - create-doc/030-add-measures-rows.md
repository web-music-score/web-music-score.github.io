---
sidebar_position: 30
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-measures-rows";

# Add Measures And Rows

## Measures

### Add Measure

```ts
// Add new measure.
builder.addMeasure();
```

### Show Measure Numbers

By default measure number is shown on first measure of every row after first row.
This can be changed by `DocumentOptions` and `MeasureOptions`.

```ts
// Show all measure numbers
new DocumentBuilder({ showMeasureNumbers: true });

// Hide all measure numbers
new DocumentBuilder({ showMeasureNumbers: false });

// Show measure number on single measure
builder.addMeasure({ showNumber: true });

// Hide measure number on single measure
builder.addMeasure({ showNumber: false });
```

## Rows

### Add Row

```ts
// Mark end of row.
builder.endRow();
```

This adds a row change request. New row will be added and started together with next measure.

### Automatic Row Change

You can set automatic row change by setting number of measures per row.

```ts
// Set 4 measures per row.
builder.setMesuresPerRow(4);

// Turn of automatic row change with a big value that is never reached.
builder.setMesuresPerRow(Infinity);
```

## Live Example

<LiveExample code={ExampleCode} />
