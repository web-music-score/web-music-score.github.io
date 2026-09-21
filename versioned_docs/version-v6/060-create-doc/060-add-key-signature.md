---
sidebar_position: 60
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-key-signature";

# Add Key Signature

Set key signature form the beginning of current measure.

Key signature consists of tonic and scale type.

```ts
builder.setKeySignature("C Major");            // Create C Major scale.
builder.setKeySignature("D", "Major");         // Create D Major scale.
builder.setKeySignature("A", "Natural Minor"); // Create A natural minor scale.
```

Here is list of supported scale types:
- `"Major"`
- `"Natural Minor"`
- `"Harmonic Minor"`
- `"Ionian"`
- `"Dorian"`
- `"Phrygian"`
- `"Lydian"`
- `"Mixolydian"`
- `"Aeolian"`
- `"Locrian"`
- `"Major Pentatonic"`
- `"Minor Pentatonic"`
- `"Major Hexatonic Blues"`
- `"Minor Hexatonic Blues"`
- `"Heptatonic Blues"`

## Live Example

<LiveExample code={ExampleCode} />
