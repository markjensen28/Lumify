import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Usage: node scripts/prepareIntroVideo.mjs [path-to-ffmpeg]
// Preserve the supplied HEVC original and make a browser-compatible copy.
const ffmpeg = process.argv[2] ?? 'ffmpeg';
const directory = new URL('../public/assets/video/', import.meta.url);
const path = (file) => fileURLToPath(new URL(file, directory));
const jobs = [
  ['-i', path('cutscene-1.mp4'), '-vf', 'scale=1280:720', '-c:v', 'libx264',
    '-pix_fmt', 'yuv420p', '-preset', 'fast', '-crf', '20', '-c:a', 'aac', '-b:a', '192k',
    '-movflags', '+faststart', path('cutscene-1-browser.mp4')],
  ['-ss', '24', '-i', path('cutscene-1.mp4'), '-vf', 'scale=1280:720',
    '-frames:v', '1', '-update', '1', path('cutscene-1-library.png')],
];
for (const job of jobs) {
  const result = spawnSync(ffmpeg, ['-hide_banner', '-loglevel', 'warning', '-y', ...job],
    { stdio: 'inherit', windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Intro asset preparation failed.');
}
