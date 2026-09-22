---
sidebar_position: 220
---

import { LiveExample } from "@site/src/Components/LiveExample/v7";
import ExampleCode from "@site/src/docs/examples/v7/element-pos";

# Element Position

## Add Staff Group

Add a staff group that contains element positioning information.

```ts
builder.addStaffGroup(groupName, staffTarget, verticalPosition?);
```

Arguments:

`groupName` is the name of group, e.g. `"grp1"`

`staffTarget` tells where this element will be added to, and it can be:

- Staff/tab id.
- Staff/tab/group name.
- Array of above ids or names.

`verticalPosition` (optional) can be:

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
| `addAnnotation` | `addAnnotationTo` |

These alternative functions containe extra first argument: `staffTarget`.

`staffTarget` tells where this element will be added to, and it can be:

- Staff/tab id.
- Staff/tab/group name.
- Array of above ids or names.

## Examples

Add annotation to top staff/tab (id 0).

```ts
builder.addAnnotationTo(0, "p");
```

Add annotation to top two staves/tabs (id 0 and 1).

```ts
builder.addAnnotationTo([0, 1], "pp");
```

Add annotation to a named staff group.

```ts
builder.addAnnotationTo("staff1", "f");
builder.addAnnotationTo("grp1", "ff");
```

## Live Example

<LiveExample code={ExampleCode} />
