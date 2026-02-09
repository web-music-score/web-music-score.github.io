---
sidebar_position: 70
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-time-signature";
import NewFeature from "@site/src/Components/NewFeature";

# Add Time Signature

Set time signature form the beginning of current measure.

This table contains supported time signatures and also their beam groupings.

| Time signature | Beam grouping                        |
|----------------|--------------------------------------|
| `2/4`          | `2-2`                                |
| `3/4`          | `2-2-2`                              |
| `4/4`          | `4-4` and `2-2-2-2` (auto)           |
| `3/8`          | `3`                                  |
| `5/8`          | `2-3` or `3-2` (user selectable)     |
| `6/8`          | `3-3`                                |
| `7/8`          | `2-2-3` or `3-2-2` (user selectable) |
| `9/8`          | `3-3-3`                              |
| `12/8`         | `3-3-3-3`                            |

Set timesignature.

```ts
builder.setTimeSignature("4/4");
builder.setTimeSignature("2/4");
builder.setTimeSignature(2, 4);
```

Beam grouping can be set for `5/8` and `7/8` time signatures.

```ts
builder.setTimeSignature("5/8", "2-3");
builder.setTimeSignature("7/8", "3-2-2");
```

<NewFeature since="6.3.0">Common time signature "`C`".</NewFeature>
<NewFeature since="6.4.0">Cut time signature "`C|`".</NewFeature>

```ts
builder.setTimeSignature("C");  // Since 6.3
builder.setTimeSignature("C|"); // Planned for 6.4
```

## Live Example

<LiveExample code={ExampleCode} />
