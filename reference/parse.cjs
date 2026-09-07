const fs = require('fs');
const s = fs.readFileSync('reference/home.html', 'utf8');
console.log(s.slice(0, 3500));
console.log('SCRIPTS', [...s.matchAll(/<script[^>]*src="([^"]+)/g)].map(x=>x[1]));
console.log('FONTS', [...s.matchAll(/@font-face\s*\{[^}]+\}/g)].map(x=>x[0]).join('\n').slice(0,24000));
console.log('TEXT', s.replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, '\n').split('\n').map(x=>x.trim()).filter(Boolean).join('\n').slice(0,18000));
