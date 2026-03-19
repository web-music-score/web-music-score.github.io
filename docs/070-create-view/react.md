---
sidebar_position: 30
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/create-view-react";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# JSX/TSX React

## Use WmsView

<DeprecatedRename since="6.1.0" from="ReactUI.MusicScoreView" to="ReactUI.WmsView" simpleRename />

```ts
// Create view and set document
const doc = new Score.DocumentBuilder().getDocument();
<ReactUI.WmsView doc={doc} />

// Deprecated (see Paint section): create view with paint
const paint = new Score.Paint();
<ReactUI.WmsView doc={doc} paint={paint} />

// Create view and set zoom (optional)
<ReactUI.WmsView doc={doc} zoom="1.5" />

// Create view and set staff size, the distance between bottom and top staff lines (optional)
<ReactUI.WmsView doc={doc} staffSize="40px" />
```

<Warn>Using staff size with units "cm", "mm", "in", etc. can give unpredictable result depending on device.</Warn>

## Live Example

<LiveExample code={ExampleCode} />
