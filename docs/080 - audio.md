---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-audio";
import Hint from "@site/src/Components/Hint";

# Audio

## Planned for 6.4.x

For version 6.4.x there will be audio update and a separate package for instrument samples, `web-music-score-samples`.
It will contain samples for about ten most common instruments, and
each instrument will have a corresponding built-in synthesizer.

## 6.3.x and Earlier

Version 6.3.x has only two instruments: `ClassicalGuitar` and `Synthesizer`. `Synthesizer` is installed by default and `ClassicalGuitar` can be loaded.

```ts
// Import
import { ClassicalGuitar } from "web-music-score/audio-cg";

// Or require
const { ClassicalGuitar } = require()"web-music-score/audio-cg");
```

```html
<!-- Or load script via unpkg or jsDelivr CDM -->
<script src="https://unpkg.com/web-music-score@6.3.8/dist/iife/audio-cg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.3.8/dist/iife/audio-cg.js"></script>
<script>
    const { ClassicalGuitar } = window.AudioCG;
</script>
```

## Add Instrument

```ts
// In this example add the ClassicalGuitar imported in previous section.
Audio.addInstrument(ClassicalGuitar);
```

## Manage Instruments

```ts
Audio.getInstrumentList();               // Get array of instrument names.
Audio.getCurrentInstrument();            // Get current instrument name.
Audio.useInstrument("Classical Guitar"); // Set instrument for playback.
```

## Playing Notes

```ts
Audio.playNote(note, duration?, linearVolume?);
Audio.stop();
```

## Muting

```ts
Audio.mute();
Audio.unmute();
Audio.isMuted();
```

## Live Example

<LiveExample code={ExampleCode} />
