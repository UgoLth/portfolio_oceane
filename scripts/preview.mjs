import { createReadStream } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const root = path.resolve('out');
const { config } = JSON.parse(await readFile('.next/required-server-files.json', 'utf8'));
const basePath = config.basePath || '';
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript',
  '.json': 'application/json', '.txt': 'text/plain; charset=utf-8',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.mp4': 'video/mp4',
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === basePath && basePath) {
      response.writeHead(308, { Location: `${basePath}/` }).end();
      return;
    }
    if (!pathname.startsWith(`${basePath}/`)) throw new Error('Not found');
    let file = path.resolve(root, `.${pathname.slice(basePath.length)}`);
    if (file !== root && !file.startsWith(`${root}${path.sep}`)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
    const info = await stat(file);
    response.writeHead(200, {
      'Content-Type': types[path.extname(file)] || 'application/octet-stream',
      'Content-Length': info.size,
    });
    if (request.method === 'HEAD') response.end();
    else createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Page introuvable');
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`Portfolio : http://localhost:${port}${basePath}/`);
});
