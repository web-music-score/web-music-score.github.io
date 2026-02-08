---
sidebar_position: 90
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-paint";

# Paint

Coloring scores is like a non essential but nice extra feature.

## Use Paint

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

## Color Keys

In previous examples `"staff.signature.clef"` is an example color key.
Next is a list of color keys.

Color keys getting an update. All `*.element.*` keys (6.3.x and earlier) are mapped to
new `*.annotation.*` keys (planned for 6.4.x). These can still change before 6.4.0 stable release.

### Planned for 6.4.x

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

### 6.3.x and Earlier

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
"staff.signature.clef"
"staff.signature.key"
"staff.signature.time"
"staff.signature.tempo"
"staff.signature.measurenum"

"staff.element.annotation"
"staff.element.navigation"
"staff.element.fermata"
"staff.element.label"

"tab.frame"
"tab.note"
"tab.rest"
"tab.lyrics"
"tab.connective"
"tab.tuning"
"tab.signature.clef"
"tab.signature.key"
"tab.signature.time"
"tab.signature.tempo"
"tab.signature.measurenum"

"tab.element.annotation"
"tab.element.navigation"
"tab.element.fermata"
"tab.element.label"
```

## Live Example

<LiveExample code={ExampleCode} />
