# Math and English Minigame Plan: Quarter 1, Week 1

Status: all five Math and five English games are implemented.
Updated: 2026-11-05.

## 1. Confirmed scope and game count

| Subject | Island | Release coverage | Games |
|---|---|---|---:|
| Science | Vulcan Caverns | Existing Quarter 1 activities | 20 |
| Mathematics | Numeric Ruins | Quarter 1, Week 1, Days 1-5 | 5 new |
| English | Reading Island | Quarter 1, Week 1, Days 1-5 | 5 new |
| **Total** | | | **30** |

This is the single planning document for the ten new games. The earlier proposal
for 200 Math/English activities is superseded by the user's reduced scope.

The project pacing target is **five weekly topics per quarter**, with five daily
slots per topic. This release populates only the first topic of the first quarter
for Math and English. Other weeks and quarters do not receive game designs here.
Science remains at twenty games; a fifth topic container must not automatically
create five additional Science games or silently redistribute its existing lessons.

The initial task created this plan. The subsequent English implementation adds
its five activities, generated artwork, bundled narration, and poem editor.
`src/config/subjectWeekTopics.js` now has five topic containers per quarter for
Math and English; the fifth is explicitly reserved as Topic to be assigned.
Math and English Q1 Week 1 are populated with five new games each. The current
playable inventory is twenty Science, five English, and five Math: thirty total.

## 2. Curriculum basis and boundaries

The existing project identifies Grade 6 and the 2016 DepEd curriculum guides as
its basis. This plan continues that project choice; it does not claim alignment
to a newer curriculum edition.

| Subject | Existing Week 1 label | Specific focus for these five games | Curriculum connection |
|---|---|---|---|
| Math | Fraction Operations | Fraction addition/subtraction, mixed numbers, regrouping, and contextual problem solving | M6NS-Ia-86 and M6NS-Ia-87.3 |
| English | Sound Devices and Poetry | Onomatopoeia, alliteration, assonance, consonance, and original poem composition | Grade 6 Week 1 sound-device reading competency family EN6RC-Ia-2.3.1 / 2.3.3 / 2.3.2 / 2.3.9; composition EN6WC-Ia-2.2.2 |

Math Week 1 does not become a survey of all four fraction operations. Its five
days build from equal-sized pieces to unlike denominators, mixed-number addition,
regrouping in subtraction, and application. Multiplication and division are not
introduced by these games.

English covers the selected sound-device and poetry strand of Week 1, rather
than claiming to teach every English strand scheduled that week. Listening and
self-correction support the activities. The final composition has **four stanzas
with three lines each**, matching the referenced composition task. Creative
writing needs human review; structure checks are not proof of writing mastery.

### Sources and attribution

- [DepEd Mathematics Curriculum Guide, August 2016](https://www.deped.gov.ph/wp-content/uploads/2019/01/Math-CG_with-tagged-math-equipment.pdf), Grade 6 First Quarter, beginning at printed page 175. Basis for the fraction-operation strand.
- [DepEd English Curriculum Guide, May 2016](https://www.deped.gov.ph/wp-content/uploads/2019/01/English-CG.pdf), printed page 127, Grade 6 Week 1. Basis for the four sound-device targets and poem structure.
- [DepEd Order 012, s. 2020, accompanying learning-competency material](https://www.deped.gov.ph/wp-content/uploads/2020/06/DO_s2020_012-1.pdf), Grade 6 Mathematics Q1 table. Corroborates Week 1 placement of M6NS-Ia-86 / M6NS-Ia-87.3; this is a pacing cross-check, not a replacement curriculum claim.
- Project references: `src/config/subjectWeekTopics.js`, `src/config/content.js`, and the existing Science navigation/content patterns. The game names, situations, sample sentences, and interaction designs below are original proposals.

The official PDF endpoints returned access errors on direct opening during
planning; their relevant indexed official-source extracts were available and
used to verify the scope and codes. Recheck the source guides when finalizing
the teacher's competency mapping. Do not invent a one-to-one subcode assignment
for English devices from the order of codes in a table.

## 3. Ten-game overview

| ID | Day | Game | Primary interaction | Learning evidence |
|---|---:|---|---|---|
| M1 | 1 | Fraction Bridgeworks | Build lengths from equal fractional pieces | Correct addition model and total |
| M2 | 2 | Mosaic Converter | Repartition two models without changing their values | Equivalent fractions and a valid common unit |
| M3 | 3 | Whole-Trade Depot | Combine mixed quantities and exchange fractional groups for wholes | Value-preserving regrouping during addition |
| M4 | 4 | Reservoir Rescue | Exchange a whole tank for smaller units before drawing water | Subtraction with justified regrouping |
| M5 | 5 | Caravan Supply Planner | Construct equations and plan deliveries under constraints | Correct operations, quantities, units, and feasible decisions |
| E1 | 1 | Soundscape Studio | Synchronize sound words with narrated events | Sound-word identification with contextual evidence |
| E2 | 2 | Alliteration Airship | Build a meaningful phrase using matching initial sounds | Phoneme-based selection rather than spelling guesses |
| E3 | 3 | Vowel Echo Cavern | Tune word lanterns to a shared vowel sound | Assonance across differently spelled words |
| E4 | 4 | Consonance Threadworks | Connect repeated consonant sounds inside/at the ends of words | Location-aware sound evidence and device comparison |
| E5 | 5 | Poetry Lantern Festival | Inspect sound effects, compose, annotate, and revise a poem | Objective sound analysis plus a saved original draft for review |

All ten entries are separate daily games. Their rounds, tutorials, and exit
checks are internal stages, not extra games. Reusing a common scene framework
does not merge their distinct mechanics into one repeated quiz.

## 4. Shared play, assessment, and interface rules

### Session flow

1. Enter from the subject island's Q1 -> Week 1 -> Day card.
2. Show the day's objective and one short worked tutorial, clearly marked Practice.
3. Play the three authored rounds or stages specified for that game.
4. Offer a new one-item exit check for M1-M5 and E1-E4; E5 ends with a submission review.
5. Show the work completed, support used, and a concise learning explanation.
6. Return to the same Week 1 position; Retry starts a fresh attempt without deleting the best record.

Allow roughly 6-10 minutes for M1-M4 and E1-E4, 8-12 for M5, and 12-15 for E5.
These are design estimates to validate with learners, not enforced timers.

### Controls and feedback

- Every draggable object also supports tap/select -> tap/place, plus keyboard focus and activation. Provide Undo, Reset Round, Help, Pause, Settings, and Return using existing navigation conventions.
- Commit an answer with an explicit Check, Run, Launch, or Submit control. Accidental drops and incomplete edits are not scored as wrong answers.
- On an incorrect committed step, preserve the player's construction and identify the smallest incorrect relationship. Demonstrate a nearby example before offering a full solution.
- Pause freezes scene motion, audio, and any animation in progress. Reduced-motion mode uses immediate state changes with the same information.
- No countdown, lives, reaction-speed gate, motor-precision score, or audio-only instruction. Decorative danger cannot erase learning progress.
- No microphone, speech recognition, internet model, or external account is required. English narration uses authored recordings with transcripts and sound explanations.
- Use large, readable task text and fraction notation over the subject-themed environment. Keep the center work area quiet; decorative pixel scenery never sits behind dense instructional text.

### Completion and scoring

For M1-M5 and E1-E4, completion means all three rounds reached their stated
success state and the exit check was attempted. Players may finish with support;
the result must say so rather than pretending every completion was independent.

Record each explicitly submitted checkpoint: first independent response,
eventual resolution, attempts, hints, and whether a worked solution was shown.
Display `independent accuracy = independently correct first submissions / scored
checkpoints`, rounded to a percentage. Tutorials and placement gestures are not
checkpoints. Repeated checking of the same checkpoint cannot create extra credit.
Hints and retries do not remove earned progress; they change the support record.
The authored question set determines the checkpoint count, which must be shown
in the content data rather than guessed from clicks.

E5 reports its objective analysis result separately from `draft submitted` and
`teacher review pending`. Do not give an automatic literary-quality percentage.
Completion unlocks a replay/next available day, not an unsupported claim of mastery.

### Math correctness contract

- Store quantities as integer numerator/denominator pairs; use exact rational arithmetic rather than decimal approximations.
- Accept equivalent fractions and equivalent mixed/improper forms. For example, `9/12` and `3/4` represent the same amount. If conversion to a mixed form is the explicit task, ask for that representation separately after acknowledging numerical correctness.
- Require positive denominators and a unit for measured quantities. Reduce internally; do not reject an otherwise correct amount solely because it is unreduced.
- Visual wholes must have the same scale. Repartitioning changes the number of pieces, never the amount represented.
- Authored examples have nonnegative available quantities; an impossible withdrawal returns a clear constraint message rather than a negative reservoir.
- Round-specific process requirements matter: a correct typed answer does not replace the value-preserving exchange the player is learning to perform.

### English correctness contract

- Device judgments follow sounds in the supplied recording, not letter equality. Store token IDs, relevant phonemes, stress, positions, and accepted evidence sets with authored content.
- Treat a phrase as capable of containing several devices. A prompt can target one sound without asserting that all other classifications are wrong.
- Use short, original, age-appropriate lines. Have a teacher/language reviewer check pronunciation, naturalness, and answer keys before recording final audio.
- If a local pronunciation makes an item ambiguous, author an alternate accepted answer or replace the item. Do not mark a learner wrong for a legitimate pronunciation variant.
- Replaying audio is always free. Transcript/phoneme assistance is available and recorded as an assistance mode; a text-assisted attempt is not reported as an independent listening measure.
- Free writing is saved for review. Token matching or keyword counting alone must not claim that a poem contains a valid literary device.

## 5. Mathematics: Numeric Ruins, Q1 Week 1

### M1 - Day 1: Fraction Bridgeworks

**Lesson ID:** `numeric-ruins-q1-week-1-day-1`  
**Focus:** add fractions with a shared denominator; connect an expression to a physical amount.  
**Setting:** a stone bridge workshop among Numeric Ruins. Each equal-length unit beam is divided into labeled sockets.

#### Board and player tools

Show two supply trays, the addition expression, an empty one-unit measuring rail,
and an answer strip. A tray labeled `2/8` holds two movable pieces of size `1/8`;
the second tray labeled `3/8` holds three more of the same size. Players can move
pieces individually or select a tray's complete amount. A quarter-sized piece
can be a distractor in later practice, but each piece must display its true size.

#### Core loop

1. Inspect the unit beam and identify what fraction one socket represents.
2. Move the first tray's quantity to the measuring rail, then join the second quantity end to end.
3. Select numerator and denominator values for the built total. The denominator describes equal parts of one whole, not the number of trays.
4. Press Test Bridge. The traveler crosses only after the piece model and answer agree with the sum.
5. See both addends recolor into a single result while preserving their original boundaries. A short explanation links the model to the equation.

#### Three authored rounds

| Round | Task | Expected total | Change in challenge |
|---|---|---|---|
| 1 | Join `2/8 + 3/8` | `5/8` | All pieces preselected; identify the total after placing both trays |
| 2 | Join `3/10 + 4/10` | `7/10` | Select the correct number of equal-sized pieces from extra supply |
| 3 | Join `5/12 + 4/12` | `9/12`, equivalent to `3/4` | Explain why the total still uses twelfths; optionally regroup the display into quarters |

Each round has two scored checkpoints: the committed piece model and the total.
The third round's explanation is an evidence choice with its own checkpoint.
An incorrect piece-size choice cannot be hidden by a correct numerical answer.

#### Validation and feedback

Check the represented value of each addend, the combined value, and the submitted
fraction. An answer such as `5/16` for Round 1 highlights the denominator and
replays one unchanged eighth-length socket: joining pieces did not halve their
size. If an addend is incomplete, outline its missing piece before changing any
answer. Accept `3/4` in Round 3 even when the physical rail still contains nine twelfths.

**Exit check:** independently model `1/6 + 3/6`; accept `4/6` or `2/3`. Ask the
player to point to the invariant one-sixth piece. Success restores the first bridge.

**Minimum assets/data:** stone sockets, equal-length unit rails, fraction tiles,
tray labels, traveler crossing animation, expression/answer controls, and exact
piece-value metadata. The traveler is a reward animation, not a platforming test.

### M2 - Day 2: Mosaic Converter

**Lesson ID:** `numeric-ruins-q1-week-1-day-2`  
**Focus:** equivalent fractions and addition/subtraction with unlike denominators.  
**Setting:** two ruined mosaic panels must use a shared tile size before their colored regions can be combined or compared.

#### Board and player tools

Provide two equal-sized whole panels with different subdivisions, a partition
selector, transparent subdivision guides, an operation switch fixed by the task,
and a result panel. Tapping a partition value overlays extra equal cuts without
changing any shaded area. Undo restores the previous subdivision. For a
24-part display, offer a zoomed work area and grouped rows instead of tiny tap cells.

#### Core loop

1. Inspect the two original amounts and predict whether the task joins or removes an amount.
2. Choose a denominator that can partition both models exactly; the game displays cuts but does not choose the denominator for the player.
3. Fill the equivalent numerator labels. The player must preserve each shaded amount under the new cuts.
4. Transfer same-sized colored tiles to the result panel: join for addition, mark/remove the subtrahend for subtraction.
5. Submit the resulting amount and inspect a before/after overlay proving that conversion preserved value.

#### Three authored rounds

| Round | Task | Example conversion and answer |
|---|---|---|
| 1 | `1/3 + 1/4` | `4/12 + 3/12 = 7/12` |
| 2 | `5/6 - 1/4` | `10/12 - 3/12 = 7/12` |
| 3 | `7/8 - 1/6` | `21/24 - 4/24 = 17/24` |

Each round checks three commitments: valid common partition, equivalent amounts,
and final operation/result. The least common denominator is efficient but not
the only valid route: Round 1 also accepts twenty-fourths. Authored UI choices
may limit the partition selector to readable exact subdivisions up to 48 parts.

#### Validation and feedback

Use divisibility and cross multiplication to validate the partition and both
equivalences. Selecting sixths for thirds and fourths leaves the quarter boundary
visibly crossing a cell and explains why that shared unit cannot represent both
exactly. Rewriting `1/3` as `1/12` highlights the lost shaded area; conversion must
change numerator and denominator together. Do not automatically mark every
non-minimal common denominator as a misconception.

**Exit check:** convert and solve `3/4 - 1/3`; accept `5/12` or any exact
equivalent. Completion restores the mosaic's two matching tile grids.

**Minimum assets/data:** two equal whole panels, scalable vector/grid subdivisions,
colored tile overlays, transfer animation, zoom controls, equivalent-fraction
records, and multiple valid common-denominator routes.

### M3 - Day 3: Whole-Trade Depot

**Lesson ID:** `numeric-ruins-q1-week-1-day-3`  
**Focus:** add mixed numbers and regroup complete fractional units into wholes.  
**Setting:** supply crates power a lift at the ruins. One whole crate and a full set of matching fractional parcels represent equal quantities.

#### Board and player tools

Give the player a whole-crate shelf, a fractional-parcel shelf, a common-unit
converter carried over from M2, and an Exchange Mat. Only parcels of the same
unit size can be grouped on that mat. Every whole crate remains visible as an
outlined container, so learners can open or close it and see the pieces inside.

#### Core loop

1. Unpack the two mixed quantities into whole crates and fractional parcels.
2. Convert fractional portions to the same unit when needed, preserving both addends.
3. Combine whole crates and combine fractional parcels on separate shelves.
4. When the parcel shelf contains at least one whole, select exactly one whole's worth and press Exchange. That group becomes one additional crate.
5. Write the final mixed quantity and run the lift. Show the conservation ledger: value before combining = value after trading.

#### Three authored rounds

| Round | Task | Expected model and result |
|---|---|---|
| 1 | `1 2/5 + 2 1/5` | Three whole crates and `3/5`; no exchange needed |
| 2 | `2 3/4 + 1 2/4` | Three wholes and `5/4`; exchange `4/4` for one whole to get `4 1/4` |
| 3 | `1 2/3 + 2 5/6` | Convert `2/3` to `4/6`; combine `9/6`; trade `6/6`; finish at `4 1/2` |

Scored checkpoints are correct unpacking/conversion, a valid exchange or explicit
No Exchange Needed decision, and final quantity. Round 1 establishes that
regrouping is conditional rather than a button pressed in every task.

#### Validation and feedback

The exchange mat accepts only a selection whose value is exactly one whole;
it must remove those parcels and add exactly one crate atomically. A group of
`3/4` cannot produce a whole. If the player submits `3 5/4`, acknowledge its
correct value, then ask for the required mixed-number representation and allow
the exchange. If the player writes `4 5/4` after exchanging, compare the ledger
and point out that the traded parcels were counted twice.

**Exit check:** solve `1 5/6 + 2 2/3`; the model yields `4 1/2`. Ask which
fractional group became the extra whole. Completion repairs the depot lift.

**Minimum assets/data:** whole crates, fractional parcels, exchange mat, reversible
open-crate animation, value ledger, and integer/fraction trays. Parcel textures
may be reused, but values must be data-driven and printed clearly.

### M4 - Day 4: Reservoir Rescue

**Lesson ID:** `numeric-ruins-q1-week-1-day-4`  
**Focus:** subtract fractions and mixed numbers, including exchanging one whole before subtraction.  
**Setting:** an old water station must fill a measured order while displaying the exact water left.

#### Board and player tools

Show the available amount as whole tank units plus a partial unit, a separate
order jug, a shared-denominator control, a Trade One Whole control, and an Undo
valve. One tank unit always represents one liter. Water movement is a measured
step animation triggered by taps; players do not need to drag a valve accurately
or stop a moving liquid at the right moment.

#### Core loop

1. Read the available amount and the customer's order, including liters.
2. Put both quantities into a compatible fractional unit.
3. If the fractional shelf is too small for the fractional withdrawal, exchange one full tank into the chosen fractional units. The total displayed water must stay constant.
4. Transfer the requested whole and fractional quantities to the order jug.
5. Label the remainder, then verify `delivered + remaining = starting amount` before the station opens its gate.

#### Three authored rounds

| Round | Available minus order | Required reasoning and answer |
|---|---|---|
| 1 | `2 5/8 - 1 3/8` | No regrouping; `1 2/8 L`, equivalent to `1 1/4 L` |
| 2 | `3 1/4 - 1 3/4` | Rewrite the start as `2 5/4`; remainder `1 1/2 L` |
| 3 | `4 1/6 - 2 3/4` | Use twelfths; trade to `3 14/12`; subtract `2 9/12`; remainder `1 5/12 L` |

Checkpoints are compatible units, valid regroup/no-regroup decision, and an
order/remainder pair that conserves the start. The conservation check is part
of the task, not a decorative answer reveal.

#### Validation and feedback

Allow a valid improper-fraction strategy as an alternative: the player can
exchange all whole units into parts, then subtract. Do not require one canonical
click order when another exact representation demonstrates the same idea.
Prevent overdrawing while explaining the missing fractional units. If the
player adds four quarters to the partial tank but forgets to remove one whole,
freeze the ledger and highlight the extra liter that appeared.

**Exit check:** represent and solve `2 1/3 - 5/6`; result `1 1/2 L`. The learner
must demonstrate a valid exchange or equivalent improper representation.

**Minimum assets/data:** whole-liter tanks, measured fraction cells, order jug,
transfer arrows, reversible exchange animation, unit labels, and conservation
validation. No real-world liquid safety claim is implied by the fantasy station.

### M5 - Day 5: Caravan Supply Planner

**Lesson ID:** `numeric-ruins-q1-week-1-day-5`  
**Focus:** interpret and solve fraction addition/subtraction problems, then make a feasible resource decision.  
**Setting:** a caravan carries measured supplies between three sections of Numeric Ruins.

#### Board and player tools

Provide a mission card, visible inventory, draggable quantity/operation tiles,
a planning ledger, and a small route board. Select a mission first, build an
equation, enter an amount, and press Trial Delivery. The caravan's trip visualizes
the submitted plan; it is not controlled by reflexes. Trial mode allows revision
without deleting inventory or awarding repeated points.

#### Three mission rounds

1. **Combine supplies.** Two crews contribute `2 1/4 m` and `1 2/3 m` of rope. Build an addition equation and load the combined amount. Correct total: `3 11/12 m`. The unit is meters, and both ropes must use the same scale in the model.
2. **Use and retain.** A repair crate contains `3 1/4 m` of ribbon; a job uses `1 5/6 m`. Build a subtraction equation, show the exchange, and label the retained material. Correct remainder: `1 5/12 m`. Adding the order is the targeted wrong-operation misconception.
3. **Plan a feasible route.** Start with `5 L`. Select exactly three different stations and deliver at least `3 1/2 L` total while keeping at least `1 L`. Requests are A=`1 1/2 L`, B=`1 3/4 L`, C=`3/4 L`, D=`1 1/4 L`; each request may be served at most once. Build the total-delivery equation and the remaining-water equation, then run the caravan.

Round 3 accepts A+B+C (`4 L`, `1 L` left), A+C+D (`3 1/2 L`, `1 1/2 L` left),
and B+C+D (`3 3/4 L`, `1 1/4 L` left). A+B+D fails the reserve rule. Visiting
the same valid set in a different order is also valid; do not grade route order
when it is not a mathematical constraint.

#### Checks, feedback, and completion

Rounds 1-2 check equation meaning, exact computation/model, and labeled output.
Round 3 checks station uniqueness/count, computed delivered/remainder quantities,
and the two numerical constraints. Test the whole plan rather than comparing it
with one saved solution. On failure, replay the first violated constraint and
show the player's own ledger: e.g., enough delivered but only `1/2 L` reserved.

**Exit check:** a new story supplies `2 1/2 m` and uses `3/4 m`; the player chooses
the operation, gives `1 3/4 m` left, and selects the conservation explanation.
Completion restores the caravan route and summarizes the week's five math skills.

**Minimum assets/data:** caravan, rope/ribbon units, station request cards,
route markers, editable equation tiles, inventory ledger, and a constraint-based
validator accepting all feasible station combinations.

## 6. English: Reading Island, Q1 Week 1

### E1 - Day 1: Soundscape Studio

**Lesson ID:** `reading-island-q1-week-1-day-1`  
**Focus:** identify onomatopoeia and explain the sound-event connection.  
**Setting:** Quill's recording desk overlooks the Reading Island garden; illustrations are silent until their sound words are restored.

#### Board and player tools

Show a short illustrated scene, a narrated line with selectable word tokens,
an audio replay button, and a three-position sound timeline. Learners hear the
line, choose words that imitate an event's sound, then place word tokens beside
the event they describe. A transcript can be opened at any time. Sound effects
support meaning but do not substitute for reading/listening to the line.

#### Core loop

1. Play the scene narration and inspect what happens.
2. Select the word or words that imitate a sound; do not select the object merely making that sound.
3. Put each selected word at the corresponding scene event on the timeline.
4. Choose a short explanation linking word and sound, then press Play Scene.
5. The scene replays with its sound words emphasized. Incorrect placements remain editable.

#### Three authored rounds

| Round | Original line | Target evidence | Interaction change |
|---|---|---|---|
| 1 | "Buzz! A bee circles the bloom." | `Buzz` imitates the bee's sound; `bee` names its source | One event, one target; guided word selection |
| 2 | "Under the roof we hear drip, drop." | `drip` and `drop` imitate falling water | Select both tokens and place them at two dripping events |
| 3 | "Crack! The branch breaks; splash! It falls into the pond." | `Crack` belongs to the break; `splash` to the water impact | Two event types; ordered timeline and context explanation |

Checkpoints are the committed evidence set, its event mapping, and the explanation.
Timeline placement is by discrete labeled slots, not audio timing precision.

#### Validation and feedback

Validate selected token IDs and the authored event relations. Selecting `bee`
replays "what made the sound" versus "a word imitating that sound." Swapping
Crack and Splash highlights the illustrated event mismatch. Do not reject a
phrase for also containing alliteration: today's question targets sound imitation.
Preserve all authored valid sound-word spellings and capitalization variants.

**Exit check:** "Clang! The bell rings above the gate." Select `Clang` and link
it to the bell. Completion restores the studio's first sound lantern.

**Minimum assets/data:** three scene cards, event icons, original narration,
optional gentle sound effects, token-to-audio timings, replay/transcript controls,
and sound-word/event evidence metadata. Total silence still leaves a usable
text-assisted learning route, clearly recorded as that mode.

### E2 - Day 2: Alliteration Airship

**Lesson ID:** `reading-island-q1-week-1-day-2`  
**Focus:** find and deliberately compose repeated initial consonant sounds.  
**Setting:** small sail panels on a library airship catch a breeze when a meaningful phrase carries its chosen opening sound.

#### Board and player tools

Show a short sentence frame, word tiles with replayable pronunciation, a target
sound badge, and sail sockets for selected words. Each word retains its whole
spelling; selecting it can display the relevant sound in a simple phoneme badge.
The player chooses words by sound, orders them, and listens to the phrase before
launch. A grammatical support-word strip keeps articles and prepositions separate
from the targeted content words.

#### Three authored rounds

1. **Repair a phrase.** Complete "Seven ___ sails ___" using `silver` and `sway`. Replay "Seven silver sails sway" and identify repeated initial `/s/`. Distractors must be semantically plausible enough to require listening, but the accepted set must remain natural.
2. **Different letters, shared sound.** Build the core phrase "Kind cats carry kites." The four content words start with `/k/` in the supplied recording. `city` is a deliberate distractor: its initial `c` is pronounced `/s/`. Explain why letter identity alone cannot choose the words.
3. **Control the target sound.** A garden scene offers several authored natural phrases; choose a target `/b/` and construct "Bright birds balance berries." Other accepted tile arrangements may be stored when grammatical and meaningful. The player highlights at least three target words and identifies the opening sound before launch.

Each round scores the sound-based tile/evidence selection, an accepted meaningful
ordering, and a sound explanation. The system must not accept a random string
of `/b/` words as a finished phrase just because their initial sounds match.

#### Validation and feedback

Use reviewed pronunciation metadata for the selected recording. Require at least
three authored content words sharing the target initial consonant sound. Ignore
function words when judging the intended pattern; they may appear between target
words. For constrained tile construction, compare against reviewed accepted
orders, not a general claim that arbitrary generated English is grammatical.
If `city` is chosen for `/k/`, compare its sound with `cat` and allow revision.

**Exit check:** from "Lazy cats carry coats," highlight `cats`, `carry`, and
`coats` for initial `/k/`; `Lazy` begins with a different consonant sound.
Completion fills the airship's second sail. Validate the selected sounds rather
than rewarding every word that happens to contain the letter `c`.

**Minimum assets/data:** airship/sail states, target-sound badges, word tiles,
pronunciation clips, authored phrase frames, accepted orders, and initial-phoneme
annotations. The airship moves only after checking; no flight controls are required.

### E3 - Day 3: Vowel Echo Cavern

**Lesson ID:** `reading-island-q1-week-1-day-3`  
**Focus:** recognize assonance through repeated vowel sounds in nearby words.  
**Setting:** an echo chamber below Reading Island's library tree, with word lanterns that resonate when their selected vowel sounds match.

#### Board and player tools

Show a spoken line, selectable word lanterns, a vowel-sound tuning fork with
recorded examples, and a Connect Echo control. The relevant vowel portion can
be replayed within the whole word; learners should not be asked to infer a sound
from an isolated letter. Connecting lanterns traces a visible echo path across
the selected words.

#### Three authored rounds

| Round | Material | Required action and evidence |
|---|---|---|
| 1 | "Rain trails across the pale lake." | Select `Rain`, `trails`, `pale`, `lake`; tune to the shared `/eɪ/` sound |
| 2 | "A blue moon lights the room." | Connect `blue`, `moon`, `room` for `/uː/`, despite their differing vowel spellings |
| 3 | Phrase-repair bench: "We wait by the pale lake until ___." plus candidate tiles `late`, `dawn`, `night` | Insert `late`; connect `wait`, `pale`, `lake`, and `late` for `/eɪ/`. All three choices can finish a meaningful sentence, so the target sound decides the repair |

Display Round 3's completed line in two readable lines if necessary. Use a
separate contrast prompt to compare `rain` and `said`: the shared `ai` spelling
does not give them the same vowel sound in the supplied recording.

Each round checks the word set, vowel-sound choice, and a contrast or repair
decision. Nearby repeated initial consonants may coexist; the prompt explicitly
asks for the vowel echo and does not claim the line has only one device.

#### Validation and feedback

Judge the target stressed vowel segment in the reviewed pronunciation. If a word
contains several vowels, mark the relevant syllable explicitly. Contrast `rain`
and `said` by replaying their vowel sounds; do not state that every `ai` spelling
has the same sound. The line's matching words must remain close enough to form
a meaningful pattern; a remote repeated vowel somewhere in a long paragraph is
not automatically accepted as the intended evidence.

**Exit check:** in "The slow boat floats home," connect `slow`, `boat`, `floats`,
and `home` for `/oʊ/` in the supplied recording. Completion lights the echo tunnel.

**Minimum assets/data:** lanterns, echo connectors, vowel replay badges, short-line
audio, token/syllable metadata, and a reviewed sound-contrast bank. Cosmetic
pitch changes must not distort the word pronunciation being assessed.

### E4 - Day 4: Consonance Threadworks

**Lesson ID:** `reading-island-q1-week-1-day-4`  
**Focus:** identify recurring consonant sounds beyond initial-position alliteration and distinguish vowel/consonant evidence.  
**Setting:** a bookbinding workshop where sound threads connect relevant portions of word labels.

#### Board and player tools

Each word is a card with a replay button and an authored beginning/middle/end
sound strip. The player chooses a sound badge, then connects the matching
noninitial sound locations with a thread. A second inspection layer lets them
compare this evidence with an initial-sound or vowel-sound selection. Sound
positions are recorded in phoneme metadata; spelling length does not determine
where the sound occurs.

#### Three authored rounds

1. **End-sound thread.** Read/hear "The boat hit the net." Connect the final `/t/` in `boat`, `hit`, and `net`. Their vowel sounds differ, so the explanation focuses on the repeated consonant.
2. **Compare two patterns.** Inspect "Kind cats carry kites" and "The duck shook the sack." Connect the opening `/k/` evidence in the first line as alliteration, then the ending `/k/` in `duck`, `shook`, `sack` as the day's noninitial consonance example. This is a comparison task, not a claim that alliteration can never be described as consonant repetition.
3. **Repair a broken thread.** Complete "A beam of light falls across the ___." Choose between `room`, `roof`, and `road`. Connect `beam` and `room` at final `/m/`, replay the completed line, and explain why changing the last word changes the sound pattern.

Checkpoints are sound-location evidence, a target-sound selection, and the
comparison/repair explanation. Where a phrase supports several legitimate
literary labels, ask for the particular evidence location rather than demanding
one mutually exclusive category.

#### Validation and feedback

Validate selected token IDs, target consonant, and the marked occurrence. A
correct `/t/` token selected at the wrong sound location receives location
feedback. Replaying `duck`, `shook`, and `sack` makes the shared `/k/` audible
despite different vowel sounds. Do not confuse final letters with final sounds:
silent letters and consonant clusters require reviewed phoneme-position data.

**Exit check:** "A cap fell beside the rope." Connect the final `/p/` in `cap`
and `rope`, then explain that this is a consonant echo. Completion binds the
workshop's restored book. Two-word evidence is sufficient for this short exit
line; the game must not enforce the earlier three-word threshold everywhere.

**Minimum assets/data:** bookbinding desk, discrete thread anchors, beginning/
middle/end sound strips, word audio, consonant-location metadata, and reviewed
comparison explanations. Thread placement is snap-based and accessible by taps.

### E5 - Day 5: Poetry Lantern Festival

**Lesson ID:** `reading-island-q1-week-1-day-5`  
**Focus:** apply the four sound-device ideas and compose an original four-stanza poem, three lines per stanza.  
**Setting:** a library garden festival; each stanza becomes one lantern panel, while the pupil's poem stays readable in a manuscript view.

#### Stage 1 - Inspect a model, not a memorized answer

Show three short original excerpts with narration and a targeted evidence task:

1. "Buzz! Bright bees circle the bloom." Select `Buzz` as sound imitation, then identify the separate initial `/b/` pattern in `Bright`, `bees`, and `bloom`. `Buzz` can also contribute to that `/b/` evidence; the content key must accept it.
2. "A blue moon lights the room." Highlight the vowel echoes and choose the reviewed shared sound.
3. "The boat hit the net." Connect the final consonant echoes and explain their sound position.

These are three objectively checked analysis checkpoints. They consolidate
E1-E4 without asking the player to label every line with exactly one device.

#### Stage 2 - Compose the festival poem

1. Choose an island-related theme: a garden morning, a journey to the library, or a rainy afternoon. Themes guide vocabulary but do not prescribe a single narrative.
2. Open a four-panel manuscript, each panel containing three line fields. Draft twelve original lines; save each edit locally while the activity is open.
3. Offer an optional vocabulary/sound bank and short sentence starters. Do not silently insert an entire completed poem and grade it as original writing.
4. Ask the learner to attempt one example of each of the four studied devices somewhere across the poem. They select a line/span and label their intended device. This is a game-specific practice constraint, not a quoted official requirement that every poem use all four.
5. Add a short note or sentence explaining one intended sound effect and how it suits the scene. Rhyme is optional and is never used as the sole measure of poem quality.

Use a full-size text editor or stanza-by-stanza view with keyboard-safe controls.
Switching stanza tabs must preserve drafts and annotations. Limit each line to
120 characters for the first implementation, provide a visible count, and never
silently truncate text. Do not require speech input or upload a child's voice.

#### Stage 3 - Rehearse, revise, submit

The learner reads the poem, optionally marks a self-correction, and checks a
plain-language review list: twelve nonempty lines, four groups of three, clear
theme, four intended device annotations, and one explanation. They can change
any line before selecting Save Poem. Show the submitted manuscript with a
downloadable text report and a clear Teacher Review Pending label.

#### What the software can and cannot conclude

- Automatically check: the three authored analysis items; four stanza containers; three nonempty lines each; annotation spans that still refer to existing text; one intention note; and successful saving/export.
- Treat an attempted device label as the learner's claim. Free-text `/b/`, vowel, or final-consonant quality is not established merely by a selected tag or repeated spelling.
- If an edit invalidates a span, retain the label in an Unplaced annotation tray and ask the learner to reattach it. Do not count a stale selection as valid evidence.
- Mark the creative product as submitted, not automatically correct. A teacher reviews whether the devices actually work, the poem is coherent, and the explanation fits.

#### Human review rubric

| Criterion | 0 | 1 | 2 |
|---|---|---|---|
| Poem structure | Missing most required structure | Nearly complete, needs a structural fix | Four stanzas with three lines each |
| Sound-device use | No supported example yet | Some intended devices work; others need revision | Examples of all four devices are supported |
| Meaning and coherence | Meaning difficult to follow | Clear theme with some awkward or disconnected lines | Consistent theme and understandable imagery |
| Evidence and revision | No usable explanation | Partial sound explanation or revision | Clear sound explanation and considered review/revision |

This 0-8 rubric is for a human reviewer. The interface may store an optional
teacher-entered result later, but this release must not fabricate a teacher
workflow or turn the rubric into an unsupported automatic score.

**Completion:** objective analysis attempted, complete manuscript saved, four
intent annotations placed, and intention note present. Assisted work may still
be submitted. The garden displays four lanterns and celebrates completion; it
does not announce that every literary judgment has been verified.

**Minimum assets/data:** festival garden, four lantern panels, manuscript editor,
the three original recorded excerpts, editable annotation chips, optional word
banks, draft storage, and text-report export. The submitted report includes the
poem, selected spans, intended devices, explanation, support used, and pending-review state.

## 7. Implementation handoff

### Routing and content

- Keep the ten lesson IDs above. They match the current Math/English placeholder ID pattern generated in `src/config/content.js`.
- Register only those ten IDs in the daily-game routing used by `src/scenes/QuarterDetailScene.js`. Replace their placeholder titles with the named games when each activity is implemented.
- Keep Math/English subject context in every scene launch and return. Do not route these IDs into the Science fallback curriculum or overwrite existing Science IDs.
- Use shared scene components for rational quantities, word/audio selection, instructions, navigation, result reporting, and drafts. Keep each game's core interaction distinct.
- The five-topics-per-quarter metadata is now present in `subjectWeekTopics.js`, with an explicitly unassigned fifth topic. Unimplemented slots remain placeholders; this file does not choose the unassigned topic or design its games.
- Science retains its existing twenty activities. Any future redistribution across five topic containers is a scheduling task, not an additional five-game commission.

### Suggested data contracts

Each daily definition needs `id`, `lessonId`, `subject`, `quarter`, `week`, `day`,
`title`, `objective`, `competencyRefs`, `interactionKind`, `tutorial`, `rounds`,
`exitCheck` or `submissionRules`, `assetKeys`, and `feedbackRules`. Separate authored
content from Phaser scene behavior.

Math round data includes exact input fractions, units, required representation/
process checkpoints, accepted strategies, resource constraints, and expected
results. English round data includes original text, token IDs, audio file keys,
pronunciation/syllable metadata, multiple accepted evidence sets, and reviewed
feedback. E5 adds line arrays, annotation spans, an intention note, and review status.

An attempt record stores the lesson ID, content version/seed, checkpoint outcomes,
first submissions, attempts, assistance mode, hints/solutions used, completion
state, and optional poem draft. Store objective results separately from creative
submission status. Do not require student names or external services to play.

### Art and sound direction

Math games use Numeric Ruins' geometric stonework, patterned floors, measuring
rails, and clear practical objects. English uses Reading Island's library tree,
books, cottages, manuscript materials, and garden trails. Keep the muted pixel-art
world and clean UI established in `DESIGN.md`; new game-specific art is a future
implementation deliverable, not an existing asset claim.

Narration must be recorded or reviewed before final English evidence keys are
locked. Normalize volume, support replay/pause/mute independently of music, and
include a complete text alternative. Visual sound cues must not teach the false
rule that sound devices are recognized by spelling alone.

### Build order

1. Build the exact-fraction model and M1, then reuse its representation in M2-M4.
2. Build M5 after the rational arithmetic and ledger checks are reliable.
3. Build the token/audio evidence component and E1-E4 with reviewed recording keys.
4. Build E5's draft editor, annotation persistence, and export after the evidence component.
5. Integrate all ten daily cards and verify the combined inventory remains twenty Science plus ten new games.

## 8. English implementation record

The five English lesson IDs in this document now route to `EnglishAdventureScene`.
Their content is in `src/config/englishWeekOne.js`, validation/state transitions
in `src/games/english/englishLogic.js`, and the accessible activity interface in
`src/ui/englishGameView.js` / `englishGames.css`.

Six original pixel-art assets were generated with the built-in image generator:
five subject-connected backdrops and a transparent word lantern. Exact prompts
and delivered paths are in `docs/ENGLISH_WEEK1_ASSETS.json`; each PNG also contains
its generation prompt. Artwork lives in `public/assets/english-week1/`.

The 106 bundled WAV recordings contain authored sentence narration, word
pronunciations, sound examples, and a rain/said contrast. They were synthesized
offline with the installed Microsoft Zira Desktop en-US voice, not recorded by
a human narrator. Source text and provenance are in the audio `manifest.json`;
the two `scripts/generate-english-audio.*` files reproduce them without a network
service. Final classroom pronunciation/content review remains a human task.

The games include unscored examples, three challenges, and an exit check for
Days 1-4. Day 5 includes three model analyses and a four-stanza editor. The editor
saves drafts and completed analysis locally, resumes saved work, validates
annotation locations after edits, and exports the literal manuscript and
intentions as text. It reports teacher review pending rather than assigning
automatic literary-quality grades. No Math minigame was implemented in this pass.

Validation for the English implementation: 51 logic checks and 16 targeted
browser checks passed, including desktop, phone, tablet, touch/keyboard input,
audio pause/settings, every sound-game round, valid alternative phrases, poem
draft recovery, edited-span invalidation, and export. The existing intro,
island/quarter routes, and five original Science game navigation flows also
passed their targeted regression checks. Production build passed. The visual
review's tablet/readability and phone-capture findings were resolved.

## 9. Math implementation record

All five Numeric Ruins lesson IDs route to `MathAdventureScene`. Authored
content and checkpoint labels are in `src/config/mathWeekOne.js`. Exact parsing,
arithmetic, model validation, and state transitions are in `src/games/math/`.
The accessible interface extends the existing activity frame in
`src/ui/mathGameView.js` and `mathGames.css`.

Five original pixel-art backdrops were generated with the built-in image
generator and saved to `public/assets/math-week1/`. The exact prompts and paths
are in `docs/MATH_WEEK1_ASSETS.json`, and the prompts are embedded in the PNGs.
Quill's existing transparent character art is reused for the bridge reward.
Rails, fixed-area mosaic grids, whole-crate units, parcels, litre units and
route lines are generated from exact model data in code.

Each game includes an unscored example, three challenges and an exit check.
Math answers accept whole numbers, fractions, and mixed numbers with a space.
Equivalent and improper fractions are valid; explicit exchange requirements
still apply to the model. Common denominators up to 48 parts, all-whole-to-part
water strategies, and all feasible station sets in any order are supported.
Each fixed-area mosaic panel has a draggable tile handle with a keyboard and
numeric equivalent. The selected count tracks the original shading, and both
tile groups transfer to the work mosaic. Zoomed panels can be panned.
Whole-crate inspection exposes the equal parts inside a single whole. In
Reservoir Rescue, drawing from a tank or a loose measure raises the delivery
jug's water level toward the order line. Caravan stops are native buttons on the
map, and an unscored trial traces the chosen route in visit order.
Caravan's rope and ribbon previews use a shared four-metre rail and reflect the
learner's selected operation. Its exit check records an explicit conservation
explanation independently of the numerical answer. Each day's tutorial diagram
uses the quantities and operation described in that day's worked example.

Native selects and buttons provide the planned equation and quantity choices
with keyboard and tap alternatives. First submitted checkpoints, corrections,
hints and worked examples are recorded independently. Undo and reset change the
model without erasing assessment records. Completed journals save on this
device and download as literal text; saving failures offer the download path.
Help, pause and settings preserve the model. Return restores the Numeric Ruins
quarter and prior scroll position. No future-week games are added.

Validation: 67 pure logic checks, 18 unique Math desktop/phone/tablet browser
checks, and two existing English/Science navigation regressions passed. Updated
Caravan completion reruns also verify the saved explanation checkpoint. The
production build passes with the project's existing bundle-size advisory.
Visual review evidence and its scoped follow-up are kept under
`.impeccable/review/math/`.
The independent review initially requested the M5 length models, exit
conservation evidence, matching tutorial diagrams, and scoped design notes.
Its follow-up scored all four fixes resolved and returned SHIP for that fix
list; this is a scoped verdict rather than a second whole-surface review.

## 10. Acceptance checklist

- [x] Exactly five Math and five English daily games are specified/registered for Q1 Week 1; Science remains twenty, giving thirty unique games in the release.
- [x] Each activity has its own interaction, three authored rounds/stages, meaningful feedback, and an explicit completion state.
- [x] M1 keeps the fractional unit unchanged during addition; M2 preserves value during conversion; M3/M4 exchanges conserve value.
- [x] Math accepts equivalent rational answers, alternate valid strategies, and every feasible M5 plan rather than a single hardcoded route.
- [x] No new multiplication/division objective is hidden inside the Math Week 1 games.
- [ ] English judgments use reviewed sound metadata; alternate valid evidence and pronunciation cases are handled.
- [x] Audio replay, transcript assistance, tap alternatives, keyboard input, readable text, and reduced motion work.
- [x] E5 requires a four-stanza, twelve-line draft and distinguishes saved submission from human-reviewed literary quality.
- [x] Pause, help, retries, settings, and return preserve the current subject and day; drafts survive navigation as specified.
- [x] No extra future-week games, assessments counted as extra games, or speculative Science additions inflate the thirty-game scope.
- [x] Implementation tests cover rational edge cases, regrouping conservation, all M5 valid/invalid station combinations, sound-evidence alternatives, draft/annotation edits, and browser navigation. The current suite has 67 passing logic checks. Math browser checks cover desktop, phone, and tablet; existing English and Science navigation regressions also pass.
