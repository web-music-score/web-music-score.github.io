---
sidebar_position: 190
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/add-span";

# Add Span

Span is annotation with length (extension line/hairpin).

Function `addSpan()` is very similar to `addAnnotation()`, it only has extra `spanBuilder` arg.

```ts
builder.addSpan("dim.", span => {
    // Add span length by noteLength * noteCount (1 if omitted).
    span.notes(noteLength, noteCount?);
    // Add span length by number of beats.
    span.beats(beatCount);
    // Add span length by number of measures.
    span.measures(measureCount);
    // Set span length to infinity (as long as possible).
    span.infinity();
    // Hide span.
    span.hide();
});
```

## Examples

Add span, length is 2 whole notes:

```ts
builder.addSpan("<", span => span.notes("1n", 2));
```

Add span, length is 2 beats:

```ts
builder.addSpan("<", span => span.beats(2));
```

Add hidden span, length is 3 measures:

```ts
builder.addSpan("<", span => span.measures(3).hide());
```

Add span, length is as long as possible:

```ts
builder.addSpan("<", span => span.infinity());
```

## Live Example

<LiveExample code={ExampleCode} />
