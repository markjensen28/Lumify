# LUMIFY — Visual Direction, World Map, and Interface Brief

**Status:** proposed art and interface specification, 10 October 2026. No art assets, narrative presentation, eight-realm map, or UI redesign in this document is implemented. The existing Phaser game remains the reference for feasibility.

## 1. The picture we are making

**High-detail fantasy pixel art with painterly shading and modern readability.** Lumora should feel like a place built and cared for by people who observe, measure, tell stories, make things, and share knowledge. Its magic is quiet and useful: living ink, warm lamps, calibrated structures, and fine threads of light. The Fading leaves gaps in those relationships. It does not turn the world into a battlefield or make a learner's mistakes dangerous.

The supplied reference image is a **composition and atmosphere reference**: compact adjacent regions, a bright central building, distinct terrain silhouettes, and lively light over water. The final geography is a **grounded coastal archipelago**: every shore meets the same ocean or lagoon, with shallow channels and tight visual spacing. No region levitates, exposes a rocky underside, or hangs above clouds. Translate the reference's richness into deliberate pixel clusters, clearer interaction hierarchy, and Lumora's own architecture. Do not copy the temple, coast shapes, props, or palette placement from the reference. The visual test is whether a Grade 6 learner immediately sees a connected world, a central Library, one inviting first destination, and other places worth wondering about.

### Art principles

1. **One world, many practices.** Repeat ivory Library stone, living-ink motifs, thread junctions, and small amber lamps across realm designs. Give each realm its own materials and silhouette, without making eight unrelated icons.
2. **Read big, reward close looking.** Each island needs one unmistakable landmark at map size; finer windows, tools, vegetation, and inscriptions reward a closer view. Detail must never swallow the click target or text.
3. **Hope inside damage.** Fading is missing pattern, incomplete light, quiet machinery, and obscured routes. Keep warm signs of life. Avoid skulls, hostile storms, or “the learner failed” imagery.
4. **Magic follows meaning.** Amber marks archives and Quill; cyan marks living connections and discovery; realm colors identify place. A bright thread is a readable route, not a score meter or automatic mastery claim.
5. **The interface belongs to the setting.** Cards, panels, tabs, and result frames feel like well-made Library instruments, while questions and answer choices remain the most legible objects on learning screens.

## 2. Art language and production constraints

| Element | Direction | Avoid |
|---|---|---|
| Pixel character | High-resolution pixel illustration with intentional clusters, stepped edges, selective texture, and shaded material planes. Define a common cluster/outline rule on a representative map crop before asset production. | Tiny 8-bit sprites enlarged until details become blocks; smooth painting merely passed through a pixel filter. |
| Depth | Layered coastal headlands and small sea-level islands, near/far value changes, shoreline shadows in water, and soft atmospheric haze. Keep a consistent three-quarter map view and one primary light direction. | Suspended landmasses, exposed floating-rock undersides, conflicting camera angles, or fully rendered detail on every distant silhouette. |
| Materials | Stone and parchment have warm, irregular edges; metals and crystals carry small sharp highlights; clouds have controlled, textured shapes. | Plastic gradients, generic neon outlines, flat vector fills. |
| Motion | Slow drifting clouds, occasional thread pulse, one or two landmark reactions. Movement should explain attention or change of state. | Constant full-screen particles, rapidly strobing clouds, perpetual shaking of unavailable realms. |
| Typography | Existing Pixelify Sans can remain for headings and short buttons; test a more readable companion face for long instructional text if needed. Use clear case, line spacing, and restrained outlines. | Dense all-caps paragraphs, bright cyan body text on light cream, decorative text over moving scenery. |

The game currently draws at **1280 × 720** with Phaser `FIT`, `pixelArt: true`, and `roundPixels: true` (`src/config/gameConfig.js`). Asset prototypes should be judged at that canvas size **and at its actual displayed size on a narrow screen**. A 1280-pixel image shrunk to a phone-width canvas makes map details and text too small; a future narrow-layout or accessible region-list design is necessary. Avoid declaring an asset pixel density or a new renderer setting before a representative slice is tested. Keep UI lettering rendered sharply at the final display scale rather than baking small labels into map art.

## 3. World map: the heart of Lumora

### Composition

The **Grand Library** sits on a central sea-level isle or headland and owns the brightest ivory and amber focal area. Eight realms are present from the first view in a close coastal constellation around it. Their silhouettes may overlap in depth, but no realm should disappear behind another or behind UI chrome. The cluster should feel like a once-unified network: several small thread anchor stones on each coast point inward to a Library hub. Use one continuous ocean or lagoon, short channels, and shared water reflections instead of vast empty gaps or literal roads and giant bridges. Magical threads may cross the water; land does not float above it.

The hierarchy at a glance is: **Library → active Vulcan thread → Vulcan Caverns → nearby misted landmasses → dark-cloud outer silhouettes**. Place a modest Library nameplate and one strong **Vulcan Caverns** nameplate where they do not cover landmarks. Reserve a small edge area for Back, a brief status legend, and an optional accessible region list. The map, not a wall of cards, remains the main surface.

**Concept placement, not final coordinates:** keep the Library near the center; Vulcan along the front-left coast as the first reachable destination; Numeric Ruins and Reading Island on opposite sides of the Library in the nearer depth band; arrange the five future silhouettes behind and around the remaining upper and lower coast. Vary height and size so the view reads as one compact shared shoreline, not a perfect clock face. A layout study must confirm that all nine **destination groups** (Library plus eight realms, including Hibla's multiple islets) remain identifiable at 1280 × 720 and in a narrow-screen alternative. The reference image's exact region positions are not canon.

### Realm art keys (writer/artist names; most names are hidden in the player map)

| Realm and subject | Silhouette and visible landmark | Lit palette and Fading cue | Map state at first launch |
|---|---|---|---|
| **Grand Library** | Broad ivory archive with stepped reading terraces, a central living-book lantern, and eight fine thread sockets. | Ivory, aged gold, parchment brown; a few sockets dim, one steady. | Center, named, not a new playable realm. |
| **Vulcan Caverns — Science** | Dark volcanic mass, sheltered workshop, lava seam, mineral terraces, and cyan-green crystal clusters. | Ember orange and red against charcoal; crystal and thread light remain clear. | Fully visible, named, selectable from the start. |
| **Numeric Ruins — Mathematics** | Measured arches and an unmistakable compass bridge on cool stone. | Slate, blue-gray, restrained geometric cyan; the bridge alignment and route break in light mist. | Near, softly obscured, unnamed, unavailable. |
| **Reading Island — English** | Sheltered story grove, reading house, and a tall message stone. | Sage, ink blue, lantern gold; living letters and the route soften in light mist. | Near, softly obscured, unnamed, unavailable. |
| **Hibla Archipelago — Filipino** | Two or three close reed islets with one woven sail or lantern-strung story house. | Reed gold and river teal when revealed; dark haze interrupts the woven inscription. | Future silhouette beneath dark magical clouds; unnamed. |
| **Tala Crossroads — Araling Panlipunan** | Layered map-stone plaza at intersecting waterways, with the Turning Atlas shape. | Copper, deep blue, weathered stone when revealed; chart layers misalign under storm haze. | Future silhouette beneath dark magical clouds; unnamed. |
| **Concord Grove — EsP** | Canopy basin with a circular listening space and a short shared-passage bridge. | Moss, warm wood, amber when revealed; bridge lamps lose their paired rhythm. | Future silhouette beneath dark magical clouds; unnamed. |
| **Hearthwork Terraces — EPP** | Stepped farm and maker-roof profile above warm springs. | Terracotta, wheat, tool steel when revealed; pattern-lit workstations go quiet. | Future silhouette beneath dark magical clouds; unnamed. |
| **Rhythm Shoals — MAPEH** | Crescent reef and four-part pavilion with an open performance roof. | Coral, sea blue, festival color when revealed; pavilion lights fall out of sequence. | Future silhouette beneath dark magical clouds; unnamed. |

The five future rows are **worldbuilding art keys only**. They do not imply levels, questions, analytics, navigation, or a current release schedule. Likewise, Numeric and Reading belong to the three-subject capstone scope but have no playable content in the audited prototype.

### Access states and interaction

| State | Environmental treatment | Thread and label | Click/tap response, if a new map is built |
|---|---|---|---|
| **Active route: Vulcan** | Richest local contrast, a lit entrance and visible worksite; the terrain remains partly Faded. | Thin continuous cyan-gold thread; **Vulcan Caverns** is named. | Opens the existing Vulcan map. Do not require Science completion to access it. |
| **Near route awaiting playable content: Numeric/Reading** | Light mist across the route and lower half of each island, with its landmark silhouette still readable. No heavy black tint. | Fine interrupted thread with a few visible segments; **no realm or subject name by default**. | A short neutral message such as “This nearby route isn't open yet.” No promise about how to unlock it. |
| **Outer sealed folio: five future realms** | Layered charcoal-violet clouds with colored edges; partial, beautiful silhouettes remain visible. Cloud shapes vary so all five can be counted. | A faint thread emerges from the Library then disappears into cloud; **no realm or subject name by default**. | “A distant realm lies beyond this chapter.” No lesson or unlock instruction. |

Large padlocks and uniform black overlays should not carry the state distinction. A small seal mark can support the state for clarity, especially in a text legend. **Names appear on the player map only for the Grand Library and unlocked realms.** A map hover, focus, click, tooltip, list, or optional atlas must not leak the identities of inaccessible realms in this release. The design document keeps all eight official names for planning. If a later release makes a realm playable, its living-ink nameplate can resolve as part of that release's introduction.

**Lore logic:** the active Vulcan thread is the first route the Keepers can still verify as stable and safe for a learner, and its local reports offer a clear question to investigate. The closer Numeric and Reading routes are charted in the archive but cannot yet be offered as playable journeys. The five distant folios cannot be safely traced through their darker obscuration in this chapter. The clouds and mist are **how the Library chart renders weakened knowledge paths**, not a claim that every resident lives inside a permanent storm. Keepers may know archived names; the live map withholds a nameplate because it cannot currently verify a route. Quill can say, “This thread still answers. We can begin in Vulcan.” His sentence must not suggest that finishing Science automatically opens another path.

### Threads and restoration

Threads originate at the Library's eight sockets and disappear behind terrain/cloud layers with believable depth. Keep them thinner and quieter than island outlines, with only the active route bright enough to trace at a glance. Use knots, gaps, and dimming to depict the Fading; avoid portraying a severed route as a huge bridge that a child must magically repair. The Library and Vulcan share a subtle pulse on map entry. **Planned**, future local restoration may steady a few lights in Vulcan or one short segment of its existing thread; it must not brighten a locked realm, reveal its name, or imply world-wide mastery. Per-student restoration belongs to that student's independent game instance, consistent with the current V2 lore.

## 4. UI system that belongs to the map

The existing UI already has cream paper surfaces, brown edging, cyan accents, Pixelify Sans, and large buttons (`src/ui/ui.js`). Preserve those recognizers and make their roles consistent:

| Role | Proposed visual use | Example tokens for exploration, not final approved colors |
|---|---|---|
| Background depth | Charcoal-blue sky and softened realm scenery under panels. | `#202737`, `#3E5267` |
| Panel frame | Deep walnut and dark ink, with small stepped stone/paper corner motifs. | `#3B2D2A`, `#2F2927` |
| Reading surface | Warm parchment or pale cream, plain behind questions. | `#F5E6C7`, `#FFF3D8` |
| Main text | Dark ink on parchment; warm cream on dark panels. | `#2F2927`, `#FFF3D8` |
| Action | Cyan for active edges, small highlights, thread light; **dark teal for text on cream**. | `#67E0EF`, `#195A6D` |
| Milestone | Amber used sparingly for Library voice and lasting local repair. | `#E9B75B` |
| Caution/locked | Mist or cloud plus text/status icon, not red error or blacked-out content. | Light slate / muted violet |

These hex values are starting points, not a contrast certification. In particular, the current bright cyan lettering on a cream button can be hard to read; reserve bright cyan for glow or edges and test a darker text color. Active, disabled, hovered, focused, selected, correct, and review-needed states need distinct **shape/text** cues as well as color. A wrong answer should remain a calm invitation to review, not a red flash over the world.

### Components and screen consistency

- **Header:** short location or activity title in a common Library frame. Keep subject/place context visible without repeating a giant logo.
- **Cards and choices:** cream reading plane, dark ink, generous spacing, consistent selection border, icon only where it clarifies the task. Reserve one calm visual zone for educational content.
- **Buttons:** a clear primary action, quieter secondary actions, consistent sizes and labels. Avoid fitting too many buttons along one row at narrow widths.
- **Panels/modals:** dark walnut frame, parchment interior, small cyan thread motif at a corner. The overlay dims the scene without erasing it. Result panels show what happened and the next available action, not a lore speech.
- **Quill:** planned portrait or limited animation. Keep folded ears/tail, uneven parchment creases, living-ink marks, amber eyes, small mantle, and apprentice hat readable at small size. He sits near a dialogue edge, never atop an answer or map landmark. His tiny spell reveals a clue; it does not perform the learner's reasoning.
- **Feedback:** visual language scales from a brief glimmer for engagement to a steadier *local* cue only after educator-approved mastery. These are future narrative states, not current game behavior.

| Existing scene/surface | Art direction opportunity | Status |
|---|---|---|
| `MenuScene` | Let the horizon lead into a distant glimpse of the Library; keep Start/Settings/Exit prominent. | Current menu exists; Library view is new. |
| `IslandSelectScene` | Replace the three isolated island composition with the central Library and eight-realm constellation. Use environmental obscuring and active thread route. | Current screen shows three illustrated islands, Vulcan nameplate, and locks; redesign is new. |
| `IslandMapScene` | Carry Vulcan's rock, crystals, and workshop light into quarter navigation. | Current Vulcan map and quarter nodes exist; cohesive redraw is adaptable. |
| `QuarterDetailScene` | Give the lesson path a clear route through a Vulcan worksite; keep lesson titles and controls more prominent than decoration. | Current path exists; environmental framing is adaptable. |
| Five Science mini-games | Keep each activity's mechanics. Wrap memory cards in the Mixture Gallery, sorting in a supply station, sample comparison at an observation desk, Science Court in an evidence hall, and Workshop at a maker bench. Use the same card, feedback, and Quill-portrait grammar. | Activities exist; visual and narrative framing is proposed. |
| `AssessmentScene` | A Library field-note style: same reading surface and choice states, quieter scenery, clear formative/summative label. Keep assessment separate from the preceding mini-game. | Current assessment exists; reskin is adaptable. |
| Results / feedback | Show a small local-world reaction without equating score to mastery; preserve the available assessment path even after a mini-game loss. | Current result modals exist; restoration response is new. |
| Records screen | Use the same Library record visual language **if a records screen is built**. Do not present it as an existing scene or promise stored progress. | Future only. |

## 5. Atmosphere, sound, and access

The map should sound like a quiet inhabited world: soft wind and page movement, low Library tones, a warmer ember texture near Vulcan, and a restrained thread chime on route selection. Audio is optional and cannot be the only way to tell an active route from a sealed one. Use brief loops and avoid dramatic alarm sounds for inaccessible places or wrong answers. These sounds are **new asset proposals**.

For motion-sensitive learners, replace drifting/pulsing loops with still clouds and a single gentle state change. Focus indicators, text equivalents for route status, keyboard access, and tap targets need design and implementation work; the current prototype is primarily pointer driven. Since hidden names are part of the intended discovery, an accessible list should describe **location and availability** (“Near route to the left — unavailable”), not secretly announce subject names. A teacher-facing catalog can state curriculum scope outside the player map if needed. Captions or visible text carry any sound cue or Quill line. Map labels should be real UI text rather than baked into art so scaling and localization remain possible.

## 6. Production path and acceptance checks

1. **Approve the silhouette/layout study:** one grayscale 1280 × 720 composition and one narrow-screen treatment; verify a countable Library plus eight realms, clear active route, and an unobscured first click target.
2. **Make a style slice:** Library, Vulcan, one misted primary realm, one dark-cloud future silhouette, one thread, one UI card, and a small Quill portrait. Compare at native and displayed sizes before multiplying assets.
3. **Build the map asset set and UI kit:** separate background, landmass, cloud, thread, highlight, and text layers so access states can change without repainting a giant flattened image. This is an asset/design recommendation, not an implementation request here.
4. **Adapt existing screens:** move the common panel/card language into menu, path, five games, assessment, and results. Preserve all mini-game rules and assessment access.
5. **Add narrative presentation later:** Quill, dialogue, local glimmer, persistent restoration, and major milestones require story state and separate technical work. Do not advertise them as current features.

Review the concept against these questions: Can a new learner find Vulcan in three seconds? Can they count eight other-region silhouettes without reading names? Are near and distant unavailable areas visibly different without relying on padlocks or color alone? Does the Library feel central? Does any brightened detail falsely promise a realm unlock or imply that one correct answer restores a world? Can a learner read every question at the actual displayed size?

## 7. Source and decision notes

- **Player-supplied direction:** `C:\Users\rotse\.codex\attachments\61b19ce0-52b9-4430-9095-910697488810\Pasted text.txt` and the image supplied with this request. The brief sets the desired style, all-eight-realm visibility, access hierarchy, labels, thread connections, and UI identity.
- **Current narrative:** `docs/lore/LUMIFY_LORE_V2.md` and `LUMIFY_World_and_Lore_Design.md`. The Living Weave, independent student instances, Quill's paper-fox design, and the realm names are preserved.
- **Current game:** `LUMIFY_GAME_SIDE_AUDIT.md`, `src/config/gameConfig.js`, `src/config/content.js`, `src/scenes/IslandSelectScene.js`, `src/ui/ui.js`, and `screenshots/Islands-sample.png` / `screenshots/Main-menu-sample.png`. The current selection screen has three realms, no Library hub, and no five-future-realm art.
- **Generation handoff:** `docs/art-direction/LUMIFY_ASSET_AND_MUSIC_PROMPTS.md` gives separate coastal map, scene, Quill, UI, and realm-music prompts. It preserves the ocean-grounded geography clarified after this brief was first written.
- **Decisions to approve before production:** final map arrangement after a readability study; final accessible narrow-screen presentation; whether later releases reveal realm names with the route or in a separate story beat. Recommendation: reveal a name only with its playable route, preserving the first-chapter mystery.
