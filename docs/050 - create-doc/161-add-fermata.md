---
sidebar_position: 161
---

import { ChangeNote } from '@site/src/Components/ChangeNote' ;
import Hint from "@site/src/Components/Hint";

# Add Fermata

## Planned for 6.4.x

Fermata is one kind of annotation. See [Add Annotation](./add-annotation).

## 6.3.x and Earlier

Fermata has it's own `addFermata` function.

```ts
// Add fermata at previously added note or rest.
builder.addFermata("atNote");

// Add fermata at current measure end.
builder.addFermata("atMeasureEnd");
```
