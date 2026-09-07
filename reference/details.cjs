const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const b=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const p=await b.newPage();await p.route('**/*',r=>r.abort());await p.setContent(fs.readFileSync('reference/dom.html','utf8'),{waitUntil:'domcontentloaded'});
for(const selector of ['.framer-d4kxpu-container','.framer-aawy4t-container','.framer-1heqfqb-container']){console.log(selector,await p.locator(selector).first().evaluate(e=>e.innerHTML.slice(0,18000)));}await b.close();})();
