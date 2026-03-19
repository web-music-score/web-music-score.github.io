---
sidebar_position: 20
---

# TS React Example

Use your favourite method to create TypeScript React app.

This example is using vite.

I prefer TypeScript but you can as well create JavaScript app.

## Create Project

```bash
npm create vite@latest my-app -- --template react-ts
cd ./my-app
```

## Install WebMusicScore

```bash
npm install --save-dev web-music-score
```

## Edit Source Code

Edit the `src/App.tsx` source file for this simple example.

```ts
// Import lib modules
import * as Score from 'web-music-score/score';
import * as ReactUI from 'web-music-score/react-ui';

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
doc.loadInstruments();

// Get player
const player = doc.getDefaultPlayer();

// Create App with view and controls
function App() {
    return (
        <>
            <h1>TS React Example</h1>
            <ReactUI.WmsView doc={doc} />
            <br />
            <ReactUI.WmsControls player={player} />
        </>
    )
}

export default App
```

# Start App

```bash
npm run dev
````
