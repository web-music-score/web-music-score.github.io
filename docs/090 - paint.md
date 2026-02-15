---
sidebar_position: 90
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-color";
import Hint from "@site/src/Components/Hint";

# Paint (Deprecated)

Made a decision to deprecate this whole coloring method with Paint. It was more distraction than purposeful.

However, there are `"color"` properties in `DocumentOptions`, `NoteOptions`, `RestOptions` and
`AnnotationOptions`. These are fully supported.

```ts
// Set document foreground and background color.
new DocumentBuilder({ color: "white", background: "black" });

// Set note color
builder.addNote(0, "C4", "2n", { color: "red" });

// Set rest color
builder.addRest(0, "2n", { color: "red" });

// Set annotation color
builder.addAnnotation("ppp", { color: "red" });
```

It is possible new stuff will also get `"color"` property in the future but it is not priority currently.

## Use Paint (Deprecated)

See [**Create View**](./category/create-view) category for ways to set paint to a view.

```ts
// Create paint
const paint = new Score.Paint();

// Set color of staff signature clef
paint.setColor("staff.signature.clef", "red");

// Set color of all color keys that contain "staff"
paint.setColor("staff", "red");  // You can use color name
paint.setColor("staff", "#F00"); // You can use color code

// Set color of all color keys that contain both "staff" and "signature"
paint.setColor(["staff", "signature"], "red");

// Set color of everything except background
paint.setColor("all", "red");

// Set background color
paint.setColor("background", "#99D");
```

## Color Keys (Deprecated)

In previous examples `"staff.signature.clef"` is an example color key.
Next is a list of color keys.

<Hint>All `*.element.*` keys (6.3.x and earlier) are mapped to
new `*.annotation.*` keys (planned for 6.4.x).</Hint>

```ts
"background"

"header.title"
"header.composer"
"header.arranger"

"rowgroup.instrument"
"rowgroup.frame"

"staff.frame"
"staff.note"
"staff.rest"
"staff.lyrics"
"staff.connective"
"staff.arpeggio"
"staff.signature.clef"
"staff.signature.key"
"staff.signature.time"
"staff.signature.tempo"
"staff.signature.measurenum"

"tab.frame"
"tab.note"
"tab.rest"
"tab.lyrics"
"tab.connective"
"tab.arpeggio"
"tab.tuning"
"tab.signature.clef"
"tab.signature.key"
"tab.signature.time"
"tab.signature.tempo"
"tab.signature.measurenum"

// -------------------------
// --- 6.3.x and Earlier ---
// -------------------------

"staff.element.annotation"
"staff.element.navigation"
"staff.element.fermata"
"staff.element.label"

"tab.element.annotation"
"tab.element.navigation"
"tab.element.fermata"
"tab.element.label"

// -------------------------
// --- Planned for 6.4.x ---
// -------------------------

"staff.annotation.navigation"
"staff.annotation.dynamics"
"staff.annotation.tempo"
"staff.annotation.articulation"
"staff.annotation.expression"
"staff.annotation.technique"
"staff.annotation.temporal"
"staff.annotation.label"
"staff.annotation.ornament"
"staff.annotation.misc"

"tab.annotation.navigation"
"tab.annotation.dynamics"
"tab.annotation.tempo"
"tab.annotation.articulation"
"tab.annotation.expression"
"tab.annotation.technique"
"tab.annotation.temporal"
"tab.annotation.label"
"tab.annotation.ornament"
"tab.annotation.misc"
```

## Live Example

This example uses `"color"` properties.

<LiveExample code={ExampleCode} />
