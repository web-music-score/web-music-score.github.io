---
sidebar_position: 40
---

import NewFeature from "@site/src/Components/NewFeature";
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-custom-el";
import Hint from "@site/src/Components/Hint";

# Custom HTML Element

<NewFeature since="6.1.0">Custom HTML Elements.</NewFeature>

## Add `<wms-controls>`

```html
<wms-controls id="controlsId" single-play play-label="Play"></wms-controls>
<wms-controls id="controlsId" single-play-stop play-label="Play" stopLabel="Stop"></wms-controls>
<wms-controls id="controlsId" play-stop play-label="Play" stop-label="Stop"></wms-controls>
<wms-controls id="controlsId" play-pause-stop play-label="Play" pause-label="Pause" stop-label="Stop"></wms-controls>
```

<Hint>Labels are optional, defaults are used if omitted.</Hint>

<Hint>Library <code>v6.3.4</code> fixed attribute names to kebab-case,
e.g. <code>singlePlay</code> => <code>single-play</code>.</Hint>

## Bind Document

```html
<script>
    doc.bindElement("controlsId");
</script>
```

## Bind Player (Since v6.3.0)

```html
<script>
    // Either get default player
    const plyer = doc.getDefaultPlayer();

    // Or create new player
    const player = new Score.Player(doc);

    // Bind player
    player.bindElement("controlsId");
</script>
```

## Live Example

<LiveExample code={ExampleCode} />

<Hint>Use HTML/JS version without <code>React.useEffect()</code>, just add HTML elements before JS code.</Hint>
