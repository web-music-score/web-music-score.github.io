---
sidebar_position: 20
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-score-cfg";
import Hint from "@site/src/Components/Hint";

# Add Score Configuration

For example add single treble staff line.

```ts
builder.setScoreConfiguration({ type: "staff", clef: "G" });
builder.addMeasure();
```

The new score configuration will be used in the next measure. It will
automatically begin a new row.

## Staff Config

```ts
builder.setScoreConfiguration({
    type: "staff",       // "staff" configuration.
    clef: "G",           // clef: "G" or "F".
    name: "staff1",      // (optional) staff name.
    isOctaveDown: false, // (optional) is octave down (for guitar).
    minNote: "C2",       // (optional) min allowed note.
    maxNote: "C6",       // (optional) max allowed note.
    voiceId: [0, 1],     // (optional) voices that are presented in this staff.
    instrument: "Piano"  // (optional) consecutive staves/tabs with same name are grouped together.
});
```

## Tab Config

```ts
builder.setScoreConfiguration({
    type: "tab",            // "tab" configuration.
    name: "tab1",           // (optional) tab name.
    tuning: ["E2", "A2", "D3", "G3", "B3", "E4"], // (optional) tuning. Standard tuning if omitted.
    voiceId: [4],           // (optional) voices that are presented in this tab.
    instrument: "Guitar"    // (optional) consecutive staves/tabs with same name are grouped together.
});
```

<Hint>
`instrument` name tip:
 * `"!Piano"` hides instrument name.
 * `"!{Piano"` hides both instrument name and the left brace of instrument group.
 </Hint>

## Preset Values

These preset values are available: `"treble"`, `"bass"`, `"grand"`,
`"guitarTreble"`, `"guitarTab"` and `"guitarCombined"`.

Here are presented each preset value with corresponding configuration setup.

Staff with treble G-clef.
```ts
builder.setScoreConfiguration("treble");
builder.setScoreConfiguration({
    type: "staff", clef: "G"
});
```

Staff with bass F-clef.
```ts
builder.setScoreConfiguration("bass");
builder.setScoreConfiguration({
    type: "staff", clef: "F"
});
```

Grand staff (treble and bas staves).
```ts
builder.setScoreConfiguration("grand");
builder.setScoreConfiguration([
    { type: "staff", clef: "G", grandId: "grand1" },
    { type: "staff", clef: "F", grandId: "grand1" }
]);
```

Same as `treble` but one octave down.
```ts
builder.setScoreConfiguration("guitarTreble");
builder.setScoreConfiguration({
    type: "staff", clef: "G", isOctaveDown: true
});
```

Guitar tab only.
```ts
builder.setScoreConfiguration("guitarTab");
builder.setScoreConfiguration({
    type: "tab"
});
```

Treble and tab for guitar.
```ts
builder.setScoreConfiguration("guitarCombined");
builder.setScoreConfiguration([
    { type: "staff", clef: "G", isOctaveDown: true },
    { type: "tab" }
]);
```

## Live Example

<LiveExample code={ExampleCode} />
