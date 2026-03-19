---
sidebar_position: 90
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-note";

# Add Note

Add single note.

```ts
builder.addNote(voiceId, note, noteLength, noteOptions?);

// Example: add quarter note "C4" with upward stem
builder.addNote(0, "C4", "4n", { stem: "up" });
```
Add multiple notes (array of notes sequentially).

```ts
builder.addNote(voiceId, notes, noteLength, noteOptions?);

// Example: add half notes "C3" and "D3" with downward stem
builder.addNote(0, ["C3", "D3"], "2n", { stem: "down" });
```

Add chord (array of notes on top of each other).

```ts
builder.addChord(voiceId, notes, noteLength, noteOptions?);

// Example: add dotted half note C chord, play as arpeggio
builder.addChord(0, ["C3", "E3", "G3"], "2.", { arpeggio: "up" });
```
Arguments:

- `voiceId`
    There are 4 voice tracks: `0`, `1`, `2` and `3`.

- `note`/`notes`
    Note (e.g. "C4") / array of notes.

- `noteLength`
    Note length can be:
    - `"1n"` (whole note), `"2n"` (half note), etc.
    - `"4."` (dotted quarter note), `"4.."` (double dotted quarter note), etc.

- `noteOptions` (optional)
    Note options is object. All fields are optional.

```ts
{
    stem: "up" | "down" | "auto", // stem direction
    staccato: boolean,            // show and play in staccato
    diamond: boolean,             // show diamond note head
    arpeggio: "up" | "down",      // show and play in arpeggio
    string: StringNumber          // for tab: string to show fret number of this note on
}
```

## Live Example

<LiveExample code={ExampleCode} />
