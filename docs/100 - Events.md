---
sidebar_position: 100
---

import { DeprecatedRename } from '@site/src/Components/ChangeNote' ;
import Hint from '@site/src/Components/Hint';
import NewFeature from '@site/src/Components/NewFeature';
import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/event-handling";

# Events

<NewFeature since="6.4.0">Events: Upcoming release 6.4.0 will have updated event handling.</NewFeature>

## Use Events

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

## Live Example

<LiveExample code={ExampleCode} />
