import { copyFile, readdir } from 'node:fs/promises';
import path from 'node:path';

// Next.js 16 can leave Windows separators in static RSC segment filenames.
// Supply the flat filenames expected by the browser, also used by Linux builds.
async function flattenSegments(directory, prefix) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const source = path.join(directory, entry.name);
    const target = `${prefix}.${entry.name}`;
    if (entry.isDirectory()) {
      await flattenSegments(source, target);
    } else if (entry.name.endsWith('.txt')) {
      await copyFile(source, target);
    }
  }
}

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name === 'assets' || entry.name === '_next') continue;
    const child = path.join(directory, entry.name);
    if (entry.name.startsWith('__next.')) {
      await flattenSegments(child, child);
    } else {
      await visit(child);
    }
  }
}

if (process.platform === 'win32') await visit(path.resolve('out'));
