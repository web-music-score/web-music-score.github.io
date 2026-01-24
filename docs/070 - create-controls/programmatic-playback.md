---
sidebar_position: 50
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-doc-play";

# Programmatic Playback

## Simplest play

```ts
doc.play();
```

## Create Player

```ts
const player = new Score.Player(doc);
```

<DeprecatedRename since="6.1.0" from="Score.MPlayer" to="Score.Player" simpleRename />

## Get Default Player (Since v6.3.0)

```ts
const player = doc.getDefaultPlayer();
```

## Player Functions

Play:

```ts
player.play();
```

Pause playback:

```ts
player.pause();
```

Stop playback:

```ts
player.stop();
```

## Live Example

<LiveExample code={ExampleCode} />
