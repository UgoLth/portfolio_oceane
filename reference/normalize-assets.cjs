const fs=require('fs');const sharp=require('sharp');
(async()=>{let count=0;for(const item of require('./captured-assets.json')){if(item.local.endsWith('.png')&&item.type!=='image/png'){const data=fs.readFileSync('public'+item.local);await sharp(data).png().toFile('public'+item.local);count++;}}console.log('Normalized',count,'CDN responses to lossless PNG.');})();
