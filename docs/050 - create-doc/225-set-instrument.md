---
sidebar_position: 225
---

import { LiveExample } from "@site/src/Components/LiveExample";
import ExampleCode from "@site/src/docs/examples/v6/set-instrument";
import Hint from "@site/src/Components/Hint";

# Set Instrument

## Version 6.4.x

Version 6.4.0 brings built-in support for midi instruments (all 128 except percussives).

### Set Default Instrument

```ts
// Set default intrument to "Acoustic Grand Piano".
Audio.setDefaultInstrument("Acoustic Grand Piano");

// Set default intrument to "Acoustic Grand Piano" (midi program 0).
Audio.setDefaultInstrument(0);

// Get default instrument name.
Audio.getDefaultInstrument();
```

### Set Instruments for Document Voices

```ts
// Set "Acoustic Grand Piano" for voiceId 0.
builder.setInstrument(0, "Acoustic Grand Piano");

// Set "Bright Acoustic Piano" (midi program 1) for voiceIds 0, 1, 2 and 3.
builder.setInstrument([0, 1, 2, 3], 1);
```

Default instrument is used for voices if instrument has not been set (or is set to undefined).

### Manage Instruments

```ts
// Get instrument name by midi program (returns undefined for invalid program).
Audio.getMidiInstrumentName(5); // "Electric Piano 2"

// Get list of all instruments.
Audio.getInstrumentList();
```

```ts
// Load all instruments required by document.
const doc = builder.getDocument();
doc.loadInstruments()
    .then(() => { console.log("Instruments loaded."); });
    .catch(err => console.error("Failed to load instruments:", err));

// Load singe instrument.
Audio.loadInstrument("Electric Piano 1")
    .then(() => { console.log("Instrument loaded."); });
    .catch(err => console.error("Failed to load instrument:", err));
```

## Version 6.3.x and Earlier

Version 6.3.x has only two instruments: `ClassicalGuitar` and `Synthesizer`.

`Synthesizer` is installed by default.

`ClassicalGuitar` can be added manually.

### Add Classical Guitar
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

### Manage Instruments

```ts
// Set instrument for playback.
Audio.useInstrument("Synthesizer");
Audio.useInstrument("Classical Guitar");

// Get current instrument name.
Audio.getCurrentInstrument();

// Get list of instrument names.
Audio.getInstrumentList();
```

## Muting

You can mute and unmute all audio.

```ts
Audio.mute();
Audio.unmute();
Audio.isMuted();
```

## Live Example for Version 6.4.x

<LiveExample code={ExampleCode} />
