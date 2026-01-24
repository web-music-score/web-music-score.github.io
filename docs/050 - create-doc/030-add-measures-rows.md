---
sidebar_position: 30
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-measures-rows";

# Add Measures And Rows

## Add New Measure

```ts
builder.addMeasure();
```

## Add New Row

Initiate row change.

```ts
builder.endRow();
```

This does not directly add new row but instead initiates a row change.
The new row will be created when adding next measure.

## Automatic Measures Per Row

You can set automatic row change by setting number of measures per row.
In next example set 4 measures per row.

```ts
builder.setMesuresPerRow(4);
```

To turn of automatic row change set very big value.

```ts
builder.setMesuresPerRow(Infinity);
```

## Live Example

<LiveExample code={ExampleCode} />
