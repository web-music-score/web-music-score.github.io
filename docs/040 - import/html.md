---
sidebar_position: 40
---

import Hint from "@site/src/Components/Hint";

# Use With HTML

IIFE bundles are available via unpkg and jsDelivr CDNs to use directly in HTML documents.

<Hint>Use correct versio number when loading scripts via CDN.</Hint>

## Load WebMusicScore

Main library modules can be accessed using `window.WebMusicScore` global variable.

```html
<!-- Load script via unpkg CDN -->
<script src="https://unpkg.com/web-music-score@6.3.5/dist/iife/index.js"></script>

<!-- Or load script via jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.3.5/dist/iife/index.js"></script>

<script>
    const { Core, Audio, Pieces, Theory, Score } = window.WebMusicScore;
</script>
```

<Hint>`ReactUI` module is not available in IIFE bundle.</Hint>

## Load AudioCG

Classical guitar module can be accessed using `window.AudioCG` global variable.

```html
<!-- Load script via unpkg CDN -->
<script src="https://unpkg.com/web-music-score@6.3.5/dist/iife/audio-cg.js"></script>

<!-- Or load script via jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.3.5/dist/iife/audio-cg.js"></script>

<script>
    const AudioCG = window.AudioCG;
</script>
```
