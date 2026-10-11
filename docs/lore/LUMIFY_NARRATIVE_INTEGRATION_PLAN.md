# LUMIFY — Narrative Integration Plan for the Existing Phaser Game

## Purpose and evidence

This is a **planning document**, not an implementation record or a request to change game code. `LUMIFY_LORE_V2.md` defines the proposed story. Each student would experience an **independent instance of Lumora** with their own Quill, milestones, and restoration; all students share the same fictional setting, not a collective game world. The existing prototype is a standalone Phaser 3 game with a menu, three island illustrations, one available Vulcan map, five playable Q1 Mixtures games, and a separate assessment after each. Numeric Ruins and Reading Island are hardcoded locked; 55 other Science lesson nodes show placeholders. There is no Grand Library, Quill, dialogue framework, restoration state, audio playback, durable learner record, or Laravel integration in the supplied repository. These facts come from `LUMIFY_GAME_SIDE_AUDIT.md`, `src/config/content.js`, `src/config/gameConfig.js`, and the named scenes. The capstone DOCX was unavailable, so institutional requirements remain to be confirmed.

**Status vocabulary:** **Existing** = present in inspected code; **Adaptable** = an existing screen or UI mechanism can host a story beat with modest change; **New** = development or content needed before it works; **Future** = deliberately outside this capstone's present playable scope. An “opportunity” below is not a statement that the feature already works.

## 1. Integration principles

1. Preserve all five current Science games, lesson IDs, scores, rules, and post-game FT/ST handoffs. Add context around them before considering mechanics changes.
2. Let Quill ask questions and notice changes; keep teaching feedback in the activity where it already appears. Avoid a dialogue overlay on every answer.
3. Separate a temporary response to **attempt/progress** from a persistent **mastery** milestone. Never show the Fading worsening because a learner errs or stops.
4. Keep every learner's narrative state isolated. One student's lesson results or restored scenery never change another student's Lumora; aggregated teacher analytics, if developed elsewhere, do not drive shared story progression.
5. Do not promise that Science completion opens Mathematics or English. Their present locks have no unlock code. The five future realms have an even more distant, intentionally sealed status.
6. Keep story effects optional and brief. Students can skip/replay the planned introduction, advance dialogue manually, and access existing lesson paths without a narrative gate.
7. Obtain educator approval for mastery evidence and backend contracts before making story milestones permanent or teacher-controlled.

## 2. Current flow and scene opportunities

Current path: `BootScene` → `MenuScene` → `IslandSelectScene` → `IslandMapScene` → `QuarterDetailScene` → one of five mini-game scenes → `AssessmentScene` → quarter path. `src/systems/assessmentFlow.js` passes the lesson ID, mini-game result/score, and return scroll position to the assessment. On a mini-game loss, the assessment is still offered. `AssessmentScene` computes a local 80% pass/fail result and returns to the path. These values are transient; no record is saved.

| Existing location | Verified behavior | Narrative opportunity and status | Guardrail |
|---|---|---|---|
| `BootScene.js` | Preloads current art and starts Menu. **Existing** | A first-visit routing decision and additional story asset preload would be **New**. Keep the loading screen a loading screen, not mandatory exposition. | There is no existing intro flag or Quill asset. |
| `MenuScene.js` | Start → Island Select; settings change in-memory music/SFX flags; Exit opens a modal. **Existing** | Grand Library presentation could adapt the menu's background/title, with a planned “Begin”/“Replay introduction” route. **Adaptable UI; new art/logic.** | The menu is not currently a Library. Sound toggles do not play sound. |
| New introduction overlay/scene | None. **New** | Deliver the 90–120 second scripted sequence in the V2 bible, introducing Quill as a young paper fox and apprentice Spellkeeper through a brief glyph-tracing clue, with manual advance, skip, captions, reduced motion, and replay. | His magic highlights evidence but does not solve the learner's first question; avoid an avatar, free roaming, or a long unskippable cutscene. |
| `IslandSelectScene.js` | Draws three island PNGs and hardcoded locks. **Existing** | Add short realm descriptions on focus/click; label Numeric/Reading as charted primary routes awaiting content. Show five distant silhouettes as an optional later map extension. **Adaptable for three; New for eight.** | Current code renders only three. Five outer realms must not become playable by adding map art alone. |
| `IslandMapScene.js` | Always displays the Vulcan map and Q1–Q4 nodes. **Existing** | Use a one-line Quill arrival note and a subtle Mixture Gallery marker. **Adaptable.** | Q2–Q4 are selectable but their lessons are placeholders; do not narrate them as complete story chapters. |
| `QuarterDetailScene.js` | Scrollable quarter path; game preview modals for five Q1 Mixtures lessons; other lessons/majors show placeholders. **Existing** | Add one brief context line to each of the five existing preview modals and a restrained first-visit Quill prompt. **Adaptable.** | Preserve lesson IDs and launch mapping. Avoid implying a visible node is playable merely because it is drawn. |
| `MixMatchScene.js`, `SupplyCartScene.js`, `MixtureDetectiveScene.js` | Timed, independent result screens. **Existing** | Small starting line and result reaction; a short glow or label response on a success. **Adaptable visuals; New story state.** | Do not interrupt or obscure timed play. Existing modal code does not pause timers. |
| `ScienceCourtScene.js` | Five exhibits, drawn Judge Wise, verdict modals, final credibility. **Existing** | Identify court as Vulcan's tradition of testing claims against evidence. Give Quill one introduction and one reflective result line. **Adaptable.** | Retain Judge Wise's instructional role and current scoring. |
| `InventMixScene.js` | Three guided creation missions; optional name; generated presentation; final creativity result. **Existing** | Frame it as rebuilding a Mixture Gallery record through tested descriptions. Show a planned Gallery light after suitable evidence. **Adaptable; persistent light is New.** | Exact ingredient scoring is current behavior; do not pretend freeform chemistry is simulated. |
| `AssessmentScene.js` | Five-item FT after lessons 1–4, 20-item ST after lesson 5; 80% pass; local result modal. **Existing** | Place milestone dialogue **after**, not inside, an assessment result. A formative pass may steady one label; summative mastery may close the first chapter. **New triggers/state.** | Tests are available even after mini-game loss. The hardcoded AI fallback text is not generated coaching. |
| `src/ui/ui.js`, `src/ui/minigameUi.js` | Buttons, modals, feedback, HUD, sparkles, drawn icons. **Existing** | Shared dialogue panel, visual response, and caption style could reuse modal concepts. **Adaptable for styling; New for accessible dialogue behavior.** | Reusing a modal does not create a narrative state machine or pause logic. |

### Dialogue trigger policy

Trigger a line for an **occasion**, not for every correct click. Recommended occasions: first arrival in Vulcan; opening each of the five Q1 lesson previews for the first time; the first game completion; first passed formative assessment; finding a cross-realm clue; and the chapter close after the summative sequence. A repeat visit should offer a shorter line or none. A loss can trigger one encouraging line, then immediately leave Retry, FT/ST, and Back available. Trigger history would require a new per-learner record; until it exists, avoid copy that assumes “last time” or a remembered score.

| Moment | Example short line | Presentation rule |
|---|---|---|
| First Vulcan arrival | **Quill:** “Those labels used to help the whole cavern. Let's see what still makes sense.” | Optional; do not block quarter navigation. |
| Wrong answer or game loss | **Quill:** “We found something to check again. Which clue helped most?” | No claim that the world darkened or trust fell. |
| First FT pass | **Quill:** “That label holds steady now. How did you know what belonged there?” | Planned one-time milestone only if result can be reliably recorded. |
| Summative completion without pass | **Quill:** “You brought the pieces together. Some links still need checking; we can return.” | Gives closure without calling the learner a failure. |
| Approved Mixtures mastery | **Library:** “One thread holds.” **Quill:** “And it points past these caverns.” | Reserve Library voice; no claim of full Vulcan restoration. |

## 3. The five Science mini-games in the story

Each proposed effect is **new visual/narrative work**. The mini-game's existing gameplay and separate post-game assessment remain intact.

| Lesson and game | Why the learner encounters it; Fading symptom and knowledge | Quill introduction | Result, unsuccessful attempt, and proposed restoration / assessment beat |
|---|---|---|---|
| `q1-m1-l1` **Mix Match Memory Quest** | The Mixture Gallery's term, picture, and description cards no longer stay linked. The learner practices matching observable mixture ideas. | “The pictures and words are here. Which three belong together?” | A complete game gives a **brief** linked-card glow; timeout leaves the cards ready to try again, with no further damage. Its **formative test** checks the idea separately; a passed FT could make one label hold steady. |
| `q1-m1-l2` **Supply Cart Sorting** | A workshop supply route has lost reliable labels for uniform/non-uniform mixtures and their uses. The learner sorts six examples and connects them to practical choices. | “These supplies still work. The labels don't. Let's sort what we can actually see.” | A correct sort can clear one lane momentarily; a failed timer or low accuracy invites another try or the available FT. A passed FT could steady the route markers. No contents or score logic change. |
| `q1-m1-l3` **Mixture Detective** | Two sample notes disagree and a comparison lens has gone dim. The learner observes visible parts, sameness, and layers across five cases and a final comparison. | “The clue is in the samples, not in my old notes. What do you notice?” | Solving cases makes the lens flash briefly; mistakes only prompt closer observation. A passed FT could leave a comparison diagram legible. The current three-mistake/timer limits remain game rules, not moral stakes. |
| `q1-m1-l4` **Science Court** | Judge Wise's court tests whether claims about mixtures have sound evidence. The Fading has left exhibits difficult to interpret, so the learner must classify and defend. | “Judge Wise likes evidence more than confident guesses. I think we'll get along.” | Accepted/partial/objection verdicts are feedback on a claim. A retry is a revised argument, never a public humiliation. A passed FT could restore one court record. Judge Wise remains a fixed scene figure, not a new roaming NPC. |
| `q1-m1-l5` **Invent-a-Mix Workshop** | The Gallery needs complete records linking ingredients, observable appearance, classification, and use. The learner completes its three authored mixture missions. | “Let's make a record someone else could follow. What did we choose, and what did we notice?” | Presentation creates a draft page. An imperfect score keeps it revisable; the ST is still available. A passed **summative** assessment, or later educator-approved mastery policy, could make the Mixture Gallery's repaired bond steady and reveal a note needing mathematics and language. No claim that all of Vulcan is repaired. |

### Proposed effects by strength

- **During a game:** Existing color feedback and sparkles can be given story meaning as a passing glimmer. Do not add lengthy dialogue under a 90-second timer.
- **After mini-game completion:** A local page or object briefly responds, independent of win/loss. The result remains the current game result, with FT/ST accessible according to existing rules.
- **After a formative pass:** A small, named local detail can stay clear in a future saved story view. This is **New** and requires persistence; no such effect currently exists.
- **After the summative sequence:** A first-chapter scene acknowledges the journey. Its steady-restoration version requires an approved mastery rule and reliable saved outcome. Its supportive completion version must be available without pretending mastery.

## 4. Eight-realm world map plan

**Existing:** `content.js` configures three islands; Vulcan is unlocked, Numeric and Reading are locked. `IslandSelectScene.js` draws their illustrations and lock feedback. The two non-Vulcan map PNGs are available but unused. There are no assets or scene entries for the other five.

**Near ring, current three-subject scope:** Place the **Grand Library** at the center of a compact map with an active, fine thread to Vulcan from the first visit. Vulcan alone is named and selectable. Numeric Ruins and Reading Island remain visibly recognizable as two closer landmasses in **light mist**, with interrupted threads; their names and subject labels are hidden on the player-facing map until a later playable release. They are **charted primary realms awaiting playable routes**, not rewards earned by completing Science. A future implementation may make them playable, but that requires actual games and navigation, not merely a narrative line.

**Outer ring, future worldbuilding:** Hibla Archipelago, Tala Crossroads, Concord Grove, Hearthwork Terraces, and Rhythm Shoals appear as five countable but partial silhouettes beneath **dark magical cloud**, with faint threads disappearing into haze. Their names and subject labels are **not shown by default or on inaccessible-map interaction**; the names here are for writers and artists. A seal means the Library cannot presently chart a reliable route; it does not imply that students failed a prerequisite. These five have no current levels, questions, assessments, teacher data, or analytics, and none is proposed for implementation in the current capstone.

At 1280 × 720 and narrow mobile widths, eight full-size region illustrations would crowd the existing screen. A proposed map needs a legible hierarchy: central Library, clear Vulcan in the near foreground, two misted primary silhouettes, and five smaller dark-cloud future silhouettes. The regions form a **compact ocean-grounded archipelago**: every shore meets the shared water, with no hovering land or exposed floating-rock undersides. An accessible text alternative should describe each unavailable location and **status without revealing its name**; a teacher-facing curriculum list can name subjects outside the player map. Large padlocks should yield to mist, cloud, and thread state. The cloud is how the Library's live chart depicts route uncertainty, not literal permanent weather over whole regions. See `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md` and `docs/art-direction/LUMIFY_ASSET_AND_MUSIC_PROMPTS.md` for visual and generation specifications. No map asset is generated in this task.

## 5. Proposed narrative state and technical dependencies

This is a **future design contract**, not current data flow. Before any persistent milestone, the team needs a verified student identity and backend contract from the actual LMS project. The audited repository has neither storage nor an API client.

| Needed fact or capability | Why it matters | Status and dependency |
|---|---|---|
| Stable lesson ID (`q1-m1-l1` … `l5`) | Attach dialogue and milestone copy to existing lessons. | **Existing** in `content.js` and scene transitions. |
| Mini-game result and score | Distinguish attempt/completion from performance. | **Existing transiently**; passed to `AssessmentScene`. No saved history. |
| Assessment result and percent | Candidate evidence for local restoration under approved rules. | **Existing transiently** in AssessmentScene; 80% pass is a local UI rule. |
| Per-student intro seen, story beats seen, restored-site flags | Prevent repeats and display that student's independent Lumora instance. No other student's results may alter it. | **New** isolated persistence and identity policy; no save system exists in this prototype. |
| Teacher-approved mastery policy | Avoid using one minigame score as formal mastery. | **Unknown** until manuscript/LMS/educator review. |
| Restoration display state | Show a stable Gallery detail after a supported milestone. | **New** art/state mapping; no current world-state layer. |
| Backend result submission and analytics | Reconcile narrative milestones with education records. | **Unknown/New** in this repository; inspect Laravel project first. |
| Teacher analytics aggregation | Educational reports may combine performance data without combining narrative state. | **External/unverified** LMS capability; never a shared-world restoration mechanic. |

Conceptually, a scene should report **what happened** (lesson visited, mini-game completed, assessment completed) separately from **what that student's story is allowed to conclude** (glimmer, completed record, approved mastery). This separation prevents an activity result from silently becoming a permanent world repair or affecting another learner's instance. A later implementation must handle retries, skipped intro, direct lesson access, back navigation, missing/late backend responses, and students who complete tests after losing a mini-game.

## 6. Asset, audio, and interface requirements

### Visuals — New

- One Grand Library establishing image or carefully composed Phaser graphics; bright and dim states of the same physical shelves.
- A small **origami fox** Quill portrait or limited scripted animation: folded triangular ears, layered paper tail, expressive amber eyes, spare ink markings, short scholar mantle, and one ear-notched wizard hat. Keep an apprentice silhouette readable at pixel-art sizes; a tiny satchel or quill stylus can appear in a larger portrait. No full avatar or walking sprite is needed.
- A few reusable poses or effects: ear twitch, tail sway, head tilt, small hop, rustling folds, a brief hat slip, and one amber glyph for ink highlighting or pageweaving. A short scripted paper glide is optional; no combat or powerful spell effects.
- A reusable dialogue panel and rare Library-voice presentation distinct from routine quiz feedback.
- Five small Vulcan restoration cues tied to existing Q1 lessons, plus a Mixture Gallery “glimmer/steady” pair and one cross-realm note.
- Map treatments distinguishing primary locked realms from five distant sealed realms; no requirement to build future realm interiors.

Reuse the existing island art where possible. The prototype's current mini-game icons and Judge Wise drawing can remain. Art must respect the Living Weave rule: show an old mechanism, calibrated structure, inscription, or tended channel failing, rather than ordinary nature ceasing to obey science.

### Audio — New and optional

The inspected game has **no audio files or playback system**, despite Music/SFX registry toggles. A future opening could use a quiet page rustle, amber chime, distant cavern ambience, and one restrained milestone tone. Never use audio as the only cue that a label cleared or a realm is sealed. Add captions/text equivalents and honor mute settings; define actual playback behavior before presenting those settings as functional.

### Accessibility and pacing — New review/development

- Manual dialogue advance, Skip and Replay Intro, and no loss of learning progress on skip.
- Captions and visible controls for every sound cue; reduced motion option for pans, Quill's hops or paper glide, glyph pulses, and flashes.
- Legible text at narrow widths, generous tap targets, visible focus, and a keyboard-accessible alternative to pointer-only story choices.
- Separate narrative overlays from active timed play; pause or defer story presentations rather than consume a 90-second timer.
- Color-independent differences between glimmer/steady/dim states, plus concise text labels.
- No shaming language on failed games or tests. Assessment feedback must remain educationally accurate.

## 7. Priorities and validation gates

| Order | Work to investigate/design later | Why first |
|---|---|
| **1** | Obtain and read the capstone manuscript and actual Laravel/LMS contract; confirm scope, teacher policy, student identity, and result persistence. | Narrative mastery and saved story state depend on facts absent from the audited repository. |
| **2** | Approve V2 world rules, five future realm names, first-chapter milestone threshold, and Quill/Library voice limits. | Prevents copy and art from teaching conflicting lore. |
| **3** | Draft short Quill lines for existing lesson previews and post-result moments; test them with Grade 6 readers. | Lowest-risk narrative addition around existing mechanics. |
| **4** | Prototype the skippable Library introduction and map status presentation in design artifacts, then test narrow view and assistive access. | Establishes context without changing the five games. |
| **5** | Define event/state contract and approved mastery rule, then plan durable local restoration visuals. | Stops transient scores being mistaken for saved world repair. |
| **6** | Extend primary Mathematics/English play only when their actual learning activities are ready; leave five outer realms sealed. | Respects present scope and separates content development from worldbuilding. |

Before implementation, review the current Playwright flows and manually verify result/assessment paths, especially failed mini-game → FT/ST, retries, and mobile scaling. The suite was not run for this writing task. The original lore document and game source were not used as implementation instructions; they were evidence and design context.
