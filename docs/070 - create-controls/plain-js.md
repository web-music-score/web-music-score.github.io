---
sidebar_position: 40
---

import { DeprecatedRename, ChangeNote } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-plain-js";
import NewFeature from "@site/src/Components/NewFeature";
import Hint from "@site/src/Components/Hint";

# Plain JavaScript

## Create Controls

```ts
const controls = new Score.WmsControls();
```

<DeprecatedRename since="6.1.0" from="Score.MPlaybackButtons" to="Score.WmsControls" simpleRename />

## Create buttons

### In HTML

```html
<div class="wms-button-group">
    <button id="playButtonId" class="wms-button"></button>
    <button id="pauseButtonId" class="wms-button"></button>
    <button id="stopButtonId" class="wms-button"></button>
</div>
```

<Hint>This example uses included CSS styles `wms-button` and `wms-button-group`. You can use `bootstrap` or any other style system.</Hint>

### Programmatically

```ts
const playButtonEl = document.createElement("button");
const pauseButtonEl = document.createElement("button");
const stopButtonEl = document.createElement("button");
```

<Hint>Do not forget to add buttons to the page!</Hint>

## Set Buttons (Since v6.3.0)

Setup with single play button:

```ts
// With element id:
controls.setSinglePlay("playButtonId", "Play");

// With element:
controls.setSinglePlay(playButtonEl, "Play");
```

Setup with single play/stop toggle button:

```ts
// With element id:
controls.setSinglePlayStop("playButtonId", "Play", "Stop");

// With element:
controls.setSinglePlayStop(playButtonEl, "Play", "Stop");
```

Setup with play and stop buttons:

```ts
// With element id:
controls.setPlayStop("playButtonId", "stopButtonId", "Play", "Stop");

// With element:
controls.setPlayStop(playButtonEl, stopButtonEl, "Play", "Stop");
```

Setup with play, pause and stop buttons:

```ts
// With element id:
controls.setPlayPauseStop("playButtonId", "pauseButtonId", "stopButtonId");

// With element:
controls.setPlayPauseStop(playButtonEl, pauseButtonEl, stopButtonEl);
```

<Hint>Labels are optional, use default if omitted.</Hint>

## Set Buttons (Before v6.3.0)

Setup with single play/stop toggle button:

```ts
// With element id:
controls.setPlayStopButton("playButtonId", "Play", "Stop");

// With element:
controls.setPlayStopButton(playButtonEl, "Play", "Stop");
```

Setup with play and stop buttons:

```ts
// With element id:
controls.setPlayButton("playButtonId", "Play");
controls.setStopButton("stopButtonId", "Stop");

// With element:
controls.setPlayButton(playButtonEl, "Play");
controls.setStopButton(stopButtonEl, "Stop");
```

Setup with play, pause and stop buttons:

```ts
// With element id:
controls.setPlayButton("playButtonId");
controls.setPauseButton("pauseButtonId");
controls.setStopButton("stopButtonId");

// With element:
controls.setPlayButton(playButtonEl);
controls.setPauseButton(pauseButtonEl);
controls.setStopButton(stopButtonEl);
```

<Hint>Labels are optional, use default if omitted.</Hint>

## Set Document

```
controls.setDocument(doc); 
```

## Set Player (Since v6.3.0)

Either get default player:

```ts
const player = doc.getDefaultPlayer();
```

Or create new player:

```ts
const player = new Score.Player(doc);
```

And bind player:

```ts
controls.setPlayer(player);
```

## Live Example

<LiveExample code={ExampleCode} />

<Hint>Use HTML/JS version without <code>React.useEffect()</code>, just add HTML elements before JS code.</Hint>
