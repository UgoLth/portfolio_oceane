const fs=require('fs');
const {execFileSync}=require('child_process');
const html=fs.readFileSync('reference/home.html','utf8');
const urls=[...new Set([...html.matchAll(/https:\/\/framerusercontent.com\/(?:images|assets)\/[^\s"'<>?;)]+/g)].map(x=>x[0]))].filter(x=>/\.(png|jpg|jpeg|webp|avif|svg|woff2)$/.test(x));
const fonts=[...html.matchAll(/@font-face\s*\{[^}]+\}/g)].map(x=>x[0]).filter(x=>x.includes('BDO') || x.includes('U+0000-00FF'));
const usedFonts=new Set(fonts.flatMap(x=>[...x.matchAll(/https:[^"]+/g)].map(x=>x[0])));
const selected=urls.filter(x=>!x.endsWith('woff2')||usedFonts.has(x));
fs.mkdirSync('public/assets/images',{recursive:true});fs.mkdirSync('public/assets/fonts',{recursive:true});
const map={};
for(const url of selected){const name=url.split('/').pop(); const local='/assets/'+(url.endsWith('woff2')?'fonts/':'images/')+name;map[url]=local;}
fs.writeFileSync('reference/asset-map.json',JSON.stringify(map,null,2));
fs.writeFileSync('reference/download-assets.ps1',selected.map(url=>`curl.exe -L '${url}' -o 'public${map[url]}' --silent --show-error`).join('\n'));
fs.writeFileSync('reference/fonts.css',fonts.join('\n').replace(/https:\/\/framerusercontent.com\/assets\/[^" )]+/g,x=>map[x]||x));
console.log(JSON.stringify(map,null,2));
