---
sidebar_position: 10
---

# HTML Example

Here is a very simple working HTML example file.
Simply copy the code into a HTML file and open the file in a web browser.

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

    <script src="https://cdn.jsdelivr.net/npm/web-music-score@6.4.0/dist/iife/index.js"></script>

    <wms-view id="viewId"></wms-view>
    <br />
    <wms-controls id="controlsId" play-pause-stop></wms-controls>
    <br />

    <script>
        const { Score } = window.WebMusicScore;

        const doc = new Score.DocumentBuilder()
            .setScoreConfiguration("treble")
            .setTimeSignature("3/4")
            .setKeySignature("G Major")
            .setInstrument(0, "Banjo")
            .addNote(0, ["G4", "B4", "D5"], "4n")
            .addMeasure()
            .addChord(0, ["G4", "B4", "D5"], "2.", { arpeggio: true })
            .getDocument();

        doc.loadInstruments();
        
        const player = doc.getDefaultPlayer();

        doc.bindElement("viewId");
        player.bindElement("controlsId");
    </script>
</body>

</html>
```