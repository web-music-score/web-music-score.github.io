---
sidebar_position: 40
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-controls-react";
import Hint from "@site/src/Components/Hint";

# JSX/TSX React

## Use WmsControls

```ts
// Create controls and set document
const doc = new Score.DocumentBuilder().getDocument();
<ReactUI.WmsControls doc={doc} />

// Use with default player
const player = doc.getDefaultPlayer();
<ReactUI.WmsControls player={player} />

// Use with new player
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
