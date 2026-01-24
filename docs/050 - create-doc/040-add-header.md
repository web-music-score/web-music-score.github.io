---
sidebar_position: 40
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-header";

# Add Document Header

Document header contains title, composer and arranger.

```ts
builder.setHeader("Title", "Composer", "Arranger");
```

Any of `title`, `composer` and `arranger` can be omitted/set undefined.

```ts
builder.setHeader("Title");
```

## Live Example

<LiveExample code={ExampleCode} />
