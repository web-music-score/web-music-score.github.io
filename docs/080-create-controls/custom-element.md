---
sidebar_position: 40
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-controls-custom-el";
import Hint from "@site/src/Components/Hint";

# Custom HTML Element

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

## Bind Controls In JavaScript

```html
<script>
    // Bind document to controls
    doc.bindElement("controlsId");

    // Use default player and bind to controls
    const player = doc.getDefaultPlayer();
    player.bindElement("controlsId");

    // Create new player and bind to controls
    const player = new Score.Player(doc);
    player.bindElement("controlsId");
</script>
```

## Live Example

<LiveExample code={ExampleCode} />
