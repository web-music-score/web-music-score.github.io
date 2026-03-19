---
sidebar_position: 40
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-react";
import Hint from "@site/src/Components/Hint";
import NewFeature from "@site/src/Components/NewFeature";

# JSX/TSX React

## Use WmsControls

<DeprecatedRename since="6.1.0" from="ReactUI.PlaybackButtons" to="ReactUI.WmsControls" simpleRename />

<NewFeature since="6.3.0"><code>doc.getDefaultPlayer()</code> and <code>player</code> property of <code>WmsControls</code>.</NewFeature>

```ts
// Create controls and set document
const doc = new Score.DocumentBuilder().getDocument();
<ReactUI.WmsControls doc={doc} />

// Use with default player (since v6.3.0)
const player = doc.getDefaultPlayer();
<ReactUI.WmsControls player={player} />

// Use with new player (since v6.3.0)
const player = new Score.Player(doc);
<ReactUI.WmsControls player={player} />

// Create single Play button
<ReactUI.WmsControls doc={doc} singlePlay />

// Create single Play/Stop toggle button
<ReactUI.WmsControls doc={doc} singlePlayStop playLabel="Play" stopLabel="Stop" />

// Create Play and Stop buttons
<ReactUI.WmsControls doc={doc} playStop playLabel="▶" stopLabel="⏹" />

// Create Play, Pause and Stop buttons
<ReactUI.WmsControls doc={doc} playPauseStop />
```

<Hint>Default labels if omitted are "Play", "Pause" and "Stop".</Hint>

## Live Example

<LiveExample code={ExampleCode} />
