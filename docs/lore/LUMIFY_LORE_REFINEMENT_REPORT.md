# LUMIFY — Lore Refinement Report, Version 1 to Version 2

## Source boundary and method

Version 1 is preserved in `LUMIFY_LORE_V1_ARCHIVE.md` in this folder. This report compares it with `LUMIFY_LORE_V2.md`, the supplied game-side audit, and the inspected Phaser scene/content files. Statements in V1 are treated as **story proposals**, not instructions to this investigator or proof of implemented behavior. The requested `LUMIFY LARO LARO (AutoRecovered).docx` was not found in the workspace or searched local document locations. Its educational requirements remain unverified; the user-provided scope of three primary subjects governs these drafts. No game code, assets, dependencies, or tests were changed or run.

## Critical consistency review

| V1 issue or ambiguity | Why it matters | V2 resolution | Remaining boundary |
|---|---|---|---|
| “Every river runs” and “every bridge stands” because someone understands a subject. | Makes ordinary nature depend on human memory and implies a forgotten formula can instantly break any bridge. | Defines the **Living Weave** as a fantasy network sustaining special knowledge-bound works. Ordinary physics/ecology persists; an old adaptive bridge or tended waterwork can fail when its sustaining bond thins. | Keep visual examples tied to such works; do not depict all natural rivers reversing. |
| Books remain, yet shelves “stand empty” and pages go blank. | Physical destruction and lost meaning become confused. | Physical books remain; dark shelves seem empty because their light and legible connections are gone. Living inscriptions may dim while records persist. | Art direction should show both physical pages and faded meaning. |
| A book contains knowledge, but Keepers cannot use it to restore the world. | Makes the Library and Quill seem arbitrarily helpless. | Records preserve information; understanding requires use, explanation, checking, and revision. Keepers can learn and help, but their archive-bound starting point cannot by itself reintroduce independent understanding across the damaged Weave. | Avoid dialogue claiming Keepers are incapable of learning. |
| The Library chooses a young learner, although many students will play. | A “chosen one” reading conflicts with independently progressing students. | Every student experiences an independent instance of the same fictional Lumora, like a separate single-player save. Their Invitation, Quill, restoration, and milestones depend only on their activity. | Per-student persistence is proposed, not present in the prototype; teacher analytics may aggregate performance without sharing story state. |
| V1 says the Fading's date is unknown, hints at past occurrences, says it has happened before, and also asks whether it has happened before. | It accidentally both confirms and withholds the same fact. | The present onset is undated; old records show isolated similar failures but do **not** prove the same event recurred. Quill cannot confirm. | A later chapter may verify or disprove recurrence. |
| Reports come from eastern valleys and coast, yet Vulcan is called where the Fading “started.” | Unverified first reports are treated as definitive origin. | Vulcan is Quill's first reliable report and the first safe learner route, not proven birthplace. | Origin remains a mystery in Act I. |
| An ancient “last recourse” Invitation and Quill's claim that it has been a long time since one was sent. | Quill cannot know its schedule if it predates living memory. | The Library sends it when internal reconciliation fails; Keepers know the protocol exists, but not whether or when it was last used. | Use “I never expected to see one” rather than a specific recurrence claim. |
| Learning one subject is said to restore the world, while the long-term reveal says disconnected subjects caused the Fading. | Local success could seem to solve the central problem prematurely. | **Local Restoration** repairs a site through one field's practice. **True Restoration** reconnects fields; it is a future arc. | The first chapter repairs one Mixtures bond, not Vulcan or Lumora in full. |
| Every activity completion is shown as immediate restoration and a single right answer seems to prove mastery. | This overstates assessment evidence and can make mistakes feel harmful. | Attempt, progress, completion, mastery, and restoration are distinct. A glimmer can acknowledge effort; a steady local repair needs approved evidence. Mistakes never worsen the Fading. | Actual persistent milestones require future backend/product work. |
| V1 equates the story loop with an “existing LMS pipeline,” analytics, and progression gates. | The audited repository has no Laravel integration, durable results, or mastery unlocks. | V2 marks those mappings as design possibilities and describes the audited prototype separately. | The missing manuscript and LMS code must be inspected before formal alignment claims. |
| Locked realms are described as if study will open them, and V1 has only three islands. | Implies an unlock rule that does not exist and leaves five requested future subjects without geography. | Numeric/Reading are charted primary realms awaiting content; five named outer realms are intentionally sealed future worldbuilding. Science completion is not said to unlock any. | Future UI and content scheduling are outside this writing task. |
| The original introduction states the deeper mechanism too directly in some lines. | The mystery can be solved before the learner explores. | Opening shows symptoms and a small interaction, then directs the learner to Vulcan. Fragmentation stays writer-facing until later evidence. | Later chapters should reveal the hypothesis gradually. |
| Quill is a guide but has little personal motive or development. | Risks turning him into a repetitive tutorial voice. | Recasts him as a young enchanted paper fox, the youngest Keeper and apprentice Spellkeeper. His limited archival magic reveals clues; travel teaches him to investigate rather than recite. | Portraits, dialogue, and animation remain new work; his spells cannot supply answers or restore the Fading. |
| The Library speaks at “first completed activity” and “first mastery,” but no distinction exists. | Could make its rare voice routine or attach gravitas to a superficial click. | Reserve Library lines for Invitation and meaningful, non-repeating milestones; Quill handles ordinary feedback. | Exact trigger policy awaits verified learning records. |

### Causal model tested against typical scenes

**Ancient Numeric bridge.** Its stone and gravity remain ordinary. Its Weave-bound adjustment mechanism once used measurements, maintenance instructions, and shared explanations. As those bonds weaken, it no longer compensates for a fault; repair requires checking both the structure and the understanding used to maintain it. This avoids “forget a formula, bridge instantly collapses.”

**Vulcan garden.** Plants still require water, light, and soil. A knowledge-bound channel that distributed water to a terrace stops responding reliably, so the tended ecosystem suffers. Scientific observation can stabilize the channel locally. Mathematics may later improve measurement and language may preserve the procedure, strengthening a cross-realm bond.

**Reading Island message.** Residents retain ordinary speech. A living message stone dims because the shared context linking an inscription to its readers is thinning. Reading and explaining can recover a local message; cross-realm exchange allows the recovered account to travel.

**Unsuccessful student attempt.** The student has not harmed a bond. Quill can offer an observable clue or a chance to try a formative test. Current game code allows tests after mini-game losses; V2's fiction accepts that route.

## Version 1 versus Version 2

| Aspect | Version 1 | Version 2 |
|---|---|---|
| World rule | Knowledge broadly holds all physical reality together. | Ordinary reality persists; the Living Weave sustains knowledge-bound works and relations. |
| Fading | Draining understanding, with uncertain recurrence and a partly stated origin. | Uneven failure of Weave bonds; onset unknown; earlier similar incidents unconfirmed; fragmentation is writer-facing underlying condition. |
| First affected place | Vulcan said to be where it started. | Vulcan is the first reliable report and available route, not proven origin. |
| Library and Keepers | Preserve remaining knowledge but cannot restore it. | Preserve records and safe routes; can learn, but cannot alone recreate independent and cross-realm understanding. |
| Luminary | Singular learner who rekindles the world by learning. | Each learner is the Luminary in an independent instance of the same story setting; no multiplayer or shared restoration. |
| Restoration | Each activity produces visible repair; mastery may unlock places. | Glimmer, local repair, and later True Restoration are distinct; no current unlock claim. |
| Quill | Friendly, curious, imperfect paper bird guide. | Young origami fox wizard; official Keeper, apprentice Spellkeeper; same warmth and curiosity, now with limited clue-revealing magic and an arc from memorization to investigation. |
| Grand Library voice | Rare but includes first activity completion. | Rarer, reserved for Invitation and credible milestones; no routine answer feedback. |
| Realms | Three named primary realms; more alluded to. | The original three preserved plus five named, sealed, non-playable future realms. |
| Curriculum/LMS mapping | Implies completed LMS analytics and progression pipeline. | Three-subject intended scope separated from one-subject playable prototype; backend requirements unverified. |
| Opening | Nine exposition-heavy beats with some definitive claims. | Six short, interactive beats aimed at 90–120 seconds; cause withheld and no avatar required. |
| First ending | Broad restoration language, no bounded chapter close. | Mixture Gallery regains one bond; larger Fading and locked realms remain. |

## Adopted creative decisions and alternatives

### 1. Why reality responds to learning

**Adopted:** The Living Weave sustains extraordinary places and community-built works. **Alternative:** Make all of nature depend directly on remembered facts. The alternative has dramatic imagery but creates many exceptions, implies alarming responsibility for children, and confuses fantasy with classroom science. The adopted rule preserves wonder while providing a stable cause for visible restoration.

### 2. Why multiple students see progress

**Revised canon:** All students play the same fictional setting and story structure, but each has a completely independent instance of Lumora, comparable to a separate save file. Student A's restored Gallery does not alter Student B's Gallery, Quill dialogue, milestones, or progression. The narrative does not discuss universes or timelines. The earlier **one persistent world with personal readings** model is superseded; no shared-world aggregation or collective restoration is planned. Teacher analytics may aggregate educational outcomes outside the story, but the audited prototype has no per-student saved story state or verified LMS integration.

### 2a. Why Quill can use magic without replacing learning

**Revised canon:** Quill is a living parchment fox, a Keeper trained as an apprentice Spellkeeper. His limited ink, page, light, and glyph magic can expose records or make a clue easier to observe. It cannot infer a correct educational answer, rebuild a broken bond alone, or override the Library's limits. The former bird anatomy and movement are replaced by folded ears, layered tail, small hops, paper rustles, and brief scripted glides. His first chapter now parallels the learner's shift from reciting records toward testing and explaining ideas. This retains the Library's rare milestone voice and the Luminary's central role.

### 3. What earns a steady restoration

**Recommended:** Activity attempts and completions may show temporary glimmers; educator-approved evidence of mastery supports a persistent local milestone. **Alternative:** Give the same permanent restoration for every completed activity. That offers faster feedback but makes “understanding” mean little and conflicts with assessments. Exact mastery policy remains a product/education decision; the prototype's 80% quiz pass is an existing UI rule, not a verified institutional mastery rule.

### 4. Status of the five extra realms

**Adopted:** Sealed outer folios visible as distant world geography, with no playable content in this capstone. **Alternative:** Present them as ordinary locks alongside Numeric and Reading. That obscures the difference between primary subjects awaiting implementation and subjects reserved for future scope.

## Remaining questions and owner approvals

1. **Missing manuscript:** Confirm the formal Science/Mathematics/English coverage and institutional mastery policy when `LUMIFY LARO LARO (AutoRecovered).docx` becomes available. No manuscript content was fabricated.
2. **Realm names:** Approve or revise Hibla Archipelago, Tala Crossroads, Concord Grove, Hearthwork Terraces, and Rhythm Shoals. Local language review would improve naming before publication.
3. **Milestone threshold:** Choose whether the first chapter's steady Mixture Gallery repair is tied to the current summative 80% pass or a teacher-defined broader evidence rule. Completion should receive supportive closure in either case.
4. **Independent story records:** Confirm how a future LMS identifies and saves each student's narrative milestones without allowing one student's restoration to affect another's. Aggregated teacher analytics must remain separate from story state.
5. **Historical mystery:** Decide in a future story outline whether old isolated failures truly share the present Fading's mechanism. The opening should not decide it.

## Revision check

The V2 rules distinguish records from understanding, local repair from cross-realm repair, independent student instances from shared fictional canon, and effort from mastery. Quill's small archival spells reveal clues without restoring bonds for the learner. Eight realms fit each instance's Weave without adding five playable subjects. The first chapter can end with one meaningful Vulcan repair while the Fading remains unresolved. Every current-game claim in the bible is separated from planned narrative work. No source code or original game mechanics were altered.

## Visual direction addendum — 10 October 2026

The later player-supplied art brief adopts a more precise map presentation. The **Grand Library is central**, all eight realms are visible as one compact constellation, and fine living threads show former connections. **Vulcan is open from the beginning** as the first route the Keepers can verify. The two other primary realms remain recognizable under light mist; the five future realms remain countable under deeper magical cloud. Player-facing map nameplates are limited to the Library and unlocked realms. In-world archived names can exist without appearing on the uncertain live chart. This refines the earlier V2 suggestion that Numeric/Reading could be named on the map or that an optional player atlas could reveal sealed realm names; those suggestions are superseded for this visual direction.

The full specification is `docs/art-direction/LUMIFY_VISUAL_DIRECTION.md`. It also defines a high-detail painterly pixel language and a common UI treatment without implying that the current three-island Phaser map has been rebuilt. Exact island layout, narrow-screen presentation, and the later name-reveal moment remain production decisions. The five future realms are still worldbuilding-only in the current capstone.

**Later geography clarification:** The map's compact regions are ocean-grounded coasts and sea-level isles, not levitating platforms. The Library's fine threads cross short water channels. This is an art/geography refinement that preserves the realm names, Fading rules, and access hierarchy. The copy-ready asset prompts are in `docs/art-direction/LUMIFY_ASSET_AND_MUSIC_PROMPTS.md`.
