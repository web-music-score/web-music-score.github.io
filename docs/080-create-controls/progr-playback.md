---
sidebar_position: 50
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-controls-progr-play";

# Programmatic Playback

## Use Player

```ts
// Simplest, play document directly
const player = doc.play();
```

```ts
// Create new player for document
const player = new Score.Player(doc);
```

```ts
// Get default player
const player = doc.getDefaultPlayer();
```

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
