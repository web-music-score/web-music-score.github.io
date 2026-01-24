---
sidebar_position: 40
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-controls-react";
import Hint from "@site/src/Components/Hint";

# JSX/TSX React

## Use With Document

<DeprecatedRename since="6.1.0" from="ReactUI.PlaybackButtons" to="ReactUI.WmsControls" simpleRename />

```ts
<ReactUI.WmsControls doc={doc} />
```

## Use With Player (Since v6.3.0)

```ts
<ReactUI.WmsControls player={player} />
```

## Possible Button Layouts

Single play button:

```ts
<ReactUI.WmsControls doc={doc} singlePlay />
```

Single play/stop toggle button:

```ts
<ReactUI.WmsControls doc={doc} singlePlayStop playLabel="Play" stopLabel="Stop" />
```

Play and stop buttons:

```ts
<ReactUI.WmsControls doc={doc} playStop playLabel="▶" stopLabel="⏹" />
```

Play, pause and stop buttons:

```ts
<ReactUI.WmsControls doc={doc} playPauseStop />
```

<Hint>Labels are optional, use default if omitted.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
