---
sidebar_position: 30
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-plain-js";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# Plain JavaScript

## Use WmsView

<DeprecatedRename since="6.1.0" from="Score.MRenderContext" to="Score.WmsView" simpleRename />

```ts
// Create view.
const view = new Score.WmsView();

// Set canvas using canvas element id
// Have <canvas id="canvasId"></canvas> in you HTML page
view.setCanvas("canvasId");

// Or create canvas manually
// Do not forget to append canvas to HTML page!
const canvas = document.createElement("canvas");
view.setCanvas(canvas);

// Set document
const doc = new Score.DocumentBuilder().getdocument();
view.setDocument(doc);

// Deprecated (see Paint section): set paint
const paint = new Score.Paint();
view.setPaint(paint);

// Set zoom (optional)
view.setZoom(1.5);

// Set staff size, the distance between bottom and top staff lines (optional)
view.setStaffSize("40px");

// Render view
view.draw();
```

<Warn>Using staff size with units "cm", "mm", "in", etc. can give unpredictable result depending on device.</Warn>

## Live Example

<LiveExample code={ExampleCode} />
