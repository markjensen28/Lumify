# LUMIFY: Curriculum-Aligned Minigame Proposal

Prepared: 12 October 2026
Updated: 13 October 2026 — approved five-game Science capstone extension.

## 1. Recommended scope

Plan **30 learning activities in total: 20 Science games, five English games, and five Mathematics games**. Science S1-S20 are implemented; the ten English/Mathematics activities are planned additions. See [the Science implementation record](SCIENCE_QUARTER_GAMES.md) for playable content.

| Subject and realm | Confirmed scope | Recommended structure |
| --- | --- | --- |
| Science / Vulcan Caverns | Grade 6, all of Quarter 1, plus an approved optional extension | Five Mixtures games + five Separation Techniques games + five Benefits of Separation games + five Mixtures and Separation in Action games |
| English / Reading Island | Grade 6, Quarter 1, Week 1 | Five games integrating the week's language strands |
| Mathematics / Numeric Ruins | Grade 6, Quarter 1, Week 1 | Five games covering fraction operations, problem solving, and problem creation |

**The number of games is a design choice, not a Curriculum Guide requirement.** The supplied Science Q1 guide spans ten weeks. The approved fourth block brings Science to twenty games and can be used as an optional Week 11 extension, or integrated into Weeks 9-10 as review where classroom time permits. It adds practice applying the existing competencies rather than a fourth official competency. If the interface retains `DAY 1`, `DAY 2`, etc., treat those as activity labels rather than an official DepEd daily schedule.

This proposal uses the **2016 Curriculum Guides supplied in this project**. It maps their Grade 6 sections, rather than asserting that those editions are the currently prescribed curriculum for a particular school. All gameplay names, challenge counts, and pacing suggestions below are proposed designs.

## 2. What the guides actually cover

### Science: Quarter 1 is Matter, specifically mixtures and separation

The relevant Grade 6 section is on [Science Guide pages 80-83](../referencefiles/K-12%20Curriculum%20Guides/Science-CG_with-tagged-sci-equipment_revised.pdf#page=80).

| Guide competency | Learning target, paraphrased | Guide week band | Proposed coverage |
| --- | --- | --- | --- |
| `S6MT-Ia-c-1` | Describe how uniform and non-uniform mixtures appear and how they are used | Weeks 1-3 | Existing S1-S5 |
| `S6MT-Id-f-2` | Identify separation techniques, including decantation, evaporation, filtration, sieving, and magnetic separation | Weeks 4-6 | New S6-S10; transfer practice in S11-S14 |
| `S6MT-Ig-j-3` | Explain benefits of separating materials from community products | Weeks 7-10 | New S11-S15 |

The first block's performance standard includes preparing useful mixtures. The separation block also expects learners to separate desired materials from familiar products. Consequently, simulated manipulation is a useful complement to identifying technique names. These expectations appear on pages 80 and 82-83.

The guide's code legend identifies the Roman numeral as the quarter and the lowercase letter as the week; the letter ranges above follow that convention. See [Science page 202](../referencefiles/K-12%20Curriculum%20Guides/Science-CG_with-tagged-sci-equipment_revised.pdf#page=202).

**Topic structure:** the current Q1 map in [content.js](../src/config/content.js) contains `Mixtures`, `Separation Techniques`, `Benefits of Separation`, and **Mixtures and Separation in Action**, with five lesson slots each. All five slots in the fourth topic run S16-S20. Q2-Q4 have five empty slots in an **Additional Week** block, pending their reference designs and topic content.

### English: Week 1 has several parallel strands

The [English Guide's Week 1 table, page 127](../referencefiles/K-12%20Curriculum%20Guides/English-CG.pdf#page=127), contains more than one topic. Five games should combine related strands instead of interpreting five games as five unrelated vocabulary quizzes.

| Strand | Week 1 target, paraphrased | Verified code(s) | Proposed game |
| --- | --- | --- | --- |
| Listening | Analyze devices in heard language: onomatopoeia, alliteration, assonance, personification, irony, and hyperbole | `EN6LC-Ia-2.3.1`, `EN6LC-Ia-2.3.3`, `EN6LC-Ia-2.3.2`, `EN6LC-Ia-2.3.6`, `EN6LC-Ia-2.3.8`, `EN6LC-Ia-2.3.7` | E1 |
| Vocabulary | Work out an idiom's meaning from its context | `EN6V-Ia-12.3.1` | E2 |
| Grammar | Write coherent sentences using regular plural nouns correctly | `EN6G-Ia-2.3.1` | E3 |
| Reading | Analyze onomatopoeia, alliteration, assonance, and consonance in written language | `EN6RC-Ia-2.3.1`, `EN6RC-Ia-2.3.3`, `EN6RC-Ia-2.3.2`, `EN6RC-Ia-2.3.9` | E4, with guided analysis before composition |
| Writing | Produce a poem with four stanzas of three lines each | `EN6WC-Ia-2.2.2` | E4 |
| Oral language | Recount an experience suited to an occasion | `EN6OL-Ia-1.17` | E5 |
| Reading fluency | Notice and correct one's own oral-reading mistakes | `EN6F-Ia-2.9` | E5 |
| Viewing | Describe how lighting functions in film or moving images | `EN6VC-Ia-5.1.1` | E5 |
| Attitude | Practice politeness, tact, and receptiveness to criticism | `EN6A-Ia-16`, `EN6A-Ia-17`, `EN6A-Ia-18` | Embedded across E2-E5 |

The listening codes are listed together in the guide, including its tagged-materials section on [page 144](../referencefiles/K-12%20Curriculum%20Guides/English-CG.pdf#page=144). The proposal preserves that group rather than guessing a one-to-one code assignment for each device. The guide groups some figurative devices under its listening heading; instruction should still distinguish repeated sounds from personification, irony, and exaggeration.

### Mathematics: Week 1 includes creating problems

The relevant competencies are on [Mathematics Guide pages 175-177](../referencefiles/K-12%20Curriculum%20Guides/Math-CG_with-tagged-math-equipment.pdf#page=175).

| Guide competency | Week 1 target, paraphrased | Proposed coverage |
| --- | --- | --- |
| `M6NS-Ia-86` | Add and subtract fractions and mixed numbers, including cases requiring regrouping | M1-M3, reinforced in M4 |
| `M6NS-Ia-87.3` | Solve routine and unfamiliar addition/subtraction problems using appropriate strategies and tools | M4; applied challenges in M1-M3 |
| `M6NS-Ia-88.3` | Create fraction addition/subtraction problems with reasonable answers | M5 |

Multiplication starts under a Week 2 code on page 177. Keep these first five games focused on addition and subtraction. Equivalent fractions, common denominators, and number-line representations support those operations; they should not replace them as the only assessed target.

## 3. Mechanics already used: avoid repeating these

I reviewed the existing Science game configuration and the supplied [Mini-Games concept document](../referencefiles/Mini-Games.pdf), which describes the memory game.

| Existing Science game | Its main player loop | Avoid as a new game's central loop |
| --- | --- | --- |
| S1: Mix Match Memory Quest | Reveal hidden cards and remember matching term/picture/description sets | Another memory grid with different pictures |
| S2: Sort the Supply Cart | Put mixtures into classification bins, then select a use | Another two-bin sorter |
| S3: Mixture Compare Cards | Examine paired samples and submit answers | Another paired-card multiple-choice activity |
| S4: Science Court | Make a classification claim and choose supporting evidence | Another courtroom or claim-plus-evidence-card game |
| S5: Invent-a-Mix Workshop | Select ingredients, mix, name, classify, and describe a creation | Another recipe or ingredient-combination workshop |

**Reusing an input is fine. Reusing the whole loop is what to avoid.** Dragging a magnet, placing a filter, and moving fraction pieces can all use pointer input while asking the learner to perform different operations. Changing a game title, background, or answer labels alone would not meet the variety goal.

## 4. Science: proposed complete Quarter 1 sequence

### Sequence overview

| Activity | Title | Main mechanic | Curriculum block |
| --- | --- | --- | --- |
| S1-S5 | Existing five Mixtures games | Memory, classification, comparison, defense, mixture creation | Mixtures, Weeks 1-3 |
| S6 | Magnet Sweep Rescue | Spatial collection using material response | Separation, Weeks 4-6 |
| S7 | Sieve Gate | Calibrate an opening size and observe particle passage | Separation, Weeks 4-6 |
| S8 | Filter Forge | Assemble an apparatus and inspect its two outputs | Separation, Weeks 4-6 |
| S9 | Salt Crystal Watch | Observe a time-based transformation and record it | Separation, Weeks 4-6 |
| S10 | Steady Pour | Control settling and pouring | Separation, Weeks 4-6 |
| S11 | Community Shift | Schedule separation services around community needs | Benefits, Weeks 7-10 |
| S12 | Recovery Circuit | Connect a sequence of processes into a working route | Benefits, Weeks 7-10 |
| S13 | Village Impact Board | Plan interventions and examine their consequences | Benefits, Weeks 7-10 |
| S14 | Broken Separator Lab | Diagnose a failure through controlled experiments | Benefits, Weeks 7-10 |
| S15 | Lumi Field Report | Create a visual explanation of a community benefit | Benefits, Weeks 7-10 |
| S16 | Mystery Sample Trail | Gather observations to identify and describe an unfamiliar mixture | Integrated Q1 review; optional Week 11 |
| S17 | Recovery Kit Quest | Pack a minimal, suitable tool kit for specified recovery goals | Integrated Q1 review; optional Week 11 |
| S18 | Separation Relay | Carry a sample through hands-on separation checkpoints | Integrated Q1 review; optional Week 11 |
| S19 | Fair Test Arena | Run two methods on equal samples and compare observed outcomes | Integrated Q1 review; optional Week 11 |
| S20 | Vulcan Workshop Revival | Complete an investigation-to-recovery mission that restores one workshop | Integrated Q1 capstone; optional Week 11 |

S16-S20 are implemented from the supplied references; see [Mystery Sample Trail](MYSTERY_SAMPLE_TRAIL_UI.md), [Recovery Kit Quest](RECOVERY_KIT_QUEST_UI.md), [Separation Relay](SEPARATION_RELAY_UI.md), [Fair Test Arena](FAIR_TEST_ARENA_UI.md), and [Vulcan Workshop Revival](VULCAN_WORKSHOP_REVIVAL_UI.md) for UI notes and artwork records. The full-screen reference prompts are in [Science Capstone UI Reference Prompts](art-direction/SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md).

### S6. Magnet Sweep Rescue

**Alignment:** `S6MT-Id-f-2`, magnetic separation.

- **Mission:** Recover iron fasteners from sand in Vulcan's repair yard.
- **Loop:** Inspect the mixture, move a magnet across it, observe which materials follow, then release the attracted pieces into a recovery tray. Later rounds add wood and explicitly identified nonmagnetic metal pieces.
- **Example:** Iron nails are recovered; sand and wooden chips remain. A copper piece remains too, showing why the rule cannot be "all metals stick."
- **Learning feedback:** A material-response overlay shows what moved and why. Ask the learner to name the technique after using it, rather than making the activity only a tool-selection question.
- **Success evidence:** Recover the magnetic component without reporting the whole mixture as magnetic. Measure the decision and recovery, not pointer speed.
- **Assets and scope:** Reuse sand art; add a magnet, iron nails, wood chips, recovery tray, and attracted/released states. Medium effort.
- **Distinctness:** Spatial manipulation based on a physical property, with no classification bins or hidden cards.

### S7. Sieve Gate

**Alignment:** `S6MT-Id-f-2`, sieving.

- **Mission:** Prepare sand for a village building project by removing larger stones.
- **Loop:** Adjust the sieve opening, predict which sizes can pass, run a batch, and inspect both the retained and passing material. Revise the opening when it fails the requested size limit.
- **Example:** An opening larger than the sand grains but smaller than the pebbles lets sand pass and retains pebbles. An overly large opening lets both through.
- **Learning feedback:** Show enlarged grain outlines beside the opening. Explain the result through relative sizes, not by a green/red flash alone.
- **Success evidence:** Select a workable size and identify both outputs. Include a case where similarly sized particles cannot be usefully separated by that sieve.
- **Assets and scope:** Sand, pebble size variants, sieve meshes, and two output piles. Medium effort; simplified size thresholds are enough.
- **Distinctness:** Calibration and prediction of passage, rather than manually sorting each object.

### S8. Filter Forge

**Alignment:** `S6MT-Id-f-2`, filtration.

- **Mission:** Build a working sand-and-water separation setup.
- **Loop:** Position the receiving container, funnel, and filter paper; pour the mixture; inspect the residue and filtrate. Missing paper or a misplaced receiver produces a visible apparatus problem to correct.
- **Example:** Insoluble sand remains on the filter while water passes through. A saltwater extension demonstrates that dissolved salt also passes through an ordinary paper filter.
- **Learning feedback:** Animate the material path and label both outputs. Show that an apparently clearer liquid can still contain dissolved material.
- **Success evidence:** Construct the setup, locate the recovered solid, and correctly describe what filtration did and did not remove.
- **Assets and scope:** Reuse sand-and-water art; add funnel, paper, residue, filtrate, and pouring states. Medium effort; this is a basic filtration apparatus, not an advanced water-treatment plant.
- **Distinctness:** Apparatus construction and component roles. It has no recipe selection or uniform/non-uniform answer panel.

### S9. Salt Crystal Watch

**Alignment:** `S6MT-Id-f-2`, evaporation.

- **Mission:** Recover salt from a saltwater sample at a sheltered salt-making station.
- **Loop:** Place a sample in an evaporating dish, advance simulated time, capture observations, and mark when the remaining solid becomes recoverable. Arrange the observations into a short process record.
- **Example:** Liquid decreases as water evaporates; salt remains. The solid is recovered from the dish, not caught above it as vapor.
- **Learning feedback:** Link each observation to the water and salt separately. A replay makes the change visible without requiring a long real-time wait.
- **Success evidence:** Identify the technique, the component that leaves as vapor, and the component recovered. Temperature calculations are unnecessary for this competency.
- **Assets and scope:** Existing salt/saltwater sprites plus dish, decreasing liquid states, vapor, and salt residue. Low-to-medium effort with discrete animation stages.
- **Distinctness:** A time-based observation record, not mixing ingredients or answering paired-sample questions.

### S10. Steady Pour

**Alignment:** `S6MT-Id-f-2`, decantation.

- **Mission:** Remove much of the liquid above settled sediment without carrying the sediment into the receiving jar.
- **Loop:** Allow the sample to settle, control the container's tilt, pour gently, and stop before sediment reaches the lip. Retry a disrupted sample after allowing it to settle again.
- **Example:** Water is poured from above settled sand. Pouring a freshly stirred sample transfers more sand with the water.
- **Learning feedback:** Highlight the sediment boundary and show why settling and stopping matter. Keep some liquid with the sediment rather than depicting perfect separation.
- **Success evidence:** Recover a clearer upper liquid while leaving most sediment behind, and identify decantation.
- **Assets and scope:** Two jars, settled/stirred sand-water states, stream, and tilt states. Medium effort using scripted transfer rules.
- **Distinctness:** Continuous process control. Provide step buttons as an alternative to precision dragging so motor skill does not dominate the result.

### S11. Community Shift

**Alignment:** Primarily `S6MT-Ig-j-3`, with separation-method transfer.

- **Mission:** Run a small service station that helps local makers recover usable materials.
- **Loop:** Read service requests, reserve suitable equipment in a schedule, and arrange jobs around waiting or settling time. Run the schedule and inspect what each customer receives.
- **Example:** A repairer needs iron nails recovered from sand; a salt maker needs salt recovered from brine; a builder needs pebbles removed from sand. Evaporation occupies its station while a shorter magnetic-recovery job can use another station.
- **Learning feedback:** Customers show the recovered material in use. The completion record connects method, recovered product, and benefit, such as reducing replacement purchases.
- **Success evidence:** Fulfill requests with suitable techniques and explain one customer's benefit. A feasible plan earns credit even if it is not the fastest possible schedule.
- **Assets and scope:** Reuse the separation tools and civilian sprite; add request icons and a scheduling board. Medium effort with a small fixed set of jobs.
- **Distinctness:** Scheduling several processes and their outputs. It does not repeat S2's item-by-item bin classification.

### S12. Recovery Circuit

**Alignment:** `S6MT-Ig-j-3`, supported by `S6MT-Id-f-2`.

- **Mission:** Recover several useful components from one mixed sample.
- **Loop:** Connect process stations and output paths, run the sample through the network, and inspect each output. Reconnect paths if a desired material was lost or sent into the wrong stage.
- **Example:** For iron pieces, sand, and water, use a magnet to recover iron, then filter to retain sand while collecting the liquid. Other scientifically workable orders should also be accepted.
- **Learning feedback:** Trace each component through the circuit. A recovered-material ledger shows what is available for reuse instead of simply awarding points for a prescribed sequence.
- **Success evidence:** Account for the components, recover the requested materials, and explain a practical reuse benefit.
- **Assets and scope:** Reuse tool icons; add ports, connectors, and animated component paths. Medium-to-high effort because outputs must be tracked across stages.
- **Distinctness:** Process-network construction. The system starts with a supplied mixture; the learner is not inventing a mixture or defending evidence cards.

### S13. Village Impact Board

**Alignment:** `S6MT-Ig-j-3`.

- **Mission:** Decide which separation service would most help a particular community location.
- **Loop:** Inspect a small map's needs, place a limited number of service upgrades, preview their effects, then revise the plan. The map visibly changes as usable materials are recovered and discarded material decreases.
- **Example:** A building yard repeatedly discards usable sand because it contains stones. Installing a suitable sieve makes some of that sand available for construction. A magnet does not solve that particular problem.
- **Learning feedback:** Show before/after quantities and the affected activity. Ask the learner to describe the actual benefit, not merely name the equipment.
- **Success evidence:** Choose an intervention that addresses the observed mixture and explain how its output helps people. Keep the comparison in simple quantities; formal economic analysis is not required.
- **Assets and scope:** Three small community locations, tool markers, output counters, and before/after scene states. Medium effort using scripted consequences.
- **Distinctness:** Planning an intervention and forecasting consequences. S11 schedules jobs; this game chooses where a service is useful and examines its wider effect.

### S14. Broken Separator Lab

**Alignment:** `S6MT-Ig-j-3`, supported by separation-method reasoning.

- **Mission:** Restore a process that is failing to recover a useful community product.
- **Loop:** Inspect a failed run, choose one variable to change, run a controlled test, and compare the resulting output with the original. Keep a short test log until the process serves its intended need.
- **Example:** Sand and pebbles both pass through a sieve. Keep the input sample unchanged and test a smaller opening. A different case starts with paper filtration incorrectly being used to recover dissolved salt.
- **Learning feedback:** Highlight which change affected the result and connect the repaired process to the recovered product's use. Limit variables so the learner can see a cause rather than guess through many switches.
- **Success evidence:** Diagnose the problem, change an appropriate variable or technique, and state the benefit restored by the repair.
- **Assets and scope:** Reuse previous apparatus and output states; add fault indicators and a simple experiment log. Medium effort with authored failures.
- **Distinctness:** Hypothesis testing and diagnosis. S6-S10 teach working methods; this game requires investigating why a method failed in a new situation.

### S15. Lumi Field Report

**Alignment:** `S6MT-Ig-j-3`; a synthesis activity for Q1.

- **Mission:** Send the Grand Library an illustrated account of how separation helped a community.
- **Loop:** Visit a completed service scene, capture relevant before/process/after images, arrange a three-panel report, and write a brief caption explaining the benefit. Preview and revise the report.
- **Example:** Show sand mixed with stones, the sieving process, and usable sand at a building site. The caption explains that separating the stones lets the community reuse the sand.
- **Learning feedback:** A checklist checks whether the report identifies the initial mixture, appropriate process, recovered material, and a benefit. An incorrect process panel can receive a specific prompt; free-written explanations need a small teacher rubric.
- **Success evidence:** A coherent visual account with a scientifically accurate benefit. Completing three panels alone is not evidence of mastery.
- **Assets and scope:** Reuse scenes and tool states; add a report frame and screenshot-style thumbnails. Low-to-medium technical effort, plus review of written responses.
- **Distinctness:** Visual reporting of a real process and outcome. It does not ask for a uniform/non-uniform defense or a newly invented recipe.

### Fourth topic: Mixtures and Separation in Action — approved, planned

The five activities below apply Q1 knowledge to unfamiliar samples and recovery goals. Use three authored challenges per game, untimed play, the established navigation, and retries. Scientific reasoning and successful recovery matter more than pointer speed. This is an optional extension of `S6MT-Ia-c-1`, `S6MT-Id-f-2`, and `S6MT-Ig-j-3`; it introduces no invented Week 11 competency code.

### S16. Mystery Sample Trail

**Status:** Implemented 13 October 2026 in `q1-m4-l1`, with three authored cases, evidence-gated conclusions, and saved answer/revision history.

**Alignment:** Primarily `S6MT-Ia-c-1`, with separation observations supporting identification.

- **Mission:** Investigate an unfamiliar workshop sample before choosing how it could be used or separated.
- **Loop:** Examine the whole sample and an enlarged observation view, take a portion, stir or allow it to rest, and try an appropriate diagnostic tool. Add actual observations to a notebook, then describe the mixture using that evidence. Authored cases supply enough context to identify components; appearance alone never identifies an arbitrary unknown substance.
- **Three challenges:** Salt dissolved in water; sand suspended in water that settles; iron pieces mixed with sand. Observe even appearance, settling, and magnetic response respectively. Do not taste samples.
- **Learning feedback:** Distinguish an observation from a guess. Saltwater can look uniform while containing two materials; stirred sand and water can settle into visible parts.
- **Success evidence:** Record the relevant observations, identify the case's supported components, and describe uniform/non-uniform appearance accurately. Save first answers and revisions separately.
- **Assets and scope:** Reuse sample jars, saltwater, sand/water, iron, and magnet sprites; add an inspection lens, sample tray, and notebook markers. Medium effort with discrete observation states.
- **Distinctness:** A branching investigation built from observed behavior, rather than another memory grid, two-bin sorter, or paired-sample quiz.

### S17. Recovery Kit Quest

**Status:** Implemented 13 October 2026 in `q1-m4-l2`, with three authored recovery goals, two removable/reorderable kit slots, real output trials, and minimal-kit checks.

**Alignment:** `S6MT-Id-f-2`, supported by `S6MT-Ig-j-3`.

- **Mission:** Pack suitable equipment for a stated material-recovery goal before leaving the workshop.
- **Loop:** Inspect the input and requested products, place tool modules into a limited kit, then preview a small trial. Revise the kit when an output misses a goal. Each module includes its necessary apparatus, such as a filter funnel with paper and a receiving jar.
- **Three challenges:** Recover iron from iron/sand; recover fine sand from sand/pebbles; recover sand and dry salt from sand mixed with saltwater, using filtration followed by evaporation of the filtrate.
- **Learning feedback:** The same mixture may require a different tool when the desired product changes. Show why each packed tool is necessary and which tools do not help the specific task.
- **Success evidence:** Pack the smallest scientifically suitable kit for the authored goal, identify the recovered products, and connect them to the request. Accept equivalent suitable kits where applicable.
- **Assets and scope:** Reuse all five separation tools; add a two-slot kit frame, removable modules, and product-goal seals. Low-to-medium effort using the existing component/output rules.
- **Distinctness:** Selecting a justified equipment set before a mission, rather than scheduling customer jobs or operating one prescribed tool.

### S18. Separation Relay

**Implemented 13 October 2026.** [UI, output accounting, controls, and verification](SEPARATION_RELAY_UI.md).

**Alignment:** `S6MT-Id-f-2`, with material accounting supporting `S6MT-Ig-j-3`.

- **Mission:** Carry a mixed sample through separation checkpoints while preserving every requested component.
- **Loop:** Choose a suitable apparatus at the current bench, operate it, inspect both outputs, and carry the appropriate remaining mixture into the next checkpoint. Previously recovered materials stay in a collection rack. The learner executes processes rather than constructing a network in advance.
- **Three challenges:** Recover iron and sand from a dry mixture; recover stones and sand from a water-containing sample; recover iron, sand, and salt from iron/sand/saltwater using suitable successive methods.
- **Learning feedback:** Show what stays, what passes, and what needs another process. Accept different scientifically workable orders rather than forcing one answer sequence.
- **Success evidence:** Recover all requested solids, track remaining liquid and vapor where applicable, and avoid sending a useful component into an unprocessed discard stream.
- **Assets and scope:** Reuse process apparatus and states; add three checkpoint benches, carry containers, and a persistent recovery rack. Medium-to-high effort because outputs must persist between operations.
- **Distinctness:** Hands-on execution with carried state, rather than S12's process-network construction. Each step includes a meaningful tool action and output inspection.

### S19. Fair Test Arena

**Implemented 13 October 2026.** [UI, equal portions, recorded outputs, evidence choices, and verification](FAIR_TEST_ARENA_UI.md). The implementation saves selected evidence and answer history rather than open-ended written reasoning.

**Alignment:** `S6MT-Id-f-2`; method comparison reinforces Q1 application.

- **Mission:** Compare two approaches fairly and choose the one that best meets a stated recovery goal.
- **Loop:** Split an authored sample into equal portions, keep the requested output and starting conditions the same, run the two trials, and inspect a shared results table. Choose a method and link the choice to recorded outcomes. Avoid a predetermined winner when both meet the goal.
- **Three challenges:** Compare decantation and filtration for recovering liquid with less insoluble sand; compare two sieve openings for separating sand/pebbles; compare filtration and evaporation when the desired product is dissolved salt.
- **Learning feedback:** Label what differs between trials. Distinguish a fair comparison of two methods from changing several unrelated starting conditions. Show sediment carryover, retained particles, or remaining salt directly.
- **Success evidence:** Set up comparable inputs and support the chosen method with the actual outputs. Game quantities are illustrative; they do not represent measured engineering yields. Written reasoning is saved for teacher review.
- **Assets and scope:** Reuse two apparatus bays and outputs; add equal-portion controls and a compact trial table. Medium effort with authored, interpretable results.
- **Distinctness:** Comparing two tested approaches to a goal. S14 repairs a failed baseline by changing one variable; this game evaluates alternatives using comparable trials instead of a paired-card quiz.

### S20. Vulcan Workshop Revival

**Implemented 13 October 2026** in `q1-m4-l5`. Three linked repairs carry visible workshop progress, use actual recovered outputs, and save/export explanations for teacher review. [UI, artwork, recovery rules, and verification](VULCAN_WORKSHOP_REVIVAL_UI.md).

**Alignment:** Integrated application of `S6MT-Ia-c-1`, `S6MT-Id-f-2`, and `S6MT-Ig-j-3`.

- **Mission:** Restore one local workshop by investigating its supplies, recovering useful materials, and applying those materials to three repairs.
- **Loop:** Follow an end-to-end mission: observe and describe the sample, select and perform suitable separation, inspect recovered outputs, then use the actual recovered material in its workshop repair. Carry results into the next challenge so the workshop visibly improves. Record a short explanation of the benefit at the end.
- **Three challenges:** Recover iron fasteners from iron/sand for a workbench repair; recover usable sand from stones/sand/water for the workshop courtyard; recover sand and salt from sand/saltwater for their separate workshop stores. Show only appropriate practical uses; recovered liquid is not drinking water.
- **Learning feedback:** Tie each visible repair to its initial mixture, method, and recovered product. Recovered materials must exist in the player's results before they can be used.
- **Success evidence:** Complete all three investigation-to-recovery chains and explain how separation enabled one repair. Automated checks validate authored process/output states; freely written explanations require teacher review.
- **Assets and scope:** Reuse apparatus and materials; add a workshop panorama with damaged, partially repaired, and repaired states. High effort relative to a single-tool game; scope the mission to one workshop and three authored challenges.
- **Distinctness:** A continuous capstone with investigation, process execution, and material use. It is not another service-token map, schedule, or report-only activity. Restoring this workshop does not claim to restore all of Vulcan or unlock another realm.

### Suggested Science pacing

| Guide period | How to use the games |
| --- | --- |
| Weeks 1-3 | S1-S5 alongside instruction on appearance, uses, and preparing useful mixtures |
| Week 4 | S6-S7: magnetic separation and sieving |
| Week 5 | S8-S9: filtration and evaporation |
| Week 6 | S10 plus varied practice identifying all five methods and their outputs |
| Weeks 7-8 | S11-S13: community services, recovery routes, and benefits |
| Weeks 9-10 | S14-S15: repair, explanation, transfer practice, and quarter assessment |
| Optional Week 11 | S16-S20: Mixtures and Separation in Action; five integrated investigation and recovery activities |

Weeks 1-10 follow the guide's week bands. Week 11 is an approved optional game extension, not an official additional curriculum week. A teacher can instead select capstone activities for Weeks 9-10 review if time permits; five games need not mean five school days. Keep separate assessment evidence for describing mixtures, identifying techniques, and explaining benefits; one aggregate arcade score cannot establish all three.

## 5. English: five games for Quarter 1, Week 1

### E1. Echo Stage

**Alignment:** The Week 1 listening code group in Section 2.

- **Loop:** Listen to an original narrated micro-scene, place markers on an audio timeline where a device occurs, replay that phrase, and explain what it contributes. Each scene restores one part of Reading Island's sound stage.
- **Examples:** "Buzz!" supplies onomatopoeia; "silver sails slide" repeats initial sounds. A scene in which someone calls a soaking-wet picnic "perfect picnic weather" supplies enough context to investigate irony. Other scenes cover assonance, personification, and hyperbole.
- **Feedback and evidence:** Replay the relevant speech, show the phrase after the listening attempt, and connect the device to its effect. Assess both the identified phrase and interpretation; recognizing a device name alone is insufficient.
- **Distinctness:** Investigation of heard language through replay and timeline annotation, rather than a card quiz or sorter. Rhythm-game timing should not determine correctness.
- **Assets and scope:** Reuse scientist/Quill art; add a stage, timeline markers, and short reviewed voice clips. Medium effort, with audio authoring as the main dependency.

### E2. Idiom Trail

**Alignment:** `EN6V-Ia-12.3.1`; attitude practice can support the interaction.

- **Loop:** Read a short scene with an idiom, highlight context clues, and guide a character's next action based on the inferred meaning. The scene reacts to that action; the learner can revisit clues and revise.
- **Example:** A nervous group has just met. Quill suggests they "break the ice." A friendly introduction advances the scene; physically smashing ice does not address the problem. Use additional idioms in new contexts so the task goes beyond remembering that one example.
- **Feedback and evidence:** Show which surrounding details support the meaning and ask for a short paraphrase. Assess inference from context, not recollection of a memorized idiom list.
- **Distinctness:** A branching narrative with contextual action consequences, rather than matching idioms to hidden definition cards.
- **Assets and scope:** Reuse civilians and character portraits; add a few dialogue scenes and highlighted clue spans. Medium effort with modest branching.

### E3. Sentence Repair Press

**Alignment:** `EN6G-Ia-2.3.1`.

- **Loop:** Inspect a damaged village notice, edit regular plural nouns, and print the corrected message. Finish by composing one new coherent sentence for the notice board.
- **Examples:** Repair "three box" to "three boxes" and "two berry" to "two berries." Include ordinary `-s` forms too. Use sentences in which changing the noun does not require teaching an unrelated new grammar rule.
- **Feedback and evidence:** Show the singular-to-plural change and its rule in the sentence. Assess the repaired forms and the learner's own sentence. Choosing a plural from a menu alone does not satisfy the composition target.
- **Distinctness:** Editing and sentence production in a document, rather than sample classification or recipe assembly.
- **Assets and scope:** A notice board, printing press animation, cursor, and paper. Low-to-medium effort. Keep irregular forms such as children and mice for later scope.

### E4. Poetry Lanterns

**Alignment:** The Week 1 reading code group and `EN6WC-Ia-2.2.2`.

- **Loop:** First annotate sound patterns in a short original model poem. Then write a poem in four lantern panels, each containing three lines, and revise it after a visual review. The finished twelve-line poem lights the island's poetry walk.
- **Example reading task:** In "The black clock clicks," mark the recurring consonant sounds and explain their effect. Other model excerpts explicitly cover onomatopoeia, alliteration, and assonance. Accept overlapping devices when the explanation is justified.
- **Feedback and evidence:** Automatically check four stanzas and three non-empty lines per stanza. Give supportive prompts about meaning and sound; use a teacher rubric for coherence and the quality of device analysis. A line count cannot automatically establish poem quality.
- **Distinctness:** Text annotation followed by genuine composition and revision. A word-bank-only assembly would offer useful scaffolding but would not fully assess independent writing.
- **Assets and scope:** Lantern frames, writing panels, and a reveal animation. Medium effort; reuse parchment UI. This can span more than one short session within Week 1.

### E5. Lantern Theatre

**Alignment:** `EN6OL-Ia-1.17`, `EN6F-Ia-2.9`, `EN6VC-Ia-5.1.1`, and the Week 1 attitude codes.

- **Loop:** View a short moving scene, change its lighting, and describe how that changes what the viewer notices or feels. Give a brief spoken recount appropriate to a selected occasion. Then read a short supplied passage aloud, notice an error, and reread the affected phrase. Respond politely to one specific piece of feedback.
- **Example:** Compare lighting that emphasizes a worried character with lighting that reveals the surroundings. For a welcome gathering, recount an experience of helping someone feel included; an unrelated frightening anecdote may need revising for that occasion.
- **Feedback and evidence:** Use a compact rubric for occasion fit, clear recounting, self-correction, lighting description, and tactful response. The fluency target is self-correction, not the Week 2 accuracy threshold.
- **Distinctness:** Performance, replay, and revision in a small theatre. It is not a courtroom argument or a text-only quiz.
- **Assets and scope:** Character poses, simple moving scenes, light overlays, and speaker/replay controls. Medium-to-high effort. A teacher or peer can listen live; optional recording can support playback. Do not promise automated speech grading.

**Coverage boundary:** E1-E5 provide practice opportunities for all populated Week 1 strands in the supplied table. Listening needs actual audio; oral language and fluency need actual speaking; writing needs a learner-authored text. Without those modes and appropriate review, the set would only partially cover the week. The Study Strategy/Research cell is blank for Week 1, so this proposal adds no invented Week 1 competency there.

## 6. Mathematics: five games for Quarter 1, Week 1

### M1. Fraction Bridgewright

**Alignment:** `M6NS-Ia-86`; applied challenges support `M6NS-Ia-87.3`.

- **Loop:** Build a bridge span representing an addition. Overlay equal-whole strips, repartition them into common units, join the required lengths, and enter the resulting fraction or mixed number. Later challenges remove a represented length for subtraction.
- **Example:** Join `3/4` and `2/3`: represent them as `9/12` and `8/12`, producing `17/12 = 1 5/12`.
- **Feedback and evidence:** The geometry exposes why denominators cannot simply be added. Assess equivalent representations, operation, and answer; a decorative completed bridge is not enough.
- **Distinctness:** Geometric construction of a quantity, rather than matching fraction cards or putting fractions into bins.
- **Assets and scope:** Ruin platforms, fraction strips, partition marks, and bridge segments. Medium effort. Generate segments programmatically for consistent equal-sized wholes.

### M2. Regrouping Vault

**Alignment:** `M6NS-Ia-86`.

- **Loop:** Represent a mixed number using whole seals and fractional pieces. Exchange a whole for equivalent fractional pieces when needed, then perform a requested subtraction. For addition, consolidate a complete set of fractional pieces into a whole.
- **Example:** For `2 1/4 - 3/4`, exchange one whole to obtain `1 5/4`, then subtract `3/4`, leaving `1 2/4 = 1 1/2`. Also practice additions such as `1 3/4 + 2/4 = 2 1/4`.
- **Feedback and evidence:** A conservation display shows that exchanging changes the representation while preserving the value. Assess the exchange and operation, not a guessed final answer.
- **Distinctness:** Value-preserving exchange and regrouping, with no ingredient mixing or classification.
- **Assets and scope:** Whole seals, fractional pieces, vault trays, and exchange animation. Medium effort; reuse the fraction renderer from M1 while keeping a different interaction loop.

### M3. Rune Elevator

**Alignment:** `M6NS-Ia-86`.

- **Loop:** Move a lift along a number line by a specified fraction distance. Addition moves forward and subtraction moves back. Select an appropriate subdivision, make each move, and label the final position.
- **Example:** Start at `3/4`, add `1/2` to reach `1 1/4`, then subtract `1` to reach `1/4`.
- **Feedback and evidence:** Show distance traveled and starting/ending positions. Include unlike denominators and mixed numbers; do not reduce the game to counting equally spaced whole-number stops.
- **Distinctness:** Positional reasoning through movement on a number line. M1 uses combined lengths; M2 uses exchange; M3 uses displacement from a starting value.
- **Assets and scope:** Lift, tower scale, subdivision marks, and destination markers. Low-to-medium effort. Keep Week 1 examples within nonnegative values.

### M4. Expedition Ledger

**Alignment:** `M6NS-Ia-87.3`, supported by `M6NS-Ia-86`.

- **Loop:** Inspect an expedition scene and its quantities, identify the unknown, construct a diagram or equation, and allocate resources that satisfy the request. Check the plan against what remains. Include both direct questions and challenges with an extra constraint or more than one valid plan.
- **Example:** A team has `2 1/2` liters of water. Two stops use `3/4` liter and `2/3` liter. The remaining quantity is `1 1/12` liters. A later challenge asks whether that remainder can supply two additional stated needs and requires a justified plan.
- **Feedback and evidence:** Track the original amount, changes, and remaining amount. Accept correct diagrams or equations and explain why an operation fits the story.
- **Distinctness:** Modeling and planning from a contextual problem, rather than performing a preset arithmetic move or answering paired cards.
- **Assets and scope:** Map, supply ledger, quantity markers, and reusable bar models. Medium effort with authored routine and non-routine challenges.

### M5. Commission a Quest

**Alignment:** `M6NS-Ia-88.3`.

- **Loop:** Create a solvable fraction quest for an NPC: choose a setting, write known quantities and a question, enter the operation and answer, then test and revise the quest. A classmate or teacher checks whether the story agrees with the arithmetic.
- **Example:** "A repairer has `5/6` meter of ribbon and uses `1/3` meter. How much remains?" The answer is `1/2` meter.
- **Feedback and evidence:** Verify the arithmetic automatically using exact fractions. Check that units agree, the question has enough information, and the expected result is reasonable. Review the freely written story for mathematical meaning.
- **Distinctness:** Authoring and validating a problem, not solving another supplied quiz. This creates a mathematical task, rather than repeating S5's ingredient-to-mixture loop.
- **Assets and scope:** Quest parchment, NPC requester, fraction inputs, and preview panel. Medium effort. Templates can scaffold beginners, but require some learner-authored content to assess problem creation.

**Mathematics implementation rule:** Use exact numerator/denominator arithmetic, recognize equivalent answers, and make all visual pieces refer to the same-sized whole. Do not reject `2/4` as numerically wrong when the result is `1/2`; if simplest form is required, give a separate simplification prompt. Difficulty should progress from familiar denominators to unlike denominators and regrouping, rather than expanding into multiplication to fill five slots.

## 7. Keeping the collection varied and practical

### What changes from game to game

| Design family | Activities | How to preserve variety |
| --- | --- | --- |
| Operating tools | S6-S10 | Give each technique its own meaningful action: attraction, mesh adjustment, assembly, time observation, or settling/pouring |
| Applying separation | S11-S15 | Distinguish scheduling, network construction, intervention planning, experiments, and visual reporting |
| Integrated investigation | S16-S20 | Distinguish evidence gathering, kit planning, hands-on relay execution, fair method comparison, and an end-to-end workshop mission |
| Language | E1-E5 | Change the language mode and product: audio annotation, contextual action, sentence editing, poem composition, oral/visual performance |
| Fractions | M1-M5 | Change the representation or role: lengths, exchanges, positions, story modeling, problem authoring |

The curriculum necessarily revisits concepts. The proposal avoids repeating the existing five main game loops; it does not avoid useful repetition of a skill across different representations or contexts. Community games can reuse separation outputs, and Mathematics games can reuse a fraction renderer, while presenting different decisions and goals.

### Reuse existing assets before generating more

The supplied `public/assets/general assets` folder already has saltwater, sand-and-water, sand, salt, oil-and-water, containers, food examples, a civilian, and a judge. Reuse appropriate sprites and the existing scientist/Quill character assets.

| Subject | New art most worth creating | Prefer programmatic rendering for |
| --- | --- | --- |
| Science | Magnet, iron pieces, sieves, funnel/filter paper, evaporating dish, pour states, recovered-material states | Material-flow lines, schedule cells, process ports, quantities |
| English | Sound-stage props, lantern frames, theatre poses, notice-board props | Audio timeline, editable text, highlights, light overlays |
| Mathematics | Ruin lift, bridge endpoints, vault decoration, quest parchment | Equal fraction pieces, number lines, partition marks, equations |

Use [full-screen reference prompts](art-direction/SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md) to explore the planned capstone layouts. For implementation, keep sprites and decorative frames separate from controls, text, and data; the generated reference screen guides the UI rather than becoming a flattened interactive interface.

### Shared UX

- Keep the established header, top-right How to Play and Settings buttons, and bottom-left Back button consistent across subjects.
- Put visual instructions in How to Play: an action diagram and one worked example. Keep the gameplay footer to a short relevant summary.
- Provide click/keyboard alternatives to dragging, and step controls for pouring or positioning.
- Use concise feedback that shows the changed material, phrase, or quantity. Avoid replacing meaningful feedback with only stars and score.
- Keep untimed practice for writing, planning, speech, and observation. For any timed challenge, show the limit clearly and offer retry; do not make speed the main evidence of conceptual learning.
- A settings overlay should not silently add unlimited extra time to a timed activity. Decide the timer policy explicitly and apply it consistently.

### Content and assessment checks

**Science:** Start new separation lessons with clear examples: insoluble sand in water, salt dissolved in water, differently sized sand/pebbles, and iron mixed with nonmagnetic materials. Ordinary paper filtration does not recover dissolved salt. Evaporation recovers a remaining solid, not a drinkable water supply. Decantation is not perfect separation. Avoid saying every metal is magnetic or that separated/clear-looking water is automatically safe to drink. Keep apparent uniformity distinct from claims about microscopic composition when using samples such as milk.

**English:** Use original, reviewed scenes with enough context for idioms and irony. Supply audio for listening. Accept justified interpretations where sound devices overlap. Structure counts can be automated; writing quality, oral recounting, tactfulness, and nuanced explanations need a human rubric in the initial version.

**Mathematics:** Include unlike denominators, mixed numbers, addition/subtraction regrouping, and unfamiliar word problems. Reward a justified valid strategy. A problem-creation activity needs more than an automatically correct equation: the story and question must make sense.

For all subjects, keep **completion, game score, and competency evidence** separate. Useful evidence includes the learner's first attempt, revisions, method or representation chosen, and explanation/product. A successful retry is valuable learning; it should not overwrite the fact that support was needed on the first attempt.

## 8. Recommended implementation order

1. **Prototype S6 and S8 first.** They introduce clearly different mechanics and establish reusable component/output states for the other separation games.
2. **Build M1 and E2 as subject pilots.** This tests fraction representation and language-driven interaction before committing to five activities per realm.
3. **Finish S7, S9, and S10.** Together with S6/S8, they cover all five named separation methods.
4. **Build the English editing/composition games and the remaining Math games.** Allow time for content review and the small writing/problem-creation rubrics.
5. **Add S11-S15 after the separation states are dependable.** They reuse those outputs to demonstrate community benefits instead of adding five unrelated Science topics.
6. **Finish E1/E5 with actual audio and oral-performance support.** Plan narration and review early; do not present text-only substitutes as complete listening or speaking coverage.
7. **The approved S16-S20 capstone is implemented after S1-S15.** Mystery Sample Trail, Recovery Kit Quest, Separation Relay, Fair Test Arena, and Vulcan Workshop Revival fill all five added Q1 lesson nodes. See [the dedicated reference-image prompts](art-direction/SCIENCE_CAPSTONE_UI_REFERENCE_PROMPTS.md).

For manageable first versions, use a few authored challenges per game, discrete process states instead of realistic fluid physics, small fixed community maps, and local written outputs. These are scope suggestions, not measured time estimates. The largest dependencies are process tracking in S12, audio content in E1, and authentic oral-performance review in E5.

## 9. Sources and traceability

Page numbers below are both the printed page numbers and the PDF viewer page numbers in the supplied files.

| Source reviewed | Relevant pages | Use in this proposal |
| --- | --- | --- |
| [Science Curriculum Guide, August 2016](../referencefiles/K-12%20Curriculum%20Guides/Science-CG_with-tagged-sci-equipment_revised.pdf) | 80-83; code legend 202 | Grade 6 Q1 targets, performance standards, and week bands |
| [Mathematics Curriculum Guide, August 2016](../referencefiles/K-12%20Curriculum%20Guides/Math-CG_with-tagged-math-equipment.pdf) | 175-177; code legend 256 | Grade 6 Q1 Week 1 operations, solving, and problem creation |
| [English Curriculum Guide, May 2016](../referencefiles/K-12%20Curriculum%20Guides/English-CG.pdf) | 127; tagged-materials confirmation 144; code legend 246 | Grade 6 Q1 Week 1 strands and codes |
| [Original Mini-Games document](../referencefiles/Mini-Games.pdf) | 1-5 | Existing three-card memory loop |
| [Current game content](../src/config/content.js) | Q1 topic structure and five Mixtures game definitions | Existing scope and mechanics to preserve rather than duplicate |

Official online counterparts were also located for the supplied [Science Guide](https://www.deped.gov.ph/wp-content/uploads/2019/01/Science-CG_with-tagged-sci-equipment_revised.pdf) and [English Guide](https://www.deped.gov.ph/wp-content/uploads/2019/01/English-CG.pdf). The curriculum mapping above was checked against the local PDFs, including visual inspection of their competency tables. The Mathematics mapping uses the supplied local guide; the online PDF could not be retrieved during this review.

**Approved Science extension:** retain S1-S15 and add S16-S20 under **Mixtures and Separation in Action**, bringing Science Q1 to twenty playable games. English and Mathematics retain five proposed games each, bringing the collection plan to thirty. The optional Week 11 reviews existing Q1 targets rather than adding an official competency. Written explanations and classroom suitability require teacher review.
