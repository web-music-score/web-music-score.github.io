---
sidebar_position: 10
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/build-doc";
import Hint from "@site/src/Components/Hint";

# Build Document

Scores ar created with `DocumentBuilder`.

```ts
import * as Score from "web-music-score-v6/score";

const builder = new Score.DocumentBuilder();
```

Then build the music document. Here are some functions just as an example.

```ts
builder.addMeasure();
builder.addNote(1, "C4", "2n");
builder.addRest(1, "2n");
```

Finally get the music document.

```ts
const doc = builder.getDocument();
```

Everything can be chained together because all operations return the builder itself.

```ts
const doc = new Score.DocumentBuilder()
    .addMeasure()
    .addNote(1, "C4", "2n")
    .addRest(1, "2n")
    .getDocument();
```

<Hint>From now and forward `builder` is used as known thing.</Hint>


## Live Example

<LiveExample code={ExampleCode} />
