---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

<Hint>See API Reference for `Score.AnnotationGroup` for list of annotation groups.</Hint>
<Hint>See API Reference for `Score.AnnotationKind` for list of annotation kinds.</Hint>

```ts
// Add annotation
builder.addAnnotation("fff");

// Some common annotations are:
// Dynamics: "ppp", "pp", "p", "mp", "mf", "f", "ff", "fff", "cresc.", "decresc.", "dim."
// Tempo: "accel.", "rit.", "a tempo"

// Add annotation to given annotation group
builder.addAnnotation("accel.", "tempo");

// Add fermata
builder.addAnnotation("fermata");
// Add fermata to right bar line
builder.addAnnotation("fermata", { anchor: "rightBarLine" });

// Add label examples
builder.addAnnotation("C4", "pitchLabel");
builder.addAnnotation("Am", "chordLabel");

// Add articulation examples
builder.addAnnotation("staccato");
builder.addAnnotation("accent");

// Add navigation examples
builder.addAnnotation("D.C. al Fine");
builder.addAnnotation("D.C. al Coda");
builder.addAnnotation("D.S. al Fine");
builder.addAnnotation("D.S. al Coda");
builder.addAnnotation("Coda");
builder.addAnnotation("toCoda");
builder.addAnnotation("Segno");
builder.addAnnotation("Fine");
builder.addAnnotation("startRepeat");
builder.addAnnotation("endRepeat", { playCount: 2 });
builder.addAnnotation("ending", { playNumbers: [1, 2]});
```

## Live Example

<LiveExample code={ExampleCode} />
