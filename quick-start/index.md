---
sidebar_position: 1
---

# HTML File Demo

This is a simple working HTML file demonstration.

Copy the code into a HTML file and open the file in a web browser.

```html
<!doctype html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Example</title>
</head>

<body>
    <h1>HTML Example</h1>

    <script src="https://cdn.jsdelivr.net/npm/web-music-score@6.4.1/dist/iife/index.js"></script>

    <wms-view id="viewId"></wms-view>
    <br />
    <wms-controls id="controlsId" play-pause-stop></wms-controls>
    <br />

    <script>
        // Get lib modules
        const { Score } = window.WebMusicScore;

        // Create music document
        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setTimeSignature("3/4")
            .setKeySignature("G Major")
            .setInstrument(0, "Banjo")
            .addNote(0, ["G4", "B4", "D5"], "4n")
            .addMeasure()
            .addChord(0, ["G4", "B4", "D5"], "2.", { arpeggio: true })
            .getDocument();

        // Load instruments
        doc.loadInstruments()
            .catch(err => console.error("Failed to load instruments:", err));

        // Get player
        const player = doc.getDefaultPlayer();

        // Bind doc and player to HTML elements
        doc.bindElement("viewId");
        player.bindElement("controlsId");
    </script>
</body>

</html>
```