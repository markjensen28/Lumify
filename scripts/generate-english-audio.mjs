import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ENGLISH_AUDIO_CLIPS } from '../src/config/englishWeekOne.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'public/assets/english-week1/audio');
fs.mkdirSync(output, { recursive: true });
const manifest = {
  method: 'Offline Windows System.Speech synthesis', voice: 'Microsoft Zira Desktop', locale: 'en-US',
  rate: -2, sampleRate: 22050, channels: 1, format: 'PCM 16-bit WAV',
  note: 'Authored text rendered to bundled recordings. Replay requires no network, account, microphone, or speech-recognition service.',
  clips: ENGLISH_AUDIO_CLIPS.map(clip => ({ ...clip, file: `${clip.key}.wav` })),
};
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`Prepared ${manifest.clips.length} original narration/word clips. Render with scripts/generate-english-audio.ps1.`);
