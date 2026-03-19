---
sidebar_position: 200
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-connective";

# Add Connective

Add tie:

```ts
builder.addConnective("tie");
```

Add slur:

```ts
builder.addConnective("slur");
```
Add slide:

```ts
builder.addConnective("slide");
```

Add tie with span (how many notes the connective is across):

```ts
builder.addConnective("tie", 3);
```

Add slur connected above note head:

```ts
builder.addConnective("slur", 2, "above");
```

Add slur connected below note head:

```ts
builder.addConnective("slur", 2, "below");
```

Add slur connected next to note head:

```ts
builder.addConnective("slur", 2, "center");
```

Add slur connected at stem tip:

```ts
builder.addConnective("slur", 2, "stemTip");
```

## Live Example

<LiveExample code={ExampleCode} />
