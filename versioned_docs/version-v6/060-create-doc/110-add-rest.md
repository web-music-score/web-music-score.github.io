---
sidebar_position: 110
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/add-rest";

# Add Rest

```ts
// Add rest.
builder.addRest(voiceId, restLength, restOptions?);

// Example: add quarter rest
builder.addRest(0, "4n");
```

Arguments:
- `voiceId`
    There are 4 voice tracks: `0`, `1`, `2` and `3`.

- `restLength`
    Rest length (equal to note length) can be:
    - `"1n"` (whole note), `"2n"` (half note), etc.
    - `"4."` (dotted quarter note), `"4.."` (double dotted quarter note), etc.

- `restOptions` (optional)
    Rest options is object. All fields are optional.

```ts
{
    staffPos: Note | string | number, // position on staff (e.g. "C4")
    hide: boolean                     // invisible rest
}
```

## Live Example

<LiveExample code={ExampleCode} />

