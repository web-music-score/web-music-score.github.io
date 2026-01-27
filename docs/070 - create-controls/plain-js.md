---
sidebar_position: 40
---

import { DeprecatedRename, ChangeNote } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-plain-js";
import NewFeature from "@site/src/Components/NewFeature";
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
// Create buttons in JavaScript
// Do not forget to append buttons to HTML page!
const playButtonEl = document.createElement("button");
const pauseButtonEl = document.createElement("button");
const stopButtonEl = document.createElement("button");
```

## Use WmsControls

<DeprecatedRename since="6.1.0" from="Score.MPlaybackButtons" to="Score.WmsControls" simpleRename />

<NewFeature since="6.3.0"><code>doc.getDefaultPlayer()</code> and <code>controls.setPlayer()</code>.</NewFeature>

```ts
// Create controls
const controls = new Score.WmsControls();

// Set document for playback
controls.setDocument(doc); 

// Use default player and set to controls (since v6.3.0)
const player = doc.getDefaultPlayer();
controls.setPlayer(player);

// Create new player and set to controls (since v6.3.0)
const player = new Score.Player(doc);
controls.setPlayer(player);
```

### Set Buttons (Since v6.3.0)

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

### Set Buttons (Before v6.3.0)

```ts
// Setup single Play/Stop toggle button
controls.setPlayStopButton("playButtonId", "Play", "Stop"); // With element id,
controls.setPlayStopButton(playButtonEl, "Play", "Stop");   // Or with element...

// Setup Play and Stop buttons, with custom labels
controls.setPlayButton("playButtonId", "▶");
controls.setStopButton("stopButtonId", "⏹");

// Setup Play, Pause and Stop buttons
controls.setPlayButton("playButtonId");
controls.setPauseButton("pauseButtonId");
controls.setStopButton("stopButtonId");
```

<Hint>Default labels if omitted are "Play", "Pause" and "Stop".</Hint>

## Live Example

<LiveExample code={ExampleCode} />
