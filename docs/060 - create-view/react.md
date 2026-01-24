---
sidebar_position: 30
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-react";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# JSX/TSX React

## Create View

```ts
<ReactUI.WmsView doc={doc} />
```

<DeprecatedRename since="6.1.0" from="ReactUI.MusicScoreView" to="ReactUI.WmsView" simpleRename />

## Set Paint

```ts
<ReactUI.WmsView doc={doc} paint={paint} />
```

<Hint>Paint is optional.</Hint>

# Set View Size

There are two ways to affect view size: zoom and staff size.

### Set Zoom

Set zoom:

```ts
<ReactUI.WmsView doc={doc} zoom="1.5" />
```

<Hint>Default zoom if omitted is `1.0`.</Hint>

### Set Staff Size

Set view size with given distance between bottom and top staff lines:

```ts
<ReactUI.WmsView doc={doc} staffSize="40px" />
```

<Hint>Default staff size is connected to default font size.</Hint>

<Warn>Using units "cm", "mm", "in", etc. can give unpredictable result depending on device.</Warn>

## Live Example

<LiveExample code={ExampleCode} />
