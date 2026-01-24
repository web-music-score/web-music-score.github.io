---
sidebar_position: 30
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-plain-js";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# Plain JavaScript

## Create View

```ts
const view = new Score.WmsView();
```

<DeprecatedRename since="6.1.0" from="Score.MRenderContext" to="Score.WmsView" simpleRename />

## Set Canvas

### Using HTML

```html
<canvas id="canvasId"></canvas>
```

```ts
view.setCanvas("canvasId");
```

<Hint>Do not forget to append canvas somewhere!</Hint>

### Programmatically

```ts
const canvas = document.createElement("canvas");

view.setCanvas(canvas);
```

## Set Document

```ts
view.setDocument(doc);
```

## Set Paint

```ts
view.setPaint(paint);
```

<Hint>Paint is optional.</Hint>

# Set View Size

There are two ways to affect view size: zoom and staff size.

### Set Zoom

Set zoom:

```ts
view.setZoom(1.5);
```

<Hint>Default zoom if omitted is `1.0`.</Hint>

### Set Staff Size

Set view size with given distance between bottom and top staff lines:

```ts
view.setStaffSize("40px");
```

<Hint>Default staff size is connected to default font size.</Hint>

<Warn>Using units "cm", "mm", "in", etc. can give unpredictable result depending on device.</Warn>

## Render

```ts
view.draw();
```

## Live Example

<LiveExample code={ExampleCode} />

<Hint>Use HTML/JS version without <code>React.useEffect()</code>, just add HTML elements before JS code.</Hint>
