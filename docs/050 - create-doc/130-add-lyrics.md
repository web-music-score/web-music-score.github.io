---
sidebar_position: 130
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-lyrics";

# Add Lyrics

Add lyrics with this function similar to `addNote`.

```ts
builder.addLyrics(verse, lyricsLength, lyrics, lyricsOptions?);
```

Arguments:

`verse`

Verse number can be `1`, `2` or `3`.

`lyricsLength`

Lyrics length is same as `noteLength`, e.g. `"1n"`, `"2n"`, `"2."`, `"4.."`, etc.

`lyrics`

This is the lyrics/syllable typeof `string`, or `string[]` to add multiple syllabes at once.

`lyricsOptions`

Lyrics options is an object.

```ts
{
    // string alignment
    align: "left" | "center" | "right",
    // hyphen
    // `-` (hyphen): a short line centered between this and next syllable.
    // `---` (extender): a long line between this and next syllable.
    hyphen: "-" | "---"
}
```

## Examples

```ts
builder.addLyrics(1, "4n", "La");                      // Add syllable "La", quarter note length, verse 1.
builder.addLyrics(1, "4n", ["La", "la", "la", "la"]);  // Add multiple syllables, each quarter note length, verse 1.
builder.addLyrics(2, "4n", "La", { align: "left" });   // Left align syllable.
builder.addLyrics(2, "4n", "La", { align: "center" }); // Center align syllable.
builder.addLyrics(2, "4n", "La", { align: "right" });  // Right align syllable.
builder.addLyrics(3, "4n", "La", { hyphen: "-" });     // Add hyphen.
builder.addLyrics(3, "4n", "La", { hyphen: "---" });   // Add extender.
```

## Live Example

<LiveExample code={ExampleCode} />
