---
sidebar_position: 30
---

import NewFeature from "@site/src/Components/NewFeature";
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-custom-el";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# Custom HTML Element

<NewFeature since="6.1.0">Custom HTML element `<wms-view>`.</NewFeature>

## Add View in HTML

```html
<!-- Add view in HTML -->
<wms-view id="viewId"></wms-view>

<!-- Add view with zoom (optional) ->
<wms-view id="viewId" zoom="1.5"></wms-view>

<!-- Add view with staff size, the distance between bottom and top staff lines (optional) -->
<wms-view id="viewId" staff-size="40px"></wms-view>
```

<Warn>Using staff size with units "cm", "mm", "in", etc. are not accurate and can give different result on devices.</Warn>

<Hint>Library <code>v6.3.4</code> fixed attribute names to kebab-case (e.g. <code>staffSize</code> => <code>staff-size</code>). Old attribute names have no effect.</Hint>

## Bind View in JavaScript

```html
<script>
    // Bind document to view
    const doc = new Score.DocumentBuilder().getDocument();
    doc.bindElement("viewId");

    // Bind paint to element (optional)
    const paint = new Score.Paint();
    paint.bindElement("viewId");
</script>
```

## Live Example

<LiveExample code={ExampleCode} />
