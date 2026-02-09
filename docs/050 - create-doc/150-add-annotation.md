---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

## Planned for 6.4.x

Planned changes for 6.4.x are:
- Make `addAnnotation()` more future compatible by adding annotation options (last argument).
- More extensive list of known annotation kinds.

<Hint>See API Reference for `Score.AnnotationGroup` for list of annotation groups.</Hint>
<Hint>See API Reference for `Score.AnnotationKind` for list of annotation kinds.</Hint>

```ts
// Add annotation from list of known annotation kinds.
builder.addAnnotation("fff");
// Add annotation to a specific annotation group
builder.addAnnotation("accel.", { group "tempo" });

// Add fermata
builder.addAnnotation("fermata");
// Add fermata over right bar line at measure end
builder.addAnnotation("fermata", { anchor: "rightBarLine" });

// Add label
builder.addAnnotation("pitchLabel", "C4");
builder.addAnnotation("chordLabel", "Am");

// Add navigation
builder.addAnnotation("D.C. al Fine");
builder.addAnnotation("D.C. al Coda");
builder.addAnnotation("D.S. al Fine");
builder.addAnnotation("D.S. al Coda");
builder.addAnnotation("Coda");
builder.addAnnotation("toCoda");
builder.addAnnotation("Segno");
builder.addAnnotation("Fine");
builder.addAnnotation("startRepeat");
builder.addAnnotation("endRepeat", { repeatCount: 2 });
builder.addAnnotation("ending", { endingPassages: [1, 2]});
```

## 6.3.x and Earlier

<Hint>List of known annotation kinds is minimal.</Hint>

```ts
// These are the supported annotations in "dynamics" group
builder.addAnnotation("fff");
builder.addAnnotation("ff");
builder.addAnnotation("f");
builder.addAnnotation("mf");
builder.addAnnotation("m");
builder.addAnnotation("mp");
builder.addAnnotation("p");
builder.addAnnotation("pp");
builder.addAnnotation("ppp");
builder.addAnnotation("cresc.");
builder.addAnnotation("decresc.");
builder.addAnnotation("dim.");

// These are the supported annotations in "tempo" group
builder.addAnnotation("accel.");
builder.addAnnotation("rit.");
builder.addAnnotation("a tempo");

// With the group (first argument) you can add any annotation text.
builder.addAnnotation("dynamics", "Loud!");
builder.addAnnotation("tempo", "Fast!");
```

See also [Add Fermata](./add-fermata) and [Add Label](./add-label).

## Live Example

<LiveExample code={ExampleCode} />
