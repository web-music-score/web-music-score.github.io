---
sidebar_position: 110
---

# Migrating From Version 6

Most of the changes are already present in latest v6 version, and v7 is "clean the mess" update.

## Audio

- `audio` module was updated with built-in support for general midi instruments.
- Removed `audio-synth` and `audio-cg` instrument modules.

## Annotation

`builder.addAnnotation` was simplified. Now there are only two functions:
- `addAnnotation(annotationKind, annotationOptions?)` 
- `addAnnotation(annotationKind, annotationGroup, annotationOptions?)`

Following functions were merged into annotation:

Replaced `addNavigation` with `addAnnotation`.
 - `builder.addAnnotation("startRepeat")`
 - `builder.addAnnotation("endRepeat", { playCount: 2 })`
 - etc.

Replaced `addLabel` with `addAnnotation`.
 - `builder.addAnnotation("E", "pitchLabel")`
 - `builder.addAnnotation("Dm", "chordLabel")`

Replaced `addFermata` with `addAnnotation`.
 - `builder.addAnnotation("fermata")`
 - `builder.addAnnotation("fermata", { anchor: "rightBarLine" })`

Also:
 - Removed enum `DynamicsAnnotation`, `TempoAnnotation` and `ArticulationAnnotation`, use `AnnotationKind`.
 - Removed enum `Annotation`, use `AnnotationGroup`.
 - Renamed `AnnotationOptions.repeatCount`    to `AnnotationOptions.playCount`.
 - Renamed `AnnotationOptions.endingPassages` to `AnnotationOptions.playNumbers`.

## Span

New feature in v7 is a `addSpan`, whichs replaced `addExtension`.
It replaces extension line, which was removed.

- v6: `builder.addAnnotation("dim.").addExtension(ext => ext.beats(4))`.
- v7: `builder.addSpan("dim.", span => span.beats(4))`

## Removed Deprecated

Here is list of other deprecated stuff that were removed, with possible replacement:

| Removed Deprecated         | Use Instead/See       |
|----------------------------|-----------------------|
| `ReactUI.MusicScoreView`   | `ReactUI.WmsView`     |
| `ReactUI.PlaybackButtons`  | `ReactUI.WmsControls` |
| `Score.MRenderContext`     | `Score.WmsView`       |
| `Score.MPlaybackButtons`   | `Score.WmsControls`   |
| `Score.MPlayer`            | `Score.Player`        |
| `Score.WmsControls.setPlayButton`     | `setSinglePlay`, `setSinglePlayStop`, `setPlayStop`, `setPlayPauseStop` |
| `Score.WmsControls.setStopButton`     | --"--     |
| `Score.WmsControls.setPlayStopButton` | --"--     |
| `Score.WmsControls.setPauseButton`    | --"--     |
| `Core.MusicErrorType`      | - |
| `NoteOptions.staccato`     | `addNote().addAnnotation("staccato")` |
| `Paint`/color system       | Some coloring using options' `color` property. |
| `Score.ScoreStaffPosEvent` | Event system had been updated. |
