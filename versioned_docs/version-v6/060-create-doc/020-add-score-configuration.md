---
sidebar_position: 20
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-score-cfg";
import Hint from "@site/src/Components/Hint";

# Add Score Configuration


```ts
// For example add staff line with G-clef.
builder.setScoreConfiguration({ type: "staff", clef: "G" });

// Add measure because score configuration takes place in next measure, which will also be on a new row.
builder.addMeasure();
```

## Configuration Objects

### Staff Configuration Object

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

### Tab Configuration Object

```ts
builder.setScoreConfiguration({
    type: "tab",            // "tab" configuration.
    name: "tab1",           // (optional) tab name.
    tuning: ["E2", "A2", "D3", "G3", "B3", "E4"], // (optional) tuning. Standard tuning if omitted.
    voiceId: [4],           // (optional) voices that are presented in this tab.
    instrument: "Guitar"    // (optional) consecutive staves/tabs with same name are grouped together.
});
```

### Multiple Configuration Objects

```ts
// You can set multiple staves or tabs per row using an array.
builder.setScoreConfiguration([
    { type: "staff", clef: "G", isOctaveDown: true },
    { type: "tab" }
]);
```

<Hint>
`instrument` name tip:
 * `"!Piano"` hides instrument name.
 * `"!{Piano"` hides both instrument name and the system left brace.
 </Hint>

## Preset Values

Here are presets value with equal configuration objects:

- `"treble"` - staff with treble G-clef.
```ts
builder.setScoreConfiguration("treble");
// Equals
builder.setScoreConfiguration({
    type: "staff", clef: "G"
});
```

- `"bass"` - staff with bass F-clef.
```ts
builder.setScoreConfiguration("bass");
// Equals
builder.setScoreConfiguration({
    type: "staff", clef: "F"
});
```

- `"grand"` - grand staff (treble and bas staves).
```ts
builder.setScoreConfiguration("grand");
// Equals
builder.setScoreConfiguration([
    { type: "staff", clef: "G", grandId: "grand1" },
    { type: "staff", clef: "F", grandId: "grand1" }
]);
```

- `"guitarTreble"` - Same as `"treble"` but one octave down.
```ts
builder.setScoreConfiguration("guitarTreble");
// Equals
builder.setScoreConfiguration({
    type: "staff", clef: "G", isOctaveDown: true
});
```

- `"guitarTab"` - guitar tab.
```ts
builder.setScoreConfiguration("guitarTab");
// Equals
builder.setScoreConfiguration({
    type: "tab"
});
```

- `"guitarCombined"` - treble and tab for guitar.
```ts
builder.setScoreConfiguration("guitarCombined");
// Equals
builder.setScoreConfiguration([
    { type: "staff", clef: "G", isOctaveDown: true },
    { type: "tab" }
]);
```

## Live Example

<LiveExample code={ExampleCode} />
