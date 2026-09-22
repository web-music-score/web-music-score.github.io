---
sidebar_position: 40
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-controls-plain-js";
import Hint from "@site/src/Components/Hint";

# Plain JavaScript

## Create Buttons

```html
<!-- Create button in HTML page -->
<div class="wms-button-group">
    <button id="playButtonId" class="wms-button"></button>
    <button id="pauseButtonId" class="wms-button"></button>
    <button id="stopButtonId" class="wms-button"></button>
</div>
```

<Hint>This example uses built-in styles `wms-button` and `wms-button-group`.</Hint>

```ts
// Or create buttons in JavaScript (do not forget to append buttons to HTML page!)
const playButtonEl = document.createElement("button");
const pauseButtonEl = document.createElement("button");
const stopButtonEl = document.createElement("button");
```

## Use WmsControls

```ts
// Create controls
const controls = new Score.WmsControls();

// Set document for playback
controls.setDocument(doc); 

// Use default player and set to controls
const player = doc.getDefaultPlayer();
controls.setPlayer(player);

// Create new player and set to controls
const player = new Score.Player(doc);
controls.setPlayer(player);
```

## Set Buttons

```ts
// Setup single Play button
controls.setSinglePlay("playButtonId", "Play"); // With element id,
controls.setSinglePlay(playButtonEl, "Play");   // Or with element...

// Setup single Play/Stop toggle button
controls.setSinglePlayStop("playButtonId", "Play", "Stop");

// Setup Play and Stop buttons, with custom labels
controls.setPlayStop("playButtonId", "stopButtonId", "▶", "⏹");

// Setup Play, Pause and Stop buttons
controls.setPlayPauseStop("playButtonId", "pauseButtonId", "stopButtonId");
```

<Hint>Default labels if omitted are "Play", "Pause" and "Stop".</Hint>

## Live Example

<LiveExample code={ExampleCode} />
