# Science Game 6: Magnet Sweep Rescue UI

## Reference and layout

Implemented the supplied Game 6 reference in Phaser, with a warm laboratory, a large steel sample tray, a red horseshoe magnet, and a separate recovery panel. Labels identify sand, wood, iron nails, and stone or copper. Three challenges and the score remain dynamic.

The shared title, counter, Help, Settings and Back lanes remain consistent with the other minigames. Game 6 supplies an optional panel/control skin; existing games keep the default skin.

### Design choices

- Palette: navy #101B30, parchment #E9CF98, timber #5C350F, gold #F5C554, purple #4C2294, green #256020. Cyan identifies recovery progress.
- Type: Pixelify Sans, with large game titles, clear counters, and compact two-line control guidance.
- Composition: illustrated sample tray dominates the left; recovered material, feedback, Reset/Retry, and Check/Next share the right container. Back and a short activity summary occupy the bottom.
- Materials and magnet remain separate interactive sprites. Art is never a flattened screenshot of buttons or game state.
- Generated trays retain their aspect ratio. Runtime texture frames remove transparent padding without changing original PNGs or other games' sprite sizing.

```text
DAY / TITLE / CHALLENGE / SCORE / ? / SETTINGS
             current objective
sample tray + draggable magnet | recovered iron
                               | recovery tray
                               | observation
release + keyboard cue         | reset / check
BACK | short activity summary
```

### Navigation coordinates

All positions use the 1280 × 720 game canvas:

| Control | Center |
| --- | --- |
| How to play | 1135, 37 |
| Settings | 1209, 37 |
| Back | 46, 678 |

## Assets and generation

Generated using the built-in image generation tool. The supplied reference guided the three initial generation requests. The sample tray then received one edit for a more overhead perspective. Original generated files remain in the Codex generated-images directory. Project copies are loaded by BootScene.

| Project asset | Mode | Background |
| --- | --- | --- |
| public/assets/ui/science-quarter/magnet-workshop/workshop-backdrop.png | Generate | Opaque |
| public/assets/ui/science-quarter/magnet-workshop/sample-tray.png | Generate, then edit | Genuine alpha transparency |
| public/assets/ui/science-quarter/magnet-workshop/recovery-tray.png | Generate | Genuine alpha transparency |

Reused the existing magnet, iron-nail, wood-chip, pebble and copper-piece sprites. Reused the existing courtroom frame as a scalable metal/timber panel treatment. Buttons, labels, attraction sparks and dividers are rendered live in Phaser.

### Generation prompts

#### workshop-backdrop

Mode: generate. Transparent background: false.

Reference image role: visual style and environment only; do not reproduce its UI. Create a NEW 16:9 background plate for LUMIFY Magnet Sweep Rescue. Authentic crisp handcrafted fantasy pixel art matching the attached warm stone laboratory and timber bench. Cozy dark-blue stone wall, wooden shelves with a few bottles and books in upper third, amber lantern glow on both sides. A broad warm wooden workbench extends across the lower two-thirds; its tabletop is clear and visually quiet so a large interactive sample tray can be placed over it. Upper shelves should stay subdued. Keep center and right free of foreground clutter. Warm directional light, readable square pixel clusters, limited color ramps. NO interface, text, buttons, frames, labels, trays, magnets, nails, wood chips or copper pieces on the bench; these are separate interactive assets. Full opaque background, no watermark, no photorealistic or 3D rendering.

#### sample-tray

Mode: generate. Transparent background: true.

Reference image role: style and sample-tray perspective only. Generate exactly ONE standalone shallow rectangular metal sample tray for a LUMIFY fantasy pixel-art game. Wide horizontal three-quarter top-down view, approximately 2.7:1 width-to-height silhouette, front face visible. Sturdy grey steel rim, bevelled corners, bright silver lip, dark slate inner bed. A thin irregular layer of golden sand grains is scattered only inside the tray, with open patches of metal visible. NO nails, magnet, wood pieces, copper pieces, labels, arrows, text, hands, table, environment, or extra objects. Match the reference crisp square pixels and polished retro shading, no smooth 3D or blurry antialiasing. Occupy about 95% of a wide horizontal canvas with small transparent padding. Outside the tray must be genuine fully transparent PNG alpha 0. Tray interior must remain opaque. The complete tray, rim and front edge must fit in frame.

#### recovery-tray

Mode: generate. Transparent background: true.

Reference image role: style and empty recovery-tray perspective only. Generate exactly ONE standalone EMPTY shallow rectangular steel recovery tray for a LUMIFY fantasy pixel-art game. Wide horizontal three-quarter top-down view, approximately 2.5:1 width-to-height silhouette, front face visible. Grey steel sides and bevelled corners, thin bright silver rim, cool slate-grey interior with restrained pixel-cluster mottling. Completely empty: NO sand, nails, magnet, wood, copper, labels, text, hands, table, environment, or extra objects. Match the reference crisp square pixels and polished retro shading, no smooth 3D or blur. Occupy about 95% of a wide horizontal canvas, small transparent padding. Outside the tray must be genuine transparent PNG alpha 0; interior opaque. Keep full tray and rim inside canvas.

#### Sample tray perspective revision

Mode: edit. Input: the initially generated sample-tray.png. Transparent background: true.

Edit the attached standalone metal sample tray. Preserve its crisp fantasy pixel art, golden sand, grey steel rim, opaque interior and genuine transparent surroundings. Reproject it from a HIGHER, more overhead camera angle so the tray bed has substantially more vertical depth. Its visible sprite silhouette must be approximately 2.6:1 width to height, not an ultra-wide 4:1 strip. Use a 4:3 canvas with transparent padding. Keep the entire tray visible, its front edge modest in height, and the sand spread thinly throughout the enlarged interior with open patches of grey metal. Exactly one isolated tray, NO nails, wood, copper, magnets, text, labels, UI or environment. Deliberate crisp square pixel clusters, no blur, smooth painting or 3D render. All area outside the tray must be alpha zero.

## Behavior

- Drag the magnet, tap a sample piece, or use arrow keys to move.
- Only iron is attracted; sand, wood, stone and copper stay behind.
- Held nails follow the magnet; Space or Release to Tray deposits them into the recovery tray.
- All three nails must be released before Check Result passes.
- Reset clears an experiment. Retry replaces the completed challenge score rather than adding it twice.
- Complete three challenges to save progress and return to the lesson map.
- Help and Settings block experiment input and preserve state when closed.
- No timer or pause control. The illustrated How to Play remains available at the shared position.

## Verification

Final results on 12 October 2026: production build passed, all 9 Science logic unit tests passed, both focused Game 6 Playwright viewport tests passed, and the desktop Games 1–5 navigation regression passed. The build retains the existing large-bundle advisory.

- Production build.
- Science logic unit suite, including magnetic material selection and conservation.
- Focused Playwright flow on desktop and a 390-pixel-wide viewport: actual menu and map entry, drag, tapping nonmagnetic materials, arrow keys, Space, help/settings, invalid check, reset, retry, all three challenges, saved progress and entry into the next game.
- Shared navigation regression for Games 1–5 on desktop.
- PNG inspection: transparent trays contain both zero and fully opaque alpha; their surrounding canvas is transparent. No raster cleanup was used.

## Screenshots

Final screenshot sets are saved in screenshots/magnet-workshop/desktop and screenshots/magnet-workshop/mobile-width:

- initial.png
- copper-challenge.png (matches the reference's second challenge, with one nail recovered and another held)
- completed.png
- how-to-play.png

The narrow viewport keeps the project's existing scaled 16:9 canvas rather than reflowing the activity into a separate mobile layout.

