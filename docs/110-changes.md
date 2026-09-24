---
sidebar_position: 110
---

# Changes From v6 To v7

Version 6 was heavily developed and resulted quite messy with many changes.
Most of the changes already in latest minor version of v6.
So v7 is more like "clean the mess" update.

## Audio Update

- `audio` module was updated with built-in support for general midi instruments.
- Removed `audio-synth` and `audio-cg` instrument modules.

## Add Annotation Update

`builder.addAnnotation` was simplified. Now there are only two `addAnnotation` functions:
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

Removed enum `DynamicsAnnotation`, `TempoAnnotation` and `ArticulationAnnotation`, use `AnnotationKind`.

Removed enum `Annotation`, use `AnnotationGroup`.

Renamed `AnnotationOptions.repeatCount`    to `AnnotationOptions.playCount`.

Renamed `AnnotationOptions.endingPassages` to `AnnotationOptions.playNumbers`.

## Add Span Update

Span a new feature in v7, is annotation with span. It replaces extension.

- v6: `builder.addAnnotation("dim.").addExtension(ext => ext.beats(4))`.
- v7: `builder.addSpan("dim.", span => span.beats(4))`

## Other changes

Following is some other deprecations that were removed, and possible replacement:

| Removed                   | Use Instead/See       |
|---------------------------|-----------------------|
| `ReactUI.MusicScoreView`  | `ReactUI.WmsView`     |
| `ReactUI.PlaybackButtons` | `ReactUI.WmsControls` |
| `Score.MRenderContext`    | `Score.WmsView`       |
| `Score.MPlaybackButtons`  | `Score.WmsControls`   |
| `Score.MPlayer`           | `Score.Player`        |
| `Score.WmsControls.setPlayButton`     | `setSinglePlay`, `setSinglePlayStop`, `setPlayStop`, `setPlayPauseStop` |
| `Score.WmsControls.setStopButton`     | --"--     |
| `Score.WmsControls.setPlayStopButton` | --"--     |
| `Score.WmsControls.setPauseButton`    | --"--     |
| `Core.MusicErrorType`     | N/A                   |
| `NoteOptions.staccato`    | `addNote().addAnnotation("staccato")` |
| `Paint`/color system      | Some coloring using options' `color` property. |
| `Score.ScoreStaffPosEvent` | Event system had been updated. |
