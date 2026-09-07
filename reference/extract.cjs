const {chromium}=require('playwright');const fs=require('fs');
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const page=await browser.newPage({viewport:{width:1920,height:1020}});
await page.route('**/*',route=>route.abort());
await page.setContent(fs.readFileSync('reference/home.html','utf8'),{waitUntil:'domcontentloaded'});
const result=await page.evaluate(()=>{
 const root=document.querySelector('#main');
 const tree=e=>({tag:e.tagName.toLowerCase(),attrs:Object.fromEntries([...e.attributes].map(x=>[x.name,x.value])),children:[...e.childNodes].filter(n=>n.nodeType===1||n.nodeType===3).map(n=>n.nodeType===3?n.textContent:tree(n))});
 return {tree:tree(root),styles:[...document.querySelectorAll('style')].map(s=>s.textContent),outline:[...root.children].map(e=>({tag:e.tagName,class:e.className,children:[...e.children].map(x=>({tag:x.tagName,name:x.getAttribute('data-framer-name'),class:x.className,id:x.id,children:x.children.length}))}))};
});fs.writeFileSync('reference/tree.json',JSON.stringify(result.tree,null,2));fs.writeFileSync('reference/styles.json',JSON.stringify(result.styles));console.log(JSON.stringify(result.outline,null,2));await browser.close();})();
