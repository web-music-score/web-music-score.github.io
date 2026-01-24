---
sidebar_position: 30
---

import NewFeature from "@site/src/Components/NewFeature";
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-custom-el";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# Custom HTML Element

<NewFeature since="6.1.0">Custom HTML Elements.</NewFeature>

## Create View

```html
<wms-view id="viewId"></wms-view>
```

## Bind Document

```html
<script>
    doc.bindElement("viewId");
</script>
```

## Bind Paint

```html
<script>
    paint.bindElement("viewId");
</script>
```

<Hint>Paint is optional.</Hint>

# Set View Size

There are two ways to affect view size: zoom and staff size.

### Set Zoom

Set zoom:

```html
<wms-view id="viewId" zoom="1.5"></wms-view>
```

<Hint>Default zoom if omitted is `1.0`.</Hint>

### Set Staff Size

Set view size with given distance between bottom and top staff lines:

```html
<wms-view id="viewId" staff-size="40px"></wms-view>
```

<Hint>Library <code>v6.3.4</code> fixed attribute names to kebab-case,
e.g. <code>staffSize</code> => <code>staff-size</code>.</Hint>

<Warn>Using units "cm", "mm", "in", etc. are not accurate and can give different result on devices.</Warn>

## Live Example

<LiveExample code={ExampleCode} />

<Hint>Use HTML/JS version without <code>React.useEffect()</code>, just add HTML elements before JS code.</Hint>
