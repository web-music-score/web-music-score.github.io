---
sidebar_position: 110
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-rest";

# Add Rest

Add a rest.

```ts
builder.addRest(voiceId, restLength, restOptions?);

// Example: add quarter rest
builder.addRest(0, "4n");
```

Arguments:

`voiceId`

There are 4 voice tracks: `0`, `1`, `2` and `3`.

`restLength`

Rest length (equal to note length) can be:
- `"1n"` (whole note), `"2n"` (quarter note), etc.
- `"2."` (dotted quarter note), `"2.."` (double dotted quarter note), etc.

`restOptions` (optional)

Rest options is object. All fields are optional.

```ts
{
    staffPos: Note | string | number, // vertical position on staff (e.g. "C4")
    hide: boolean                     // invisible rest (still affects playing)
}
```

## Live Example

<LiveExample code={ExampleCode} />

