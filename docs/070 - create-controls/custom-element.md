---
sidebar_position: 40
---

import NewFeature from "@site/src/Components/NewFeature";
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-custom-el";
import Hint from "@site/src/Components/Hint";

# Custom HTML Element

<NewFeature since="6.1.0">Custom HTML element `wms-controls`.</NewFeature>

## Create Controls In HTML

```html
<!-- Create controls with single Play button -->
<wms-controls id="controlsId" single-play></wms-controls>

<!-- Create controls with single Play/Stop toggle button -->
<wms-controls id="controlsId" single-play-stop play-label="Play" stopLabel="Stop"></wms-controls>

<!-- Create controls with Play and Stop buttons, with custom labels -->
<wms-controls id="controlsId" play-stop play-label="▶" stop-label="⏹"></wms-controls>

<!-- Create controls with Play, Pause and Stop buttons -->
<wms-controls id="controlsId" play-pause-stop></wms-controls>
```

<Hint>Default labels if omitted are "Play", "Pause" and "Stop".</Hint>

<Hint>Library <code>v6.3.4</code> fixed attribute names to kebab-case (e.g. <code>singlePlay</code> =><code>single-play</code>).Old attribute names have no effect.</Hint>

## Bind Controls In JavaScript

```html
<script>
    // Bind document to controls
    doc.bindElement("controlsId");

    // Use default player and bind to controls (since v6.3.0)
    const player = doc.getDefaultPlayer();
    player.bindElement("controlsId");

    // Create new player and bind to controls (since v6.3.0)
    const player = new Score.Player(doc);
    player.bindElement("controlsId");
</script>
```

<NewFeature since="6.3.0"><code>doc.getDefaultPlayer()</code> and <code>player.bindElement()</code>.</NewFeature>

## Live Example

<LiveExample code={ExampleCode} />
