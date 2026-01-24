---
sidebar_position: 90
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-paint";

# Paint

## Create paint

```ts
const paint = new Score.Paint();
```

## Set Paint To View

See [**Create View**](./category/create-view) category for ways to set paint to a view.

## Set Colors

The colorable elements are declared with `Score.ColorKey`.

It contains following strings, each giving color to a certain element of the music score:

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

For example, to set color of staff signature clef:

```ts
paint.setColor("staff.signature.clef", "red");
```

You can also set color using key parts.

For example set color of all elements that contain `"staff"` part:

```ts
paint.setColor("staff", "red");  // You can use color name
paint.setColor("staff", "#F00"); // You can use color code
```

Or set color of all elements that contain `"staff"` and `"signature"` parts:

```ts
paint.setColor(["staff", "signature"], "red");
```

To set color of everything except background:

```ts
paint.setColor("all", "red");
```

And to set background color:

```ts
paint.setColor("background", "#99D");
```

## Live Example

<LiveExample code={ExampleCode} />
