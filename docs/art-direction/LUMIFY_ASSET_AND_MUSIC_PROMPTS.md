# LUMIFY — Asset and Music Generation Sheet

**Purpose:** Copy-ready prompts for the planned visual redesign of Lumora. Prepared from the supplied art reference, the 10 October 2026 visual brief, current V2 lore, and the inspected Phaser prototype. These are **generation requests and proposed file names**, not assets already installed in the game.

## Read this before generating

**Geography correction:** Lumora's map is a **compact ocean-grounded archipelago**, not a set of floating rock platforms. All coasts and small isles meet one continuous lagoon/sea at water level. The reference image guides density, color, and the central-landmark composition; its suspended edges, waterfalls into a void, and exact structures are not to be copied. Use “coastal realm,” “sea-level isle,” “headland,” or “archipelago” in prompts rather than “floating island.”

**Shared style:** oblique 3/4 top-down view for map art; high-detail modern fantasy pixel art; deliberate pixel clusters; painterly pixel shading; readable silhouettes; warm upper-left light; clear material separation; magical yet welcoming Grade 6 storybook mood. Avoid 8-bit blocks, smooth vector art, photorealism, horror, combat, and recognizable commercial designs. **No text, labels, logos, buttons, or watermarks inside generated pictures.** The game should render names and learning text itself.

**Production rule:** Generate a whole-map **composition guide** first, then matching layers. Use the same guide as a visual reference for later generations if your workflow allows it. Every map region must share camera angle, waterline, lighting, scale, and shoreline treatment. Prefer transparent-background region cutouts and overlays; inspect actual transparency before importing. If a tool returns a solid background, remove it during asset preparation. Do not bake mist, storm clouds, route labels, or thread glow into a realm cutout; those are separate layers so states can change.

**Canvas target:** current Phaser game is 1280 × 720, `FIT` scaling. Ask for **16:9** on whole-screen backdrops; **square or near-square** for map region cutouts; **wide horizontal** for panels. Review at the game's displayed size, especially on phones. These are art targets, not claims about the Playground's export controls.

### What your Playground screenshots already show

The screenshots show assets named **World of Lumora Theme**, **Parchment Modal Frame**, **Vulcan Caverns Preview Scene**, **Vulcan Caverns Island**, **Verdant Tales Island**, **Crystal Sanctum Island**, and **Sunken Spire Island**. Their generated versions are not in this repository's `public/assets` folder as inspected for this sheet. Review and reuse them only if they match the grounded-coast direction. The shown island prompts say “floating island,” so those region images likely need a grounded revision. **Verdant Tales** may be a visual candidate for canonical **Reading Island** after review; **Crystal Sanctum** and **Sunken Spire** are not current realm names and should not be substituted for Numeric Ruins or any sealed realm without a deliberate design decision. The existing world theme does not need a new prompt.

## Generation order and manifest

| Stage | Asset IDs | Why |
|---|---|---|
| **Map foundation** | M00–M06 | Lock composition, ocean, Library, and three primary realms first. |
| **Future map silhouettes** | M07–M11 | Show all five future realms on the map without building their interiors or activities. |
| **Map presentation** | M12–M16 | Mist, dark cloud, routes, and one reusable blank nameplate. |
| **Story and Vulcan screens** | S01–S12 | Library opening, Vulcan navigation and lesson path, five Science activity backdrops, assessment, menu, and a local restoration cue. Generate when those screens or story states are being redesigned. |
| **Character and UI** | U01–U04 | Quill and reusable interface pieces. Review the existing Playground modal frame before regenerating U03. |
| **Music** | B01–B03 | Vulcan, Numeric, Reading. The world-map theme is already in the Playground; Numeric and Reading themes are for eventual playable releases. |
| **Optional sound cues** | F01–F03 | Small map/restoration cues if audio presentation is added later. |

**Smallest useful generation batch now:** M00 for visual approval; M01–M05, M07–M13, and M16 for a layered eight-realm map; U01 if Quill will appear; B01 for Vulcan music. M06 is a quick optional readability study, M14–M15 can be drawn in Phaser instead of generated, and S/U assets can follow screen redesign. Generate B02–B03 if you want future themes ready, while keeping Numeric and Reading locked in the current game.

Each entry below gives **Name**, **type**, **use field**, **suggested target**, and the complete **look/sound prompt**. The target names are handoff suggestions; no directories or code are created by this document.

## A. World map image assets

### M00 — Lumora complete-map composition guide

- **Type:** Image / concept reference; generate first, not necessarily a runtime image.
- **How will this be used?** Establish the final coastline layout and scale before generating separate map layers.
- **Suggested target:** `art-source/lumora-map-composition-guide.png`, 16:9.
- **Prompt:**

> Oblique 3/4 top-down overview of Lumora, a compact fantasy archipelago grounded in one luminous blue lagoon, high-detail modern fantasy pixel art with painterly pixel shading and readable silhouettes. At the center, an original ivory-and-amber Grand Library on a sea-level stone isle. Eight nearby coastal realm groups, all countable and closely spaced: a clear volcanic Science coast to the lower left; cool geometric mathematical ruins and a green literary oak-grove coast nearby; five smaller distinct outer coast silhouettes suggesting woven reed islets, a civic map plaza, a listening grove, maker terraces, and a crescent arts-and-health shore. Fine magical knowledge threads converge on the Library across short water channels. Only the Science route is visibly active. Two nearby regions have light mist; five outer regions have layered dark-violet magical cloud with terrain still visible. Warm upper-left sunlight, rich but gentle storybook color, clean room for UI at outer margins, 16:9 composition. Original architecture and geography, no written labels, no text, no logos, no characters. **Every shoreline touches the same sea: no floating islands, no exposed rock undersides, no sky below the land, no waterfalls into a void, no giant bridges.**

### M01 — Continuous Lumora ocean and sky base

- **Type:** Background.
- **How will this be used?** Reusable water, horizon, and atmospheric base beneath the map regions.
- **Suggested target:** `public/assets/world-map/lumora-ocean-base.png`, 16:9, at least the 1280 × 720 design canvas.
- **Prompt:**

> Wide 16:9 environmental background for an oblique 3/4 top-down fantasy world map in high-detail modern pixel art with painterly pixel shading. One continuous calm sapphire and turquoise lagoon, shallow water gradients, gentle wave clusters, small reflected amber and cyan light, distant pale horizon only near the upper edge, soft welcoming daylight from upper left. The middle remains visually calm so separate coastal region cutouts can be placed there. Compact shared-water atmosphere rather than a vast empty ocean. No islands, no buildings, no routes, no clouds hiding the map, no characters, no text, no UI, no logo, no floating land or void.

### M02 — Grand Library central coast

- **Type:** Image cutout.
- **How will this be used?** Main map focal point and origin of all knowledge threads.
- **Suggested target:** `public/assets/world-map/grand-library-coast.png`, transparent outside the terrain.
- **Prompt:**

> Oblique 3/4 top-down **sea-level coastal cutout** for a compact fantasy lagoon map, high-detail modern fantasy pixel art with painterly pixel shading. The Grand Library: original ancient living archive in ivory stone and warm parchment-colored roofs, stepped reading terraces, a central amber book-lantern, eight small subtle thread-anchor sockets around its shore, a few sheltered trees and gentle cyan reflected light. It is majestic and welcoming, not a fortress or a copied Greek temple. Tight shoreline meets calm turquoise water at normal sea level; no separate ocean or sky background outside the coast, transparent background beyond its boundary. Warm upper-left light, readable single large landmark at map size, no text, no signs, no characters, no floating island, no rocky underside, no waterfall into a void, no logo.

### M03 — Vulcan Caverns coastal realm

- **Type:** Image cutout.
- **How will this be used?** First unlocked Science destination on the world map.
- **Suggested target:** `public/assets/world-map/vulcan-coast.png`, transparent outside the terrain.
- **Prompt:**

> Oblique 3/4 top-down **ocean-grounded volcanic coast** for a compact shared-lagoon fantasy map, high-detail modern fantasy pixel art with painterly pixel shading. Vulcan Caverns, the Science realm: dark basalt cliffs rising from a real shoreline, a safe copper-lit cavern entrance, one restrained orange lava seam contained within rock, mineral terraces, a small observation workshop, turquoise-green crystal clusters, a visible cooling-water channel entering the lagoon. The active first route can meet an empty shoreline socket; do not draw the route itself. Warm upper-left light, adventurous and curious rather than dangerous. Strong readable volcanic silhouette at small map size, same waterline and camera angle as a central Library coast, transparent background outside the terrain. No hovering, no exposed underside, no void, no text, no locks, no characters, no logos.

### M04 — Numeric Ruins coastal realm

- **Type:** Image cutout.
- **How will this be used?** Nearby Mathematics realm, visible but currently unavailable; mist is added separately.
- **Suggested target:** `public/assets/world-map/numeric-coast.png`, transparent outside the terrain.
- **Prompt:**

> Oblique 3/4 top-down **sea-level stony peninsula** for a compact fantasy lagoon map, high-detail modern fantasy pixel art with painterly pixel shading. Numeric Ruins, the Mathematics realm: cool slate and blue-gray measured arches, a recognizable compass bridge crossing a narrow local inlet, patterned geometric courtyards, a partially misaligned calculation tower, delicate cyan calibration inlays. Scholarly, mysterious, and beautiful; a worn adaptive structure rather than broken ordinary physics. Natural rocky shore meets the same turquoise ocean at water level; no mist baked into this terrain asset, no separate sky or water background outside the region, transparent beyond its boundary. Warm upper-left light and the same camera scale as Vulcan and the Library. No floating island, no exposed rock underside, no text, digits, locks, characters, or logos.

### M05 — Reading Island coastal realm (revised full prompt)

- **Type:** Image cutout.
- **How will this be used?** Nearby English realm, visible but currently unavailable; replaces the floating-island treatment in the supplied complete prompt. Add light mist separately.
- **Suggested target:** `public/assets/world-map/reading-coast.png`, transparent outside the terrain.
- **Prompt:**

> Oblique 3/4 top-down view. **Ocean-grounded sea-level literary island coast** in high-detail modern fantasy pixel art featuring an enchanted literary grove, a massive ancient hollow oak tree with glowing amber windows inside its trunk, lush emerald canopy with gentle golden fireflies, a mossy ancient stone amphitheater, and a few paper lanterns suspended from branches above a sheltered reading path. Add one small message stone near the shore and a modest reading house woven into the grove. The island's soil and mossy rock slope naturally into the same calm turquoise lagoon as the other realms, with a visible waterline and short shallow channel toward the central Library. Painterly pixel shading, deliberate pixel clusters, warm upper-left light, hopeful storybook atmosphere, clear oak-tree silhouette at small map size. Generate this as a cutout with transparent background beyond the coast; **no floating island, no underside, no sky beneath it, no waterfalls into a void**. No text, book titles, labels, commercial icons, characters, logo, or copied design; original independent styling. Do not bake mist into this asset.

### M06 — Map silhouette check sheet

- **Type:** Image / optional planning aid.
- **How will this be used?** Check whether the Library and all eight realm groups remain distinct when reduced to map size; this is not a runtime asset.
- **Suggested target:** `art-source/lumora-map-silhouette-check.png`, 16:9.
- **Prompt:**

> Grayscale high-detail fantasy pixel-art silhouette study of a compact ocean-grounded Lumora archipelago in oblique 3/4 top-down view, 16:9. Central Library is the brightest and largest focal shape; immediately distinguishable volcanic coast, geometric ruins, and oak-grove coast; five smaller outer region groups each with a different coastline and landmark silhouette. All shores meet the same water, separated only by short channels, with generous negative space for two labels and back navigation. No color coding, no text, no symbols, no floating land, no exposed undersides. Prioritize thumbnail readability over small decorative detail.

### M07 — Hibla Archipelago distant coast

- **Type:** Image cutout, map-only future realm.
- **How will this be used?** One of five sealed outer silhouettes. No Filipino levels or interior scenes are planned for the current capstone.
- **Suggested target:** `public/assets/world-map/hibla-coast.png`.
- **Prompt:**

> Oblique 3/4 top-down cluster of **two or three connected sea-level reed islets** in one compact fantasy lagoon, high-detail modern fantasy pixel art with painterly pixel shading. Hibla Archipelago: woven sailways, a small lantern-strung story house, reed-gold banks, river-teal water-edge details, subtle patterned textiles inspired by the idea of weaving without claiming one Filipino tradition represents all. A distinctive woven-sail silhouette visible through later cloud cover. Warm upper-left light, same map scale and waterline as the Grand Library, transparent outside the coast cluster. Do not bake storm clouds into the land asset. No floating islands, no underside, no void, no text, national flags, characters, or logos.

### M08 — Tala Crossroads distant coast

- **Type:** Image cutout, map-only future realm.
- **How will this be used?** Sealed Araling Panlipunan silhouette; no current playable content.
- **Suggested target:** `public/assets/world-map/tala-coast.png`.
- **Prompt:**

> Oblique 3/4 top-down **sea-level river-delta headland** in a compact fantasy lagoon, high-detail modern fantasy pixel art with painterly pixel shading. Tala Crossroads: one layered civic plaza where short waterways meet, a large original rotating-map-stone landmark, low archive roofs and meeting steps, copper and weathered blue-gray stone, signs that old map layers no longer align. Distinct stepped plaza silhouette at small scale, warm upper-left light, same shoreline and camera scale as the Library, transparent beyond the terrain. No storm clouds baked into asset, no floating land, no exposed underside, no text, flags, political emblems, characters, or logos.

### M09 — Concord Grove distant coast

- **Type:** Image cutout, map-only future realm.
- **How will this be used?** Sealed EsP silhouette; no current playable content.
- **Suggested target:** `public/assets/world-map/concord-coast.png`.
- **Prompt:**

> Oblique 3/4 top-down **ocean-grounded wooded cove** in a compact fantasy lagoon, high-detail modern fantasy pixel art with painterly pixel shading. Concord Grove: a broad moss-green canopy surrounding a circular listening courtyard, one modest shared-passage bridge over a short stream, paired amber lamps, warm wooden shelters, calm welcoming atmosphere. The canopy and listening circle form an unmistakable silhouette even when later covered by magical cloud. Same warm upper-left light, camera, waterline, and scale as other Lumora realms; natural shore meets the lagoon, transparent background outside coast. No cloud baked in, no floating land, no underside, no text, characters, or logos.

### M10 — Hearthwork Terraces distant coast

- **Type:** Image cutout, map-only future realm.
- **How will this be used?** Sealed EPP silhouette; no current playable content.
- **Suggested target:** `public/assets/world-map/hearthwork-coast.png`.
- **Prompt:**

> Oblique 3/4 top-down **sea-level terraced coastal hillside** beside a compact shared fantasy lagoon, high-detail modern fantasy pixel art with painterly pixel shading. Hearthwork Terraces: clearly tiered gardens and small farms, warm maker sheds and cooking roofs, a many-hands market canopy, practical water channels and tool racks, terracotta, wheat, soft spring green, understated steel. One clear stair-step land profile visible through later cloud cover. Warm upper-left light; natural coast meets turquoise water at a normal waterline; same map angle and scale as the Grand Library, transparent outside terrain. No floating island, no exposed underside, no sky void, no cloud baked in, no text, characters, or logos.

### M11 — Rhythm Shoals distant coast

- **Type:** Image cutout, map-only future realm.
- **How will this be used?** Sealed MAPEH silhouette; no current playable content.
- **Suggested target:** `public/assets/world-map/rhythm-coast.png`.
- **Prompt:**

> Oblique 3/4 top-down **crescent-shaped sea-level reef coast** in a compact fantasy lagoon, high-detail modern fantasy pixel art with painterly pixel shading. Rhythm Shoals: an open four-part pavilion for music, art, movement, and health, small rehearsal roofs, a mural wall, safe movement path, healing garden, coral and sea-blue accents. Festive but calm, inclusive and welcoming, with one memorable crescent shoreline silhouette visible beneath later cloud cover. Warm upper-left light, same camera angle, terrain scale and waterline as the Library; transparent background outside the reef and coast. No floating island, no underside, no cloud baked in, no text, medical symbols, characters, or logos.

### M12 — Near-route light mist overlay

- **Type:** Transparent image overlay.
- **How will this be used?** Partially obscure Numeric and Reading while leaving their landmark silhouettes recognizable.
- **Suggested target:** `public/assets/world-map/near-mist-overlay.png`.
- **Prompt:**

> Isolated **semi-transparent light magical sea mist** overlay for a high-detail fantasy pixel-art map, painterly pixel shading, soft pale blue-gray and pearl clusters, uneven wisps along the bottom and route-facing edges, center thin enough that a mathematical arch or oak-tree silhouette remains recognizable beneath it. Gentle uncertainty rather than a storm. Transparent canvas, no terrain, no island, no objects, no text, no icons, no black rectangle, no opaque white background; useful as a reusable layer over a sea-level coast.

### M13 — Outer-route dark magical cloud overlay

- **Type:** Transparent image overlay.
- **How will this be used?** Seal five future coast groups more deeply without erasing them.
- **Suggested target:** `public/assets/world-map/outer-cloud-overlay.png`.
- **Prompt:**

> Isolated layered **charcoal-violet magical cloud** overlay for a high-detail fantasy pixel-art world map, painterly pixel shading, gentle indigo and muted plum edges with a few faint cyan-amber reflected pixels. Darker than nearby mist but still translucent enough to reveal a coast and landmark silhouette underneath. Several irregular cloud banks at different depths, not one solid black mass; mysterious and beautiful, never hostile or lightning-filled. Transparent background around the wisps, no terrain, no island, no text, no symbols, no logos. Designed to be reused above sea-level future-realm art.

### M14 — Active Living Weave thread texture

- **Type:** Transparent image strip; optional if the developer draws the thread directly in Phaser.
- **How will this be used?** Build the fine visible Library-to-Vulcan route without baking it into map art.
- **Suggested target:** `public/assets/world-map/thread-active.png`.
- **Prompt:**

> Isolated reusable **thin magical knowledge-thread segment** on a transparent background, high-detail fantasy pixel art. A fine continuous cyan core with sparse warm-amber points and small ink-like knots, elegant and readable when laid over ocean water, more like illuminated embroidery than a beam of energy. Horizontal gently curved segment with clean ends that can be repeated or joined; no scenery, no thick rope, no bridge, no text, no icons, no opaque background.

### M15 — Dormant Living Weave thread texture

- **Type:** Transparent image strip; optional if the developer draws the routes directly in Phaser.
- **How will this be used?** Indicate interrupted paths toward misted and clouded realms.
- **Suggested target:** `public/assets/world-map/thread-dormant.png`.
- **Prompt:**

> Isolated reusable **weakened magical knowledge-thread segment** on a transparent background, high-detail fantasy pixel art. Very thin muted cyan-gray line with small visible gaps and occasional faint amber fiber, quiet enough to sit behind coastal landmarks, suggesting an uncertain route without looking destroyed. Horizontal gently curved segment with clean joinable ends; no terrain, no water, no lightning, no thick rope, no stone bridge, no text, no icons, no opaque background.

### M16 — Blank Library map nameplate

- **Type:** UI image, reusable.
- **How will this be used?** Frame the Library and currently unlocked Vulcan names; all other nameplates remain hidden.
- **Suggested target:** `public/assets/ui/map-nameplate-blank.png`.
- **Prompt:**

> Isolated **blank** small fantasy pixel-art map nameplate, aged ivory parchment inset in a dark walnut and weathered stone frame, tiny amber corner studs and one restrained cyan thread motif, high-detail painterly pixel shading. Wide horizontal shape, simple flat center with excellent readability for text rendered later by the game, transparent outside the frame. No letters, no words, no subject symbols, no lock icon, no logo, no buttons, no background scene.

## B. Story, Vulcan, and learning-screen backgrounds

These are **later production assets**. The five current Science game mechanics and post-game assessments should stay intact; art should leave a quiet central area for their real controls. A background alone does not add narrative or restoration state.

### S01 — Grand Library opening interior

- **Type:** Background.
- **How will this be used?** Planned Invitation scene or later Library presentation; no such scene exists in current code.
- **Suggested target:** `public/assets/story/grand-library-interior.png`, 16:9.
- **Prompt:**

> Wide 16:9 interior of the Grand Library in high-detail modern fantasy pixel art with painterly pixel shading: immense warm ivory shelves, physically present books, amber reading lamps, a central open volume with a few luminous ink relationships dimming, quiet stone arches, one small window showing the same ocean-grounded Lumora lagoon. Mysterious but welcoming Grade 6 storybook mood, warm upper-left light, generous uncluttered lower area for dialogue and room at one side for a Quill portrait. Show fading meaning as missing glow between records, not books destroyed or a horror ruin. No characters, no readable text, no UI, no logo.

### S02 — Vulcan Caverns quarter map, grounded version

- **Type:** Background / map illustration.
- **How will this be used?** Future redraw of `IslandMapScene`'s current Vulcan quarter background.
- **Suggested target:** `public/assets/island-maps/vulcan-caverns-map-v2.png`, 16:9.
- **Prompt:**

> Wide 16:9 oblique 3/4 top-down regional map of Vulcan Caverns in high-detail modern fantasy pixel art with painterly pixel shading. An ocean-grounded volcanic headland with basalt paths between four distinct but unlabeled Science areas: a Mixtures gallery near a copper-lit cave, a sheltered living-things garden, a calm wind-and-motion terrace, and an earth-and-sky observatory. Contained lava channels, turquoise cooling water, mineral crystals, warm upper-left daylight, welcoming exploration. Leave visible uncluttered spots for four interactive quarter nodes added by code. Shoreline meets real lagoon water; no floating island underside, no sky void, no giant bridge, no labels, no numbers, no UI, no characters.

### S03 — Vulcan lesson preview laboratory

- **Type:** Background; **review the Playground's existing “Vulcan Caverns Preview Scene” first**.
- **How will this be used?** Lesson preview panel or common thematic Vulcan background.
- **Suggested target:** `public/assets/backgrounds/vulcan-preview-v2.png`, 16:9.
- **Prompt:**

> Wide 16:9 cozy Science observation workshop inside Vulcan Caverns, high-detail modern fantasy pixel art with painterly pixel shading. Copper-lit basalt walls, safe contained lava glow in distant vents, turquoise crystal and cooling-water highlights, sturdy wooden and brass benches with simple glass mixture samples, one wide clean parchment-colored surface in the middle for a lesson title and Start controls added later by code. Warm welcoming fantasy adventure atmosphere, not a dangerous forge. Side-on interior perspective consistent with the game scenes, no people, no words, no diagrams with fake text, no UI, no logos.

### S04 — Mix Match Memory Quest backdrop

- **Type:** Background.
- **How will this be used?** Proposed environmental frame behind existing `q1-m1-l1` cards.
- **Suggested target:** `public/assets/minigames/mixture-gallery-backdrop.png`, 16:9.
- **Prompt:**

> Wide 16:9 Mixture Gallery workroom inside Vulcan Caverns, high-detail modern fantasy pixel art with painterly pixel shading. Basalt shelves, a few blank specimen frames, softly glowing crystal lamps and amber copper edges, evidence of living labels that have gone dim. Keep the central two-thirds dark, simple, and low-detail so twelve interactive memory cards placed by the game stay highly readable; push detailed props to outer edges. Warm curious mood, no full card grid, no text, no numbers, no people, no UI, no logo.

### S05 — Supply Cart Sorting backdrop

- **Type:** Background.
- **How will this be used?** Proposed environmental frame behind existing `q1-m1-l2` drag sorting.
- **Suggested target:** `public/assets/minigames/supply-station-backdrop.png`, 16:9.
- **Prompt:**

> Wide 16:9 safe Vulcan supply station in high-detail modern fantasy pixel art with painterly pixel shading: dark stone workshop, copper track, wood shelves, crystal-lit labels that have partly dimmed, a sheltered opening toward the lagoon. Clear empty foreground and middle where the game's moving supply card and two sorting bins will be drawn separately. Rich edge detail, restrained orange and turquoise light, practical learning-workshop mood. Do not paint actual draggable cards, bins, instructions, text, people, UI, or logos into the background.

### S06 — Mixture Detective backdrop

- **Type:** Background.
- **How will this be used?** Proposed environmental frame behind existing `q1-m1-l3` sample comparison.
- **Suggested target:** `public/assets/minigames/detective-desk-backdrop.png`, 16:9.
- **Prompt:**

> Wide 16:9 Vulcan observation desk in high-detail modern fantasy pixel art with painterly pixel shading. Dark basalt alcove, two unfilled specimen pedestals at left and center, a large unlit comparison lens near the edge, copper notes and turquoise crystal light, hints of a knowledge-bound instrument waiting to be understood. Leave broad plain dark areas for the game's sample images, question panel, and answer options to remain legible. Gentle mystery, no magnified answer, no preset sample illustrations, no text, no people, no UI, no logo.

### S07 — Science Court backdrop

- **Type:** Background.
- **How will this be used?** Proposed environmental frame behind existing `q1-m1-l4` and Judge Wise; preserve his current instructional role.
- **Suggested target:** `public/assets/minigames/science-court-backdrop.png`, 16:9.
- **Prompt:**

> Wide 16:9 small evidence hall in Vulcan Caverns, high-detail modern fantasy pixel art with painterly pixel shading. Welcoming stone-and-wood Science Court with an empty judge's alcove, a few amber lamps, copper evidence rails, crystal highlights, and clean wall panels. Keep the center and lower foreground simple for the game's actual case, classification, evidence cards, and fixed Judge Wise art. Scholarly and fair, never punitive or intimidating. No drawn judge, no verdict signs, no words, no people, no UI, no logo.

### S08 — Invent-a-Mix Workshop backdrop

- **Type:** Background.
- **How will this be used?** Proposed environmental frame behind existing `q1-m1-l5` ingredient and presentation choices.
- **Suggested target:** `public/assets/minigames/invent-workshop-backdrop.png`, 16:9.
- **Prompt:**

> Wide 16:9 inventive but tidy Vulcan maker bench in high-detail modern fantasy pixel art with painterly pixel shading. Basalt and warm wood workroom, brass tools, a few empty glass vessels, turquoise crystal light and safe contained lava glow, blank hanging field-note page suggesting that a clear mixture record can be made. Keep the broad central work surface and lower panels visually quiet for the game's three-ingredient selection, Mix button, classification choices, and presentation text. Encouraging storybook atmosphere, no actual recipes, words, answer icons, people, UI, or logo.

### S09 — Assessment field-note backdrop

- **Type:** Background.
- **How will this be used?** Common background for the existing formative and summative `AssessmentScene`; assessments remain separate from mini-games.
- **Suggested target:** `public/assets/backgrounds/assessment-field-notes.png`, 16:9.
- **Prompt:**

> Wide 16:9 calm Grand Library field-note setting in high-detail modern fantasy pixel art with painterly pixel shading. Dark walnut desk edges, warm ivory parchment border, one small amber reading lamp and a faint cyan knowledge thread at the margins, hints of the ocean-grounded world through an upper window. Leave the central 75 percent plain and high-contrast for real multiple-choice questions, answers, feedback, and score drawn by the game. Reassuring academic-fantasy atmosphere; no printed questions, no fake handwriting, no text, no check marks, no people, no UI controls, no logo.

### S10 — Main menu coast and Library glimpse

- **Type:** Background; lower priority because the current menu already has `horizon-bg.png`.
- **How will this be used?** Optional menu redraw that visually leads into the new ocean-grounded map.
- **Suggested target:** `public/assets/backgrounds/menu-lumora-coast.png`, 16:9.
- **Prompt:**

> Wide 16:9 opening view of Lumora at sea level, high-detail modern fantasy pixel art with painterly pixel shading. Calm turquoise water in the foreground, compact distant coastal realm silhouettes, the Grand Library's warm ivory and amber roofline visible near center far across a short lagoon, morning cloud glow and gentle hopeful mystery. Keep the middle foreground simple for the existing LUMI ADVENTURES title and Start/Settings/Exit buttons rendered separately by the game. Original fantasy geography; no floating land, no rock underside, no vast empty ocean, no words, no logo, no characters, no UI.

### S11 — Vulcan scrolling lesson path

- **Type:** Tall background; later production priority.
- **How will this be used?** Future art behind `QuarterDetailScene`'s tall, scrolling lesson nodes; this is distinct from the four-quarter map in S02.
- **Suggested target:** `public/assets/backgrounds/vulcan-lesson-path-v2.png`, vertical 9:16 study or stitched modular segments for the game's approximately 1280 × 2280 path.
- **Prompt:**

> Tall vertical high-detail modern fantasy pixel-art environment for a **scrolling Science lesson path** inside Vulcan Caverns, painterly pixel shading, consistent warm upper-left light. A safe winding basalt walkway moves through three connected knowledge-work areas: Mixtures gallery near the lower section, a quieter preparation and separation workshop in the middle, and a useful-mixtures observation terrace above, with copper railings, contained ember glow, turquoise cooling-water channels, and small cyan crystal accents. Leave a broad uncluttered central route and repeated quiet spaces where interactive lesson and competency nodes will be placed by code. Designed to tile or crop cleanly into a long vertical background; no node circles, labels, numbers, text, characters, UI, sky void, or floating land.

### S12 — Mixture Gallery local-restoration cue

- **Type:** Optional transparent overlay, only for a later narrative-state implementation.
- **How will this be used?** A small glimmer or steady light on one Gallery instrument after appropriate learning evidence; never a full-realm repair.
- **Suggested target:** `public/assets/story/mixture-gallery-restoration-cue.png`.
- **Prompt:**

> Isolated small fantasy pixel-art overlay of **one knowledge-bound Mixture Gallery label frame and cooling-channel marker** becoming legible, delicate cyan living-ink lines and gentle amber light on copper and basalt, painterly pixel shading. The repaired detail is local and modest, with a brief-glimmer and a steadier-lit variation separated for cropping, transparent background around both. No readable words, no score, no realm-wide light burst, no characters, no full scene, no text, no UI, no logo.

## C. Character and reusable UI

### U01 — Quill base portrait

- **Type:** Transparent character image.
- **How will this be used?** Planned short dialogue and opening; Quill is **not** yet an implemented character scene.
- **Suggested target:** `public/assets/characters/quill-portrait.png`.
- **Prompt:**

> Single waist-up portrait of **Quill, the Grand Library's youngest Keeper**, an original small origami paper fox in high-detail modern fantasy pixel art with painterly pixel shading. Clear triangular folded ears, layered parchment-paper tail partly visible, slightly uneven handmade creases, sparse living-ink markings, kind warm amber eyes, a short scholar's mantle, one slightly oversized ear-notched apprentice wizard hat, tiny satchel strap and quill stylus. Curious, friendly, a little nervous, eager to learn; small amber glyph held near one paw that reveals clues rather than powerful spellcasting. Strong readable silhouette at dialogue-portrait size, warm upper-left light, transparent background. No owl features, no weapon, no text, no mascot logo, no scenery.

### U02 — Quill expression variants

- **Type:** Transparent character edit set; use **U01 as the visual reference**.
- **How will this be used?** Optional expression changes for curiosity, encouragement, and discovery; keep one consistent character.
- **Suggested target:** `art-source/quill-expression-variants.png` or three separate transparent portraits.
- **Prompt:**

> Using the supplied Quill base portrait as the exact character reference, create three separated high-detail fantasy pixel-art portrait variants of the **same origami parchment fox** at the same scale and three-quarter angle: (1) curious head tilt with lifted ears, (2) gentle encouragement after a learner's retry, (3) quiet delight at a new discovery. Preserve identical hat notch, mantle, paper folds, ink marks, amber eyes, proportions, palette, and warm upper-left lighting. Transparent background and clear spacing between portraits for later cropping. No owl anatomy, no new costume, no words, no UI, no weapons, no extra characters.

### U03 — Parchment modal frame

- **Type:** Reusable UI frame; **review existing Playground “Parchment Modal Frame” before regenerating**.
- **How will this be used?** Lesson preview, settings, feedback, and results; the game supplies text and buttons separately.
- **Suggested target:** `public/assets/ui/parchment-modal-frame.png`.
- **Prompt:**

> Front-facing **blank reusable fantasy pixel-art UI modal frame**, dark walnut-brown outer border with stepped pixel-carved corners, broad clean cream parchment interior, tiny restrained cyan crystal accents and aged-gold thread trim, painterly pixel shading. Symmetrical wide rectangular shape, center deliberately uncluttered and high contrast for dynamic title, body text, and buttons added later by the game. Transparent outside the frame; no baked-in words, symbols, numbers, buttons, people, scene background, or logo.

### U04 — Blank Quill dialogue panel

- **Type:** Reusable UI frame.
- **How will this be used?** Planned short dialogue overlays in Library, map, and Vulcan screens.
- **Suggested target:** `public/assets/ui/quill-dialogue-panel.png`.
- **Prompt:**

> Front-facing wide **blank fantasy pixel-art dialogue panel** for a Grade 6 adventure game, dark walnut frame, aged ivory parchment reading surface, small amber living-ink flourish on one side and a reserved empty portrait niche for a paper-fox companion. High-detail painterly pixel shading but a very plain readable center for one or two short lines of text added in code. Transparent outside panel, modular horizontal format, no baked-in text, no speech bubble lettering, no buttons, no portrait, no logo.

**Do not spend image generations on** realm names, answer text, generic padlocks, score numbers, button labels, particle sparkles, or every thread curve. Those should be drawn as live text/shapes or reused from one approved UI kit so they remain readable, localizable, and state-aware.

## D. Music prompts

The Playground screenshot shows a generated **World of Lumora Theme**. Keep it as the map theme if it fits after listening; do not generate a second world-map track just to fill this list. The current repository has **no music files loaded by `BootScene`**; these prompts describe future audio assets. Request **instrumental, clean seamless loops**, no voice, lyrics, hard ending, or combat intensity. The stated BPM is a creative target.

### B01 — Vulcan Caverns / Ruins BGM

- **Type:** Music.
- **How will this be used?** Vulcan realm map, lesson path, or light Science exploration; lower volume under questions.
- **Suggested target:** `public/assets/audio/bgm-vulcan-caverns.ogg` after export/conversion.
- **Prompt:**

> 82 BPM, instrumental atmospheric fantasy exploration theme for **Vulcan Caverns and its old Science ruins**, a welcoming volcanic realm beside a calm sea. Warm handpan and low marimba pulses, soft plucked strings, gentle cello harmony, airy wooden flute motifs, delicate glass-and-crystal chimes, subtle contained ember percussion and distant water ambience. Curious observation among ancient basalt workshops, warm stone and turquoise crystal colors, slight mystery without danger. Clear simple melody, spacious arrangement that will sit beneath reading and mini-games, no heavy drums, no battle music, no vocals, no lyrics, no dramatic climax. Seamless 60–90 second loop with matching beginning and end.

### B02 — Numeric Ruins BGM

- **Type:** Music, **future use while Mathematics remains locked**.
- **How will this be used?** Numeric Ruins once it has playable content; not a current unlock reward.
- **Suggested target:** `public/assets/audio/bgm-numeric-ruins.ogg` after export/conversion.
- **Prompt:**

> 84 BPM, instrumental peaceful fantasy exploration theme for **Numeric Ruins**, cool stone arches and measured geometric courtyards by the sea. Repeating felt-piano and plucked-string patterns that gently change and resolve, soft celesta points, restrained marimba, warm clarinet or wooden flute answer phrases, deep cello support, faint ocean-air ambience. Order, curiosity, and the pleasure of discovering a pattern, with warmth beneath the mystery. Not mechanical, not a math jingle, not tense, no vocals, no lyrics, no hard percussion or combat cue. Spacious seamless 60–90 second loop with a clean joining point.

### B03 — Reading Island BGM

- **Type:** Music, **future use while English remains locked**.
- **How will this be used?** Reading Island once it has playable content; not a current unlock reward.
- **Suggested target:** `public/assets/audio/bgm-reading-island.ogg` after export/conversion.
- **Prompt:**

> 74 BPM, instrumental gentle fantasy exploration theme for **Reading Island**, a sea-level literary grove around an ancient hollow oak and quiet lagoon. Soft harp arpeggios, warm felt-piano chords, lyrical wooden flute and clarinet phrases, tender cello, light glockenspiel firefly sparkle, faint page-rustle and coastal breeze texture. Storybook wonder, reflective discovery, welcoming for Grade 6 learners and calm enough beneath reading text. A distinct melody from the main world-map theme, no vocals, no lyrics, no nursery-rhyme sweetness, no heavy percussion or battle mood. Seamless 60–90 second loop with matching start and finish.

## E. Optional short sound cues

Generate these only when map/story feedback is implemented. All should be short, quiet, and playable with sound disabled without losing meaning.

### F01 — Active thread selection

- **Type:** Sound effect.
- **How will this be used?** Selecting the available Vulcan route.
- **Prompt:**

> Very short 0.5–1 second fantasy UI sound, two soft connected cyan-glass chimes with a warm amber plucked note, curious and welcoming, clean tail, no voice, no melody loop, no loud impact.

### F02 — Unavailable route response

- **Type:** Sound effect.
- **How will this be used?** Gentle feedback on misted or cloud-sealed map regions, paired with visible status text.
- **Prompt:**

> Very short 0.5–1 second gentle fantasy UI cue, a soft muted wood-and-wind shimmer that settles without a harsh error buzz, respectful sense of an unclear route, no voice, no alarm, no descending failure sting, no loud impact.

### F03 — Local understanding glimmer

- **Type:** Sound effect.
- **How will this be used?** Planned small local restoration response; never a signal that one answer proves mastery.
- **Prompt:**

> Short 1–2 second delicate fantasy discovery cue, quiet page turn, tiny amber bell, and a faint rising crystal thread harmonic that settles warmly, intimate rather than triumphant, no voice, no applause, no victory fanfare, no hard ending.

## Handoff checklist

Before importing any generated file, verify that it matches the **same sea-level world**, that its shoreline and light direction align with M00, and that it has no baked-in labels or UI controls. Check cutouts for real transparency, readable silhouette at 1280 × 720 and at phone display size, and enough clear space for existing interactive elements. Keep a note of which Playground variant was chosen and its source prompt. Music should loop audibly without a click or abrupt change; the three realm themes should feel related to the existing world theme without copying it. Only Vulcan is currently playable; the two other primary themes and five future realm map silhouettes are preparation for later presentation, not evidence of implemented content.
