---
sidebar_position: 160
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-annotation";
import Hint from "@site/src/Components/Hint";

# Add Annotation

Add annotation text.
It will be anchored to previously added symbol (note, rest).

## Add Dynamics Annotations

```ts
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
```

## Add Tempo Annotations

```ts
builder.addAnnotation("tempo", "accel.");
builder.addAnnotation("tempo", "rit.");
builder.addAnnotation("tempo", "a tempo");
```

## Add Articulation Annotations (Since v6.3.0)

```ts
builder.addAnnotation("articulation", "fermata");
builder.addAnnotation("articulation", "measureEndFermata"); // Anchored to measures right bar line.
```

## Auto Detect Annotation Type

```ts
builder.addAnnotation("ff");      // Detects "dynamics"
builder.addAnnotation("accel.");  // Detects "tempo"
builder.addAnnotation("fermata"); // Detects "articulation"
```

<Hint>List of known annotation types is currently very simple.</Hint>

---

<Hint>You can as well use `Score.Annotation`, `Score.DynamicsAnnotation`,
`Score.TempoAnnotation` and `Score.ArticulationAnnotation` enum values.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
