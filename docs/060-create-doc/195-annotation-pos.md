---
sidebar_position: 195
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/annotation-pos";

# Annotation Position

By default annotations (and lyrics) are positioned above or below first staff/tab of row,
and that position depends on annotation group.

## Alternative Functions

There are alternative functions to add annotation.

| Function        | Alternative       |
|-----------------|-------------------|
| `addAnnotation` | `addAnnotationTo` |
| `addSpan`       | `addSpanTo`       |
| `addLyrics`     | `addLyricsTo`     |

These alternative functions containe extra first argument: `staffTarget`.

`staffTarget` decides the staff/tab of row where this annotation will be added to. It can be:
- Staff/tab id.
- Staff/tab/group name.
- Array of above ids or names.

### Examples

```ts
// Add annotation to top staff/tab (id 0).
builder.addAnnotationTo(0, "p");

// Add annotation to top two staves/tabs (id 0 and 1).
builder.addAnnotationTo([0, 1], "p");

// Add annotation to a named staff, tab or group.
builder.addAnnotationTo("staff1", "p");
```

## Staff Groups

Staff group contains annotation positioning information.

```ts
builder.addStaffGroup(groupName, staffTarget, verticalPosition?);
```

Arguments:

`groupName` is name of the group, e.g. `"grp1"`

`staffTarget` decides the staff/tab of row where this annotation will be added to. It can be:
- Staff/tab id.
- Staff/tab/group name.
- Array of above ids or names.

`verticalPosition` (optional) can be:
- `"above"`: above staff/tab.
- `"below"`: below staff/tab.
- `"both"`: both above and below staff/tab.
- `"auto"`: default position.

### Examples

```ts
// This staff group layouts annotations above top staff/tab.
builder.addStaffGroup("grp1", 0, "above");

// This staff group layouts annotations below second staff/tab from top.
builder.addStaffGroup("grp2", [1], "below");

// This staff group layouts annotations above and below tab named "tab1".
builder.addStaffGroup("grp3", "staff1", "both");

// This staff group layouts annotations to their default positions in "staff1" and "tab1".
builder.addStaffGroup("grp4", ["staff1", "tab1"], "auto");
```

## Live Example

<LiveExample code={ExampleCode} />
