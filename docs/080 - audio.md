---
sidebar_position: 80
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/use-audio";
import Hint from "@site/src/Components/Hint";

# Audio

## Add Instrument

```ts
const { Synthesizer } = AudioSynth;  // Not required, is installed by default.
const { ClassicalGuitar } = AudioCG;

Audio.addInstrument(ClassicalGuitar);
```

<Hint>This will also set the instrument active for playback.</Hint>

## Manage instruments

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
