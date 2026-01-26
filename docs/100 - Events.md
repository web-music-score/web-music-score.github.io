---
sidebar_position: 100
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import Hint from '@site/src/Components/Hint';
import NewFeature from '@site/src/Components/NewFeature';
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCodeReact from "@site/src/docs/examples/v6/events-react";
import ExampleCodePlainJS from "@site/src/docs/examples/v6/events-plain-js";

# Events

<NewFeature since="6.4.0">Events: Upcoming v6.4.0 release will have updated and documented event handling.</NewFeature>

```ts
function onScoreEvent(event: Score.ScoreEvent) {
    // Event type can be "enter", "leave" or "click"
    console.log(`Event type:   ${event.type}`);

    // Is it ScoreStaffEvent?
    if (Score.ScoreStaffEvent.is(event)) {
        console.log("ScoreStaffEvent");

        // Some note event variables.
        console.log(`Note name:    ${event.noteName}`);
        console.log(`Diatonic id:  ${event.diatonicId}`);
        console.log(`Accidental:   ${event.accidental}`);
        console.log(`Chromatic id: ${event.chromaticId}`);
        console.log(`MIDI number:  ${event.midiNumber}`);

        // You can play clicked note.
        if(event.type === "click") {
            // With note name.
            Audio.playNote(event.noteName);
            // Or with midi number.
            Audio.playNote(event.midiNumber);
        }

        // Hilight the staff position on the view.
        const staffPos = { staff: event.staff, diatonicId: event.diatonicId }
        event.view.hilightStaffPos(event.type === "leave" ? undefined : staffPos);
    }

    // Is it ScoreObjectEevent?
    if (Score.ScoreObjectEvent.is(event)) {
        console.log("ScoreObjectEvent");

        // Event has object stack from root to top in hierarchy.
        console.log(`Object stack: ${event.objects.map(o => o.name).join(" -> ")}`);

        // Easily use top object.
        console.log(`Top object: ${event.topObjects.name}`);

        // Find objects.
        const measure = event.findObject(obj => obj.name === "Measure");

        // Hilight objects on the view.
        event.view.hilightObject(event.type === "leave" ? undefined : event.topObject);
    }
}
```

## Live Examples

### React JSX/TSX

<LiveExample code={ExampleCodeReact} />

### Plain JS

<LiveExample code={ExampleCodePlainJS} />

<Hint>Use HTML/JS version without <code>React.useEffect()</code>, just add HTML elements before JS code.</Hint>
