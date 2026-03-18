---
sidebar_position: 10
---

# Features

This library is a web component for creating and rendering musical scores
in the browser. It gives developers programmatic control over notation,
layout, and playback using TypeScript or JavaScript.

## 🎸 What Is It For

Ideal for developers building:
- Music applications.
- Educational tools.
- Interactive score displays.

## 📌 Compatibility

- Bundled in ESM, CJS and IIFE formats.
- The target JavaScript version is ES6/ES2015.
- No polyfills are included.
- IIFE bundle available via `unpkg` and `jsDelivr`

## 🎼 Document Builder

Build music documents with `Score.DocumentBuilder`:
- Score configurations (staves, tabs)
- Measures.
- Rows - manual or auto number of measures per row.
- Header - title, composer and arranger.
- Key signature
- Time signature
- Tempo
- Notes
- Chords
- Rests
- Triplets, generic tuplets
- Lyrics
- Fermata
- Navigation (e.g. repeats, endings)
- Annotation (e.g. 'ff', 'acccel.')
- Label
- Extension line
- Connective (tie, slur and slide)
- Repeat builder section
- Automatic beams

## 🎵 View

Rendering options:
- React component `ReactUI.WmsView`
- Custom HTML element `<wms-view>`
- Plain JavaScript `Score.WmsView`

## 🧰 Controls

Controls options:
- React component `ReactUI.WmsControls`
- Custom HTML element `<wms-controls>`
- Plain JavaScript `Score.WmsControls`

Button configurations:
- Single play button
- Single togglable play/stop button
- Play,  stop buttons
- Play, pause, stop buttons 

## 🎧 Playback

Supports play, pause and stop.

Easy playback using:
- Controls
- Programmatically
- Built-in support for General MIDI instruments
