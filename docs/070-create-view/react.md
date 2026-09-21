---
sidebar_position: 30
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/create-view-react";
import Hint from "@site/src/Components/Hint";
import Warn from "@site/src/Components/Warn";

# JSX/TSX React

## Use WmsView

```ts
// Create view and set document
const doc = new Score.DocumentBuilder().getDocument();
<ReactUI.WmsView doc={doc} />

// Create view and set zoom (optional)
<ReactUI.WmsView doc={doc} zoom="1.5" />

// Create view and set staff size, the distance between bottom and top staff lines (optional)
<ReactUI.WmsView doc={doc} staffSize="40px" />
```

<Warn>Using staff size with units "cm", "mm", "in", etc. can give unpredictable result depending on device.</Warn>

## Live Example

<LiveExample code={ExampleCode} />
