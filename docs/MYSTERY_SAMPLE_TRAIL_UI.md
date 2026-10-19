# Mystery Sample Trail — Science Game 16

Implemented 13 October 2026 from the supplied reference. Play through **Vulcan Caverns → Quarter 1 → Mixtures and Separation in Action → first lesson**. [Game 17](RECOVERY_KIT_QUEST_UI.md), [Game 18](SEPARATION_RELAY_UI.md), and [Game 19](FAIR_TEST_ARENA_UI.md) occupy the next three lessons; Game 20 and all added Q2–Q4 lessons remain empty placeholders.

The warm workshop, wooden-lidded jar, earlier stirred sample, enlarged view, parchment evidence notebook, cyan headings, conclusion menus, and grouped result controls follow the reference. Text and controls are rendered in Phaser; the screen is not a flattened image. Help, the Settings gear, and Back retain the shared navigation positions. The logical canvas is 1280×720 and fits the viewport.

## Play and learning evidence

Three untimed investigations:

| Sample | Required observations | Supported conclusion |
| --- | --- | --- |
| Salt dissolved in water | Inspect the even appearance; let it rest and observe no sediment. | Salt + water; uniform. |
| Sand in water | Inspect visible grains; let it rest and observe sediment beneath clearer water. | Sand + water; non-uniform. |
| Iron with sand | Inspect two visible materials; test a portion with the magnet and observe only iron move. | Iron + sand; non-uniform. |

**Inspect** takes an enlarged observation portion. **Stir Sample / Mix Sample** reverses the visible resting/magnetic state while retaining previously recorded observations. **Let It Rest / Test Magnet** records the case's diagnostic behavior. The preparation record supplies the known ingredients: appearance alone does not identify an arbitrary unknown. No tasting is involved. The enlarged sand view is an illustrative grain view, not a molecular model.

Both conclusion menus contain explicit choices. Check Result requires the relevant observations and both correct answers. Incorrect answers receive a specific hint and can be revised. Each check records the answers, evidence available, attempt number, and correctness in a separate `answers` entry; completed challenge records preserve that history in the existing browser-local Science save. Reset/Retry starts a fresh attempt. Retrying a completed challenge replaces its score rather than awarding it twice. Alignment: `S6MT-Ia-c-1`.

## Artwork and generation prompts

Reused assets: the Science workshop backdrop, sample tray, sand, salt, iron nail, and magnet. New assets were generated with the built-in image-generation tool; originals remain under `C:/Users/rotse/.codex/generated_images/01a133af-746e-77b1-a00a-633e094ae818/`.

### Transparent specimen jar

Project asset: [specimen-jar.png](../public/assets/ui/science-quarter/mystery-sample/specimen-jar.png), 1024×1536, with transparent central glass interior and corners. Original: `exec-e8bd5d9f-6d1b-46ae-b573-fc6a61e99865.png`. Game contents are drawn beneath this sprite.

```text
Create a single game asset on transparent background: an EMPTY clear glass specimen jar with a chunky closed golden oak wooden screw lid, straight-on frontal view, squat wide shoulders and tall cylindrical body, roughly 2:3 width to height. Rich hand-crafted pixel art in a cozy medieval fantasy science workshop style, crisp visible square pixel clusters, dark navy outlines, blue-white glass edge reflections, warm golden lid with bands. Jar centered with small padding, no cast shadow outside jar, no table, no background, no text, no labels, no other objects, no water, no grains, no contents. Interior must be genuinely transparent so the game can draw sample contents underneath; highlights limited to edges and a few translucent thin reflection streaks. Entire lid and glass silhouette visible. Production-ready separate sprite, not a UI mockup.
```

### Enlarged sand-grain tile

Project asset: [sand-grains.png](../public/assets/ui/science-quarter/mystery-sample/sand-grains.png), 1254×1254, opaque. Original: `exec-c47144dd-fab6-4951-884c-208417c9391f.png`.

```text
A single square 1:1 educational pixel-art texture tile showing an enlarged view of dry sand grains, densely packed distinct irregular coarse grains in warm ivory cream tan ochre amber and dark brown, a few pale gray grains. Macro specimen illustration, not actual molecules. Crisply shaded chunky visible square pixel clusters with dark outlines, polished 32-bit fantasy science game aesthetic. No text, no UI, no frames, no tools, no background scenery, no water. Edge-to-edge sand grains only. Clearly separate individual grain shapes, no smooth realism. Production-ready sand-grain inspection tile.
```

## Verification

- Pure logic tests cover evidence requirements, supported ingredients/types, reversible visible tests, deduplicated observations, and the remaining blank quarter slots.
- Playwright covers the real map launch, all three cases, blocked guesses, wrong-type revisions, Help/Settings guards, resets/retries, persisted answer history, completion, Back, and the adjacent Coming Soon lesson on desktop and narrow screens.
- Screenshots: [settled reference state](../screenshots/mystery-sample/desktop/settled-reference.png), [magnetic response](../screenshots/mystery-sample/desktop/magnetic-response.png), [instructions](../screenshots/mystery-sample/desktop/help.png), and [narrow screen](../screenshots/mystery-sample/mobile-width/settled-reference.png).
- Production build and the Impeccable detector pass.

## Layout revision � 15 October 2026

Game 16 now uses a quieter bench, one shared comparison area, and a compact evidence notebook. Observation text is top-aligned beside completion marks, and the two conclusion fields use separate rows with wider dropdowns. Feedback has its own space above the result controls. The workshop artwork, pixel fonts, three investigations, and scoring are preserved.

Conclusion menus close with Escape or an outside click; dismissing one does not leave the lesson or activate the experiment underneath. The shared scene change is guarded to Mystery Sample Trail. Games 17�20 and the shared jar renderer are unchanged by this revision. The existing 1280�720 canvas still scales to fit narrow viewports.
