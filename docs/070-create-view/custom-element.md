---
sidebar_position: 30
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-view-custom-el";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# Custom HTML Element

## Add View in HTML

```html
<!-- Add view in HTML -->
<wms-view id="viewId"></wms-view>

<!-- Add view with zoom (optional) -->
<wms-view id="viewId" zoom="1.5"></wms-view>

<!-- Add view with staff size, the distance between bottom and top staff lines (optional) -->
<wms-view id="viewId" staff-size="40px"></wms-view>
```

<Warn>Using staff size with units "cm", "mm", "in", etc. are not accurate and can give different result on devices.</Warn>

## Bind View in JavaScript

```html
<script>
    // Bind document to view
    const doc = new Score.DocumentBuilder().getDocument();
    doc.bindElement("viewId");
</script>
```

## Live Example

<LiveExample code={ExampleCode} />
