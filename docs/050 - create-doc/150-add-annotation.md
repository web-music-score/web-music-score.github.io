---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

## Planned for 6.4.x

Version 6.4.x will make `addAnnotation()` more future compatible by adding introducing
argument `AnnotaitionOptions`.

<Hint>See API Reference for `Score.AnnotationGroup` for list of annotation groups.</Hint>
<Hint>See API Reference for `Score.AnnotationKind` for list of known annotation kinds.</Hint>

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

Add annotation.

```ts
// These are the supported dynamics annotations
builder.addAnnotation("dynamics", "fff");
builder.addAnnotation("dynamics", "ff");
builder.addAnnotation("dynamics", "f");
builder.addAnnotation("dynamics", "mf");
builder.addAnnotation("dynamics", "m");
builder.addAnnotation("dynamics", "mp");
builder.addAnnotation("dynamics", "p");
builder.addAnnotation("dynamics", "pp");
builder.addAnnotation("dynamics", "ppp");
builder.addAnnotation("dynamics", "cresc.");
builder.addAnnotation("dynamics", "decresc.");
builder.addAnnotation("dynamics", "dim.");

// These are the supported tempo annotations
builder.addAnnotation("tempo", "accel.");
builder.addAnnotation("tempo", "rit.");
builder.addAnnotation("tempo", "a tempo");

// The first argument (annotation group) is optional for supported annotation kinds.
builder.addAnnotation("ff");      // Resolves "dynamics"
builder.addAnnotation("accel.");  // Resolves "tempo"

// With annotation group you can add any annotation text.
builder.addAnnotation("dynamics", "Loud!");
builder.addAnnotation("tempo", "Fast!");
```

<Hint>List of supported annotation kinds in version 6.3.x and earlier is minimal.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
