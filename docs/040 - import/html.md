---
sidebar_position: 40
---

import Hint from "@site/src/Components/Hint";

# Use With HTML

IIFE bundles are available via unpkg and jsDelivr CDNs to use directly in HTML documents.
Modules can be accessed using `window.WebMusicScore` global name.

```html
<!-- Use either one -->
<script src="https://unpkg.com/web-music-score@6.2.1/dist/iife/index.js"></script>
<script src="https://cdn.jsdelivr.net/npm/web-music-score@6.2.1/dist/iife/index.js"></script>

<script>
    const { Core, Audio, Pieces, Theory, Score } = window.WebMusicScore;
    const AudioCG = window.AudioCG;
</script>
```

<Hint>`ReactUI` is not available in IIFE bundle.</Hint>
