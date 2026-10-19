import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

// Usage: node scripts/prepareCloudVideo.mjs [path-to-ffmpeg]
const ffmpeg = process.argv[2] ?? 'ffmpeg';
const videoDirectory = new URL('../public/assets/video/', import.meta.url);
const path = (file) => fileURLToPath(new URL(file, videoDirectory));
// Remove the source's black backing and soften its compressed edge pixels.
const filter = 'scale=1280:720,format=rgba,colorkey=0x000000:0.06:0.40,unpremultiply=inplace=1';
const input = ['-hide_banner', '-loglevel', 'warning', '-y', '-i', path('1011.mp4'), '-vf', filter];

for (const output of [
  ['-frames:v', '1', '-update', '1', path('cloud-zoom-poster.png')],
  ['-an', '-c:v', 'libvpx-vp9', '-pix_fmt', 'yuva420p', '-crf', '24', '-b:v', '0',
    '-deadline', 'good', '-cpu-used', '4', '-row-mt', '1', '-auto-alt-ref', '0', path('cloud-zoom.webm')],
]) {
  const result = spawnSync(ffmpeg, [...input, ...output], { stdio: 'inherit', windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error('Cloud video conversion failed.');
}
