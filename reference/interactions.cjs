const { chromium }=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const p=await b.newPage({viewport:{width:1920,height:1020}});await p.goto('https://diverse-heart-427907.framer.app/',{waitUntil:'domcontentloaded'});await p.waitForTimeout(3500);
await p.locator('[data-framer-name="Mobile Menu Icon"]').first().click();await p.waitForTimeout(900);await p.screenshot({path:'reference/menu.png'});fs.writeFileSync('reference/menu.html',await p.locator('header').first().evaluate(e=>e.outerHTML));
await p.locator('[data-framer-name="Mobile Menu Icon"]').first().click();
const cards=p.locator('[data-framer-name="Portfolio"] a');console.log('LINKS',await p.locator('a').evaluateAll(es=>es.map(e=>({text:e.textContent,href:e.getAttribute('href')}))));
const s=fs.readFileSync('reference/page.mjs','utf8');console.log('FAQ', [...fs.readFileSync('reference/main.mjs','utf8').matchAll(/auR43ZFRI:`([^`]+)`,DbeaprEYh:`([^`]+)`/g)].map(x=>({question:x[2],answer:x[1]})));
await b.close();})();
