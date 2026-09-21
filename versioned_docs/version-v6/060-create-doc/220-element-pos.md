---
sidebar_position: 220
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/element-pos";

# Element Position

## Add Staff Group

Add a staff group that contains element positioning information.

```ts
builder.addStaffGroup(groupName, staffTabOrGroup, verticalPosition?);
```

Arguments:

`groupName`

Name of the group, e.g. `"grp1"`

`staffTabOrGroup`

Explained above.

`verticalPosition` (optional)

Element position can be
- `"above"`: above staff/tab.
- `"below"`: below staff/tab.
- `"both"`: both above and below staff/tab.
- `"auto"`: default position.

## Examples

Following staff group layouts elements above top staff/tab.
```ts
builder.addStaffGroup("grp1", 0, "above");
```

Following staff group layouts elements below second staff/tab from top.
```ts
builder.addStaffGroup("grp2", [1], "below");
```

Following staff group layouts elements above and below tab named "tab1".
```ts
builder.addStaffGroup("grp3", "tab1", "both");
```

Following staff group layouts elements to their default positions in "staff1" and "tab1".
```ts
builder.addStaffGroup("grp4", ["staff1", "tab1"], "auto");
```

## Set Element Position

There are alternative functions to add elements.

| Function        | Alternative       |
|-----------------|-------------------|
| `addLyrics`     | `addLyricsTo`     |
| `addFermata`    | `addFermataTo`    |
| `addNavigation` | `addNavigationTo` |
| `addAnnotation` | `addAnnotationTo` |
| `addLabel`      | `addLabelTo`      |

These alternative functions containe extra first argument: `staffTabOrGroup`.

`staffTabOrGroup` tells where this element will be added to, and it can be:

1. Staff/tab id.
2. Staff/tab/group name.
3. Array of above ids or names.

## Examples

Add element to top staff/tab (id 0).

```ts
builder.addLabelTo(0, "chord", "Am");
```

Add label to top two staves/tabs (id 0 and 1).

```ts
builder.addLabelTo([0, 1], "chord", "Am");
```

Add label to a named staff, tab or group.

```ts
builder.addLabelTo("staff1", "chord", "Am");
builder.addLabelTo("grp1", "chord", "Am");
```

## Live Example

<LiveExample code={ExampleCode} />
