# Math and English quarter maps

The maps use the Grade 6 sections of the supplied 2016 Curriculum Guides.
Each quarter groups the guide's competencies into four game weeks, as requested.
These are thematic groups for the game, rather than the guide's official ten-week pacing.
English strands run in parallel; each title describes a group's main focus, with
language, fluency, viewing, and attitude skills available to integrate later.

Each week contains five empty daily game slots. Day 1-5 are activity positions;
no game content or daily competency assignments have been added.

## Mathematics

Source: [Mathematics CG](../referencefiles/K-12%20Curriculum%20Guides/Math-CG_with-tagged-math-equipment.pdf), Grade 6, PDF pages 175-205.

| Quarter | Week 1 | Week 2 | Week 3 | Week 4 |
| --- | --- | --- | --- | --- |
| Q1 | Fraction Operations | Decimal Addition and Subtraction | Decimal Multiplication | Decimal Division |
| Q2 | Ratio and Proportion | Percent and Its Applications | Exponents and GEMDAS | Integers |
| Q3 | Solid Figures | Patterns and Equations | Speed and Composite Area | Surface Area |
| Q4 | Volume of Solids | Electric and Water Meters | Pie Graphs | Probability |

Q1 follows `M6NS-Ia` through `M6NS-Ij` (pages 175-190): fractions,
decimal addition/subtraction, multiplication, and division, including word problems.
Q2 follows `M6NS-IIa` through `M6NS-IIj` (pages 190-196): ratio/proportion,
percent, exponential notation/order of operations, and integers.
Q3 follows `M6GE-IIIa-c`, `M6AL-IIId-f`, and `M6ME-IIIg-j` (pages 196-200):
solids and their nets, patterns/equations, speed/composite area, and surface area.
Q4 follows `M6ME-IVa-d` and `M6SP-IVe-j` (pages 200-205): volume,
meter readings/consumption, pie graphs, and experimental/theoretical probability.

## English

Source: [English CG](../referencefiles/K-12%20Curriculum%20Guides/English-CG.pdf), Grade 6, PDF pages 125-143.

| Quarter | Week 1 | Week 2 | Week 3 | Week 4 |
| --- | --- | --- | --- | --- |
| Q1 | Sound Devices and Poetry | Figurative Language | Story Elements | Narratives and Grammar |
| Q2 | Informational Texts | Research and Text Details | Adverbs and Clear Writing | Conjunctions and Composition |
| Q3 | Text Types and Opinions | Bias and Propaganda | Discussion and Editorials | Reports and Viewpoints |
| Q4 | Cause and Effect | Problem and Solution | Research and Summaries | Persuasive Writing |

Q1 (pages 127-131) draws on sound devices/poetry (`EN6LC-Ia`, `EN6RC-Ia-b`,
`EN6WC-Ia-b`), figurative language (`EN6RC-Id-f`), narrative elements
(`EN6RC-Ig-i`), and sentence structures including subject-verb agreement (`EN6G-Ih-j`).
Q2 (pages 131-135) draws on informational texts (`EN6LC-IIa-c`), significant
details/reference sources (`EN6RC-IIc-d`, `EN6SS-IIa-e`), adverbs (`EN6G-IIc-f`),
revision (`EN6WC-IIe-g`), conjunctions (`EN6G-IIh-j`), and composition (`EN6WC-IId`, `EN6WC-IIh`).
Q3 (pages 136-139) draws on text types (`EN6RC-IIIa-c`), supported opinions
(`EN6OL-IIIa-c`), bias/propaganda (`EN6LC-IIIb-c`), discussions/editorials
(`EN6OL-IIId-f`, `EN6WC-IIIb/e`), and reports on viewpoints (`EN6OL-IIIg-j`).
Q4 (pages 140-143) draws on cause/effect (`EN6RC-IVa-b`), problem/solution
(`EN6RC-IVc-d`), research/summaries (`EN6SS-IVd-j`, `EN6LC-IVd-f`, `EN6OL-IVa-j`),
and persuasive essays (`EN6WC-IVb/e/g/i`).

The title lists live in `src/config/subjectWeekTopics.js`; the quarter builder in
`src/config/content.js` generates unique subject/quarter/week/day IDs so empty
Math and English slots cannot launch Science games or inherit Science progress.
