---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-audio";
import Hint from "@site/src/Components/Hint";

# Audio

## Planned for 6.4.x

Version 6.4.x (currently in 6.4.0-pre.9) will automatically register instruments and load
samples dynamically at runtime. This keeps bundle smaller and there is not longer need to
manually add instruments.

Use currently supported instruments:

```ts
Audio.useInstrument("Synthesizer");
Audio.useInstrument("Classical Guitar");
```

Small collection of most common instruments is planned.

## 6.3.x and Earlier

Version 6.3.x has only two instruments: `ClassicalGuitar` and `Synthesizer`. `Synthesizer` is installed by default and `ClassicalGuitar` can be loaded.

```ts
// Import
import { ClassicalGuitar } from "web-music-score/audio-cg";

// Or require
const { ClassicalGuitar } = require("web-music-score/audio-cg");
```

```html
<!-- Or load script via unpkg or jsDelivr CDM -->
<script src="https://unpkg.com/web-music-score@6.3.9/dist/iife/audio-cg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.3.9/dist/iife/audio-cg.js"></script>
<script>
    const { ClassicalGuitar } = window.AudioCG;
</script>
```

```ts
// Add instrument
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
