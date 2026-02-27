---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-audio";
import Hint from "@site/src/Components/Hint";

# Audio

## Load Instrument

### Planned for 6.4.x

Version 6.4.x comes with built-in synthesizers and a separate package for instrument samples, `web-music-score-samples`.

Currently `ClassicalGuitar` is only instrument but a small collection is planned.

```bash
npm install --save-dev web-music-score-samples
```

```ts
import { ClassicalGuitar } from "web-music-score-samples/classical-guitar";
```

```html
<!-- unpkg or jsDelivr -->
<script src="https://unpkg.com/web-music-score-samples@1.0.0/dist/iife/classical-guitar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web-music-score-samples@1.0.0/dist/iife/classical-guitar.js"></script>

<script>
    const { ClassicalGuitar } = window.WebMusicScore.Samples;
</script>
```

### 6.3.x and Earlier

Version 6.3.x has only two instruments: `ClassicalGuitar` and `Synthesizer`. `Synthesizer` is installed by default and `ClassicalGuitar` can be loaded.

```ts
import { ClassicalGuitar } from "web-music-score/audio-cg";
```

```html
<!-- unpkg or jsDelivr -->
<script src="https://unpkg.com/web-music-score@6.3.8/dist/iife/audio-cg.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.3.8/dist/iife/audio-cg.js"></script>

<script>
    const { ClassicalGuitar } = window.AudioCG;
</script>
```

## Add Instrument

```ts
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
