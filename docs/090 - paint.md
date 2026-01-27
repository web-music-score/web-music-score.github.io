---
sidebar_position: 90
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-paint";

# Paint

## Color Keys

Here is a list of color keys, from type `Score.ColorKey`.

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
"tab.element.label"
```

## Use Paint

See [**Create View**](./category/create-view) category for ways to set paint to a view.

```ts
// Create paint
const paint = new Score.Paint();

// Set color of staff signature clef
paint.setColor("staff.signature.clef", "red");

// Set color of all elements that contain "staff"
paint.setColor("staff", "red");  // You can use color name
paint.setColor("staff", "#F00"); // You can use color code

// Set color of all elements that contain both "staff" and "signature"
paint.setColor(["staff", "signature"], "red");

// Set color of everything except background
paint.setColor("all", "red");

// Set background color
paint.setColor("background", "#99D");
```

## Live Example

<LiveExample code={ExampleCode} />
