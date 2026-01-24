---
sidebar_position: 120
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-tuplet";
import Hint from "@site/src/Components/Hint";

# Add Tuplet

Add tuplet with this generig function.

```ts
builder.addTuplet(voiceId, tupletRatio, notes => {
    // Add a note to tuplet
    notes.addNote(note, noteLength, noteOptions?);
    // Add multiple notes to tuplet
    notes.addNote(notes, noteLength, noteOptions?);
    // Add a chord to tuplet
    notes.addChord(notes, noteLength, noteOptions?);
    // Add a rest to tuplet
    notes.addRest(restLength, restOptions?);
});
```

Arguments:

`tupletRatio`

Tuplet ratio is object `{ parts: number, inTimeOf: number }`.

Example: triplet tuplet ratio is `{ parts: 3, inTimeOf: 2 }`.

<Hint>For other arguments see [Add Note](./add-note) and [Add Rest](./add-rest).</Hint>

## Examples

```ts
// Example: add triplet of three eighth notes
builder.addTuplet(0, { parts: 3, inTimeOf: 2 }, notes => {
    notes.addNote("G3", "8n")
    notes.addNote("B3", "8n")
    notes.addNote("D4", "8n")
});

// Example: add triplet of eighth and quarter notes
builder.addTuplet(0, { parts: 3, inTimeOf: 2 }, notes => {
    notes.addNote("G3", "8n")
    notes.addNote("B3", "4n")
});

// Example: you can also create triplet with chords and rests
builder.addTuplet(0, { parts: 3, inTimeOf: 2 }, notes => {
    notes.addChord(["C3", "E3", "G3"], "8n")
    notes.addRest("4n")
});
```

## Another Way To Add Triplet

You can also add triplet by adding notes with special note length `"1t"`, `"2t"`, etc.

```ts
// Example: add triplet with eighth notes.
builder.addNote(0, "G3", "8t");
builder.addNote(0, "B3", "8t");
builder.addNote(0, "D4", "8t");

// Example: same as above
builder.addNote(0, ["G3", "B3", "D4"], "8t");
```

## Live Example

<LiveExample code={ExampleCode} />
