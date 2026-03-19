---
sidebar_position: 10
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/build-doc";
import Hint from "@site/src/Components/Hint";

# Build Document

## Using `DocumentBuilder`

```ts
// Create document builder.
const builder = new Score.DocumentBuilder();

// Build document. Here something just as an example.
builder.setScoreConfiguration("treble");
builder.setKeySignature("C Major");
builder.setTimeSignature("3/4");
builder.addNote(0, ["C4", "E4", "G4"], "4n");
builder.addMeasure();
builder.addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true });

// When finished, get the document.
const doc = builder.getDocument();

// Everything can be chained together.
const doc = new Score.DocumentBuilder()
        .setScoreConfiguration("treble")
        .setTimeSignature("3/4")
        .addNote(0, ["C4", "E4", "G4"], "4n")
        .addMeasure()
        .addChord(0, ["C4", "E4", "G4"], "2.", { arpeggio: true })
        .getDocument();
```

<Hint>From now on the `builder` is used as a known thing.</Hint>

## Live Example

<LiveExample code={ExampleCode} />
