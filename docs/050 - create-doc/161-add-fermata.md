---
sidebar_position: 161
---

import { ChangeNote } from '@site/src/Components/ChangeNote' ;
import Hint from "@site/src/Components/Hint";

# Add Fermata

## Latest

Since `v6.3.0` fermata is just one type of annotation.

```ts
// Add fermata anchored at previously added note or rest.
builder.addAnnotation("fermata");

// Add fermata at current measure end.
builder.addAnnotation("measureEndFermata");
```

<Hint>See [Add Annotation](./add-annotation)!</Hint>

## Before (Prior v6.3.0)

This is deprecated but supported in current major versions 6.

```ts
// Add fermata anchored at previously added note or rest.
builder.addFermata("atNote");

// Add fermata at current measure end.
builder.addFermata("atMeasureEnd");
```
