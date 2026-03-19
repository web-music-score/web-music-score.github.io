---
sidebar_position: 240
---

# Tab Fretting

You can have a guitar tab in score configuration. 
You can specify a string for displaying the fret number of a note.

E.g. show fret number on string 3 for note "G3".

```ts
builder.addNote(0, "G3", "8n", { string: 3 });
```

When adding multiple notes at once then `string` value can be an array.

```ts
builder.addNote(0, ["C3", "G3"], "8n", { string: [5, 3] });
```

Array also works when adding chords.

```ts
builder.addChord(0, ["E4", "C3"], "8n", { string: [1, 5] });
```
