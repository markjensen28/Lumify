# Intro flow

Home Start fades the menu to black over two seconds, then requests `IntroScene`
once. Its script runs the cinematic, Quill's Grand Library dialogue,
a white fade into the clear world map, four seconds with the map unobstructed,
Quill's world introduction, and a white fade into the playable world map.
Ordinary returns from Vulcan go directly to the world with input enabled.

## Editing the script

Edit `src/config/intro.js`. The dialogue is placeholder story text. Each line has
`text` and a Quill `pose`: `default`, `talk`, or `sad`. These use the supplied
transparent images in `public/assets/characters/quill/`.
Click/tap anywhere, Space, or Enter advances one line. There are no response choices.

`clips` is an ordered list of cinematic texture keys. To add another clip, load
it in `BootScene` with `this.load.video` and append its key to the list.
`CutsceneSequence` plays each clip, handles unavailable media, and cleans up
video and keyboard listeners. SKIP or Escape skips cinema and begins dialogue.

## Existing assets

The supplied `cutscene-1.mp4` uses HEVC. Its H.264/AAC compatibility copy,
`cutscene-1-browser.mp4`, retains the cinematic and audio. The library dialogue
uses an exact frame from the original at 24 seconds: `cutscene-1-library.png`.
The originals are preserved. Recreate the derived files with:

```powershell
node scripts/prepareIntroVideo.mjs "path\to\ffmpeg.exe"
```

The introduction uses the clear `public/assets/world/lumora-world.png`.
The playable world uses `public/assets/world/3-pilot-world-map.png` exactly,
with its existing clouds. Vulcan Caverns, Reading Island, and Numeric Ruins
are unlocked by default in `src/config/content.js`. Every other island can be
previewed for its outline, name, and subject, but cannot be entered.
Hover shows island information immediately and moving away hides it.
Click an open island to enter; on a touch screen, tap once to preview and again
to enter. Subjects that have not been defined are shown as "Subject to be revealed".
Reading and Numeric open their respective existing map assets; their lessons
are not yet supplied, so their maps show a coming-soon notice. Vulcan retains
its existing quarter nodes and lessons.
The home menu uses the former `horizon-bg.png` background.
`CloudTransitionScene` and its transparent cloud clip remain reusable.

## Navigation and audio

The world has a compact gear button for Settings with Music, SFX, Back, and Exit. Exit ends the current
session and returns to the home menu; a subsequent Start begins a new intro.
Cinematic audio follows Music. Background music stops for the cinematic and
resumes for dialogue. Failed media advances into dialogue instead of trapping
the player. Inputs are disabled during white fades and the four-second map reveal,
so clicks and key presses cannot skip Quill's first world-introduction line.
The reveal time starts after the fade completes and is configured with
`revealDurationMs` on the world-introduction step in `src/config/intro.js`.

## Verification

`tests/intro.spec.js` covers natural playback, Skip, sequential dialogue,
white-fade input protection, repeat Start, Settings, and missing-video fallback.
`tests/cloud-transition.spec.js` verifies the retained cloud effect and repeated
Vulcan returns. The main smoke test also enters gameplay through the new intro.
