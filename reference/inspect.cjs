const { chromium } = require('playwright');
const fs = require('fs');
(async()=>{
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const page=await browser.newPage({viewport:{width:1920,height:1020},deviceScaleFactor:1});
 await page.goto('https://diverse-heart-427907.framer.app/',{waitUntil:'domcontentloaded',timeout:60000});
 await page.waitForTimeout(8000);
 await page.waitForTimeout(2500);
 await page.screenshot({path:'reference/desktop-top.png'});
 const inspect=()=>[...document.querySelectorAll('[data-framer-name],h1,h2,h3,p,img,a')].map(e=>{const r=e.getBoundingClientRect(),s=getComputedStyle(e);return {tag:e.tagName,name:e.getAttribute('data-framer-name'),class:e.className,text:e.matches('h1,h2,h3,p,a')?e.textContent:undefined,src:e.getAttribute('src'),href:e.getAttribute('href'),rect:{x:r.x,y:r.y+scrollY,w:r.width,h:r.height},style:Object.fromEntries(['display','position','padding','gap','maxWidth','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','color','backgroundColor','borderRadius','transform','opacity','gridTemplateColumns','flexDirection'].map(k=>[k,s[k]]))}}).filter(x=>x.rect.w&&x.rect.h);
 fs.writeFileSync('reference/desktop.json',JSON.stringify(await page.evaluate(inspect),null,2));
 fs.writeFileSync('reference/dom.html',await page.content());
 const height=await page.evaluate(()=>document.documentElement.scrollHeight);
 console.log('HEIGHT',height);
 for(let y=800;y<height;y+=850){await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(700);await page.screenshot({path:`reference/scroll-${y}.png`});}
 await page.screenshot({path:'reference/desktop-full.png',fullPage:true});
 for(const w of [1440,1280,768,390]){await page.setViewportSize({width:w,height:1020});await page.evaluate(()=>scrollTo(0,0));await page.waitForTimeout(1500);fs.writeFileSync(`reference/layout-${w}.json`,JSON.stringify(await page.evaluate(inspect),null,2));await page.screenshot({path:`reference/top-${w}.png`});}
 await browser.close();
})();
