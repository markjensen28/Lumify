# Grand Library lesson archives

## Direction contract

**Thesis.** A student chooses a bound volume on Krae’s shelf and opens it to revisit a lesson.

**World.** Dusk in the existing pixel-art library. Amber lanterns, dark walnut, blue window light, pressed-gold book lettering, and warm paper continue Lumora’s materials and typography.

**Reading flow.** Pick a subject, choose a quarter and a topic, and expand a lesson note. The seal on a book reflects access to its island. Named topics are readable study notes, including when their playable lessons are still in development.

**First viewport.** The archive follows the fitted game canvas through entry, reading, and resizing. On desktop, three illustrated covers and a stack of locked spines share a walnut ledge. On phones the locked stack sits on a second ledge and the archive scrolls inside the game frame. An open book has contents on the left and notes on the right. On narrow displays a topic selector sits above the notes.

**Form.** A local extension of the existing Knowledge Hub, with a brief opening motion, visible keyboard focus, and two exits through the bookshelf and world map. The motion follows the player’s reduced-motion setting.

## Implementation and maintenance

The archive contains 30 playable lesson notes (20 Science, 5 English, and 5 Mathematics) and 45 topic overviews. Edit overviews by topic title and lesson notes by lesson ID in [`src/config/lessonArchive.js`](../../src/config/lessonArchive.js). ArcadeClassic and Lower Pixel carry the world-map typography into the room. The printed cover titles and lesson text use Georgia. ImageGen created the [gallery backdrop](../../public/assets/grand-library/archive-gallery.png), the [three-panel cover atlas](../../public/assets/grand-library/subject-bindings.webp), and the [locked spines](../../public/assets/grand-library/sealed-spines.webp). The [asset manifest](../GRAND_LIBRARY_ASSETS.json) records their prompts.

Science, English, and Mathematics open by default. Each volume uses the same `isIslandUnlocked` check as the world map, which reads the `islandUnlocks` registry override when present and otherwise uses the island’s default. The shelf updates when access changes, and an open book returns to the shelf if its island locks again.
