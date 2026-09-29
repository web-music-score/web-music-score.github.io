---
sidebar_position: 150
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

There are two functions for adding annotation:

- `DocumentBuilder.addAnnotation(kind, options?)`
- `DocumentBuilder.addAnnotation(kind, group, options?)`

For example add *piano*:

```ts
builder.addAnnotation("p", "dynamics");
```

With known annotations the `group` argument can be omitted:

```ts
builder.addAnnotation("p");
```

With `group` argument given you can add any text:

```ts
builder.addAnnotation("Hello", "dynamics");
```

<Hint>See `Score.AnnotationGroup` from API Reference for list of annotation groups.</Hint>
<Hint>See `Score.AnnotationKind` from API Reference for list of annotation kinds.</Hint>

## Annotation Anchor

Annotatio will be anchored to previously added note or rest:

```ts
builder.addNote(0, "C4", "4n").addAnnotation("p");
```

## Annotation Examples

### Dynamics Annotation

```ts
builder.addAnnotation("ppp", "dynamics"); // Group can be omitted!
builder.addAnnotation("pp");
builder.addAnnotation("p");
builder.addAnnotation("mp");
builder.addAnnotation("mf");
builder.addAnnotation("f");
builder.addAnnotation("ff");
builder.addAnnotation("fff");
builder.addAnnotation("cresc.");
builder.addAnnotation("dim.");
```

### Tempo Annotation

```ts
builder.addAnnotation("accel.", "tempo"); // Group can be omitted!
builder.addAnnotation("rit.");
builder.addAnnotation("a tempo");
```

### Temporal Annotation

```ts
builder.addAnnotation("fermata", "temporal"); // Group can be omitted!
builder.addAnnotation("fermata", { anchor: "rightBarLine" });
```

### Navigation Annotation

```ts
builder.addAnnotation("D.C. al Fine", "navigation"); // Group can be omitted!
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

### Label Annotation

```ts
builder.addAnnotation("C4", "pitchLabel"); // Group is required since pitch can be any text!
builder.addAnnotation("Am", "chordLabel"); // Group is required since chord can be any text!
```

### Articulation Annotation

```ts
builder.addAnnotation("staccato", "articulation"); // Group can be omitted!
builder.addAnnotation("staccatissimo");
builder.addAnnotation("spiccato");
builder.addAnnotation("accent");
builder.addAnnotation("marcato");
builder.addAnnotation("tenuto");
builder.addAnnotation("portato");
```

### Misc Annotation

```ts
builder.addAnnotation("8va", "misc"); // Group can be omitted!
builder.addAnnotation("8vb");
builder.addAnnotation("loco");
```

## Live Example

<LiveExample code={ExampleCode} />
