---
sidebar_position: 190
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/add-span";

# Add Span

Span is annotation with span in form of extension line or hairpin. It can cover multiple measures.

Function `addSpan()` is very similar to `addAnnotation()`, with the extra `spanBuilder` argument.

See: [Add Annotation](./add-annotation)

There are two functions for adding span:

- `DocumentBuilder.addSpan(kind, spanBuilder, options?)`
- `DocumentBuilder.addSpan(kind, group, spanBuilder, options?)`

Below are examples of using `spanBuilder` argument.

```ts
// Add span length by 3 quarter notes.
builder.addSpan("dim.", span => span.notes("4n", 3));

// Add span length by 3 beats.
builder.addSpan("dim.", span => span.beats(3));

// Add span length by 3 measures.
builder.addSpan("dim.", span => span.measures(3));

// Set span length to infinity (as long as possible).
builder.addSpan("dim.", span => span.infinity());

// Span builder operations can be queued.
builder.addSpan("dim.", span => span.measures(3).beats(2));

// Create hidden span, length of 3 measures.
builder.addSpan("dim.", span => span.measures(3).hide());
```

💡 Span can be discontinued even if it was set to cover more (e.g. "cresc." will be discontinued by following by "fff").


## Span Examples

### Dynamics Annotation

```ts
builder.addSpan("cresc.", span => span.beats(4));
builder.addSpan("dim.", span => span.beats(4));
builder.addSpan("<", span => span.beats(4));
builder.addSpan(">", span => span.beats(4));
```

### Tempo Annotation

```ts
builder.addSpan("accel.", span => span.beats(4));
builder.addSpan("rit.", span => span.beats(4));
```

### Misc Annotation

```ts
builder.addSpan("8va", span => span.beats(4));
builder.addSpan("8vb", span => span.beats(4));
```

## Span Anchor

Similar to annotation, span will be anchored to previously added note or rest:

```ts
builder.addNote(0, "C4", "4n").addSpan("<", span => span.measures(2));
```

## Live Example

<LiveExample code={ExampleCode} />
