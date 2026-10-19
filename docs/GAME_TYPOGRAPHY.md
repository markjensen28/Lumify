# Game typography

## Font roles

- **ArcadeClassic**: game headers, page titles, section titles, help headings and modal titles.
- **Lower Pixel**: dialogue, instructions, choices, buttons, counters, feedback and report writing.
- Both use regular weight. ArcadeClassic headings are sized 25% larger to account for their shorter glyphs, with one pixel of letter spacing.
- The shared body style removes synthetic bold. Shared paragraph spacing is two pixels. The report editor uses 1.35 line height.
- Cream menu buttons use dark text for contrast. Court clue and evidence text fit their existing containers.
- Navigation coordinates and activity behavior are preserved.

## Files

`src/ui/ui.js` owns `BODY_FONT`, `HEADING_FONT`, `textStyle` and `titleStyle`. `supplyHeading` and `qHeading` use the same heading style as the shared minigame header.

`src/styles.css` defines local font faces. `src/main.js` waits for both faces before constructing Phaser, so canvas text is measured using the actual fonts.

The Lower Pixel download contains `LowresPixel-Regular.otf`; the CSS family alias is **Lower Pixel**, matching the requested font name.

## Source and terms

- ArcadeClassic: https://www.1001fonts.com/arcadeclassic-font.html — Jakob Fischer / Pizzadude. Original terms are retained alongside the TTF.
- Lower Pixel: https://www.1001fonts.com/lower-pixel-font.html — IbraCreative. Original Readme is retained alongside the OTF.
- These downloaded versions are for personal/noncommercial use. The user confirmed this is a noncommercial capstone.

## Verification

Font loading, game startup, all fifteen Science game screens and their Help overlays are checked in the browser. Preview images are saved under `screenshots/fonts/`. Production build is checked separately.
