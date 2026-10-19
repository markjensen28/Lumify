# Minigame sprites

Minigames 1–5 use the transparent 64 × 64 PNGs from
`public/assets/general assets/`. `src/config/generalAssets.js` contains the
loader list and the mixture/ingredient aliases. `src/ui/assetIcons.js` fits
images without stretching; the game's pixel-art renderer uses nearest filtering.

| Minigame | Supplied art |
| --- | --- |
| Mix Match | Picture cards: saltwater, juice, sand and water, fruit salad |
| Supply Cart | Items, bin examples, and use-panel item pictures |
| Mixture Detective | Sample pictures: drinks, salad, milk, cereal, vinegar, layered liquids |
| Science Court | Judge, civilian, exhibits, classification examples, evidence examples |
| Invent-a-Mix | All 16 ingredients, four bowl stages, energy drink, paint and layered-liquid preview |

Lesson preview modals use the same sprites. Images inherit their card's movement,
scale, visibility, and destruction; existing card/drop-zone inputs still handle
selection and dragging.

Invent-a-Mix shows the empty/little/half/full bowl for 0/1/2/3 selected ingredients.
After mixing it shows the drink, a bowl with the selected snack ingredients, or
paint beside oil-and-water so the separated layers remain visible.

Halo-halo and vegetable salad use new transparent 64 × 64 sprites generated
with the user's LUMIFY template and the supplied food sprites as style references.
Their distinct ingredients remain visible for the non-uniform mixture lessons.
The generated originals and full prompts are in `output/imagegen/`.
Assets are loaded once in BootScene; no supplied originals are edited.
