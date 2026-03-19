---
sidebar_position: 50
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-progr-play";
import NewFeature from "@site/src/Components/NewFeature";

# Programmatic Playback

## Use Player

<DeprecatedRename since="6.1.0" from="Score.MPlayer" to="Score.Player" simpleRename />

```ts
// Simplest, play document directly
const player = doc.play();
```

```ts
// Create new player for document
const player = new Score.Player(doc);
```

```ts
// Get default player (since v6.3.0)
const player = doc.getDefaultPlayer();
```

<NewFeature since="6.3.0"><code>doc.getDefaultPlayer()</code>.</NewFeature>

```ts
// Start playback
player.play();

// Pause playback
player.pause();

// Stop playback
player.stop();
```

## Live Example

<LiveExample code={ExampleCode} />
