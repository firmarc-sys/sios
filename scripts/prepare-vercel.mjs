import { existsSync } from 'node:fs';

const required = ['index.html', 'manifest.json', 'vercel.json', 'sw.js', 'icon.svg'];
const missing = required.filter((file) => !existsSync(file));

if (missing.length) {
  console.error('Missing required Vercel files:', missing.join(', '));
  process.exit(1);
}

console.log('SIOS / STARE triad frontend ready for Vercel.');
