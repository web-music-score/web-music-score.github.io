---
sidebar_position: 160
---

import { ChangeNote } from '@site/src/Components/ChangeNote' ;
import Hint from "@site/src/Components/Hint";
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-fermata";

# Add Fermata

## Planned for 6.4.x

Fermata is one kind of annotation. See [Add Annotation](./add-annotation).

## 6.3.x and Earlier

Fermata has it's own `addFermata` function.

```ts
// Add fermata at previously added note or rest.
builder.addFermata("atNote");
builder.addFermata(); // Use "atNote" if omitted.

// Add fermata at current measure end.
builder.addFermata("atMeasureEnd");
```

### Live Example

<LiveExample code={ExampleCode} />
