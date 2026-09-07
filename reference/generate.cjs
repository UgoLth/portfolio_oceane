// One-time migration of the measured public markup to native, editable React JSX.
const fs=require('fs');const path=require('path');
const tree=require('./tree.json');const oldMap=require('./asset-map.json');
const template=tree.children.find(x=>x.tag==='div');
const root=template.children.find(x=>x.attrs?.class?.includes('framer-72rtr7'));
const walk=(n,fn)=>{if(typeof n==='string')return;fn(n);n.children.forEach(x=>walk(x,fn));};
const textContent=n=>typeof n==='string'?n:n.children.map(textContent).join('');
const assets={};const used=new Set();
assets['https://framerusercontent.com/assets/CAsyrD25uh5PsGlkAL0HEIdpq0.mp4']='/assets/images/service-film.mp4';
const roles={'QnW8vaDpqEeWO1L8KKXi73ELC8.jpg':'hero-orchid','vHwYuFX3wPjx3PFeXrRkO4wfztA.png':'fuel-x-iridescent','71YDGBsigsdGanJvkYBelFcVI.png':'fuel-x-white','FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2':'bdo-grotesk-variable'};
walk(tree,n=>{if(n.tag==='img'){const url=n.attrs.src?.split('?')[0];if(url&&!assets[url]){let name=roles[url.split('/').pop()]||(n.attrs.alt||'image').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'image';if(used.has(name))name+='-'+used.size;used.add(name);assets[url]='/assets/images/'+name+path.extname(url);}}});
for(const [url,old] of Object.entries(oldMap)){const local=assets[url]||'/assets/'+(url.endsWith('woff2')?'fonts/':'images/')+(roles[url.split('/').pop()]?roles[url.split('/').pop()]+path.extname(url):path.basename(old));assets[url]=local;if(local!==old&&fs.existsSync('public'+old)){fs.renameSync('public'+old,'public'+local);}}
fs.writeFileSync('reference/asset-map.json',JSON.stringify(assets,null,2));
const renditions=fs.existsSync('reference/renditions.json')?require('./renditions.json'):{};
const localize=s=>s.replace(/https:\/\/framerusercontent.com\/(?:images|assets)\/[^\s"'<>?;)]+(?:\?[^\s"'<>)]*)?/g,url=>renditions[url]||assets[url.split('?')[0]]||url);
let css=require('./styles.json').join('\n');
css=css.replace(/@font-face\s*\{[^}]+\}/g,'');
const fontCss=localize(fs.readFileSync('reference/fonts.css','utf8').replace(/\/assets\/fonts\/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2/g,'/assets/fonts/bdo-grotesk-variable.woff2'));
fs.mkdirSync('app',{recursive:true});fs.mkdirSync('components/sections',{recursive:true});fs.mkdirSync('components/ui',{recursive:true});
fs.writeFileSync('app/reference.css','/* Measured styles from the public reference, without the Framer runtime. */\n'+fontCss+'\n'+localize(css));
const main=fs.readFileSync('reference/main.mjs','utf8');const faq=[...main.matchAll(/auR43ZFRI:`([^`]+)`,DbeaprEYh:`([^`]+)`/g)].map(x=>({question:x[2],answer:x[1]}));fs.writeFileSync('components/ui/faq-data.ts','export const faqItems = '+JSON.stringify(faq,null,2)+';\n');
const camel=s=>s.startsWith('--')?s:s.replace(/^-webkit-/,'Webkit-').replace(/-([a-z])/g,(_,x)=>x.toUpperCase());
const styleObject=s=>Object.fromEntries((s||'').split(/;(?![^()]*\))/).filter(Boolean).map(x=>{const i=x.indexOf(':');return [camel(x.slice(0,i).trim()),localize(x.slice(i+1).trim())]}));
const stringify=o=>JSON.stringify(o);
const voids=new Set(['img','br','hr','input','source','wbr']);
const props={'class':'className','tabindex':'tabIndex','srcset':'srcSet','viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','crossorigin':'crossOrigin','autoplay':'autoPlay','playsinline':'playsInline','fetchpriority':'fetchPriority','frameborder':'frameBorder','referrerpolicy':'referrerPolicy'};
const scrollClasses={'framer-1u6a2tv':'hero','framer-1a3i3ex':'overlap','framer-1bfxxxq':'overlap','framer-wmjvrv':'overlap','framer-15bw3zs':'overlap','framer-5593zm':'parallax','framer-66vj5q':'zoom','framer-facib3':'banner','framer-h999cq-container':'card1','framer-mx4880-container':'card2','framer-k3wp9w-container':'card3','framer-1heqfqb-container':'card4'};
function jsx(n,depth=0){
 if(typeof n==='string')return n?`{${stringify(n)}}`:'';
 if(['style','script','noscript'].includes(n.tag))return '';
 const a={...n.attrs},cls=a.class||'',name=a['data-framer-name'];
 if(cls==='framer-exxa4g-container'||cls==='framer-w6y9pp')return '';
 if(n.tag==='header')return '<Header />';
 if(cls.includes('framer-EbrCn'))return `<TestimonialCarousel className=${stringify(cls)} />`;
 if(cls.includes('framer-Anv2q'))return '<FAQList />';
 if(a['data-code-component-plugin-id']==='84d4c1'){
  if(n.children.some(x=>x.attrs?.['aria-hidden'])) {
   const hidden=n.children.find(x=>x.attrs?.['aria-hidden']);const visible=n.children.find(x=>x.tag&&!x.attrs?.['aria-hidden']);
   return `<div className=${stringify(cls)}><WordReveal text={${stringify(textContent(hidden))}} style={${stringify(styleObject(visible.attrs.style))} as CSSProperties} /></div>`;
  }
  const variantNodes=n.children.filter(x=>typeof x!=='string');
  return `<div className=${stringify(cls)}>${variantNodes.map(v=>{const hidden=v.children.find(x=>x.attrs?.['aria-hidden']);const visible=v.children.find(x=>!x.attrs?.['aria-hidden']);if(!hidden||!visible)return '';return `<div className=${stringify(v.attrs.class)}><WordReveal text={${stringify(textContent(hidden))}} style={${stringify(styleObject(visible.attrs.style))} as CSSProperties} /></div>`}).join('\n')}</div>`;
 }
 if(n.tag==='section'&&!cls&&n.children.some(x=>x.tag==='ul')){
  const ul=n.children.find(x=>x.tag==='ul');
  const items=ul.children.filter(x=>typeof x!=='string');
  const unique=[];const seen=new Set();for(const item of items){const key=textContent(item)+JSON.stringify(item).match(/framerusercontent[^?]+/)?.[0];if(!seen.has(key)){unique.push(item);seen.add(key);}}
  return `<Ticker style={${stringify({...styleObject(a.style),opacity:1})} as CSSProperties}>${unique.map(x=>jsx(x,depth+1)).join('\n')}</Ticker>`;
 }
 let tag=n.tag,extra='';const style=styleObject(a.style);let scroll=scrollClasses[cls];
 if(scroll){tag='ScrollElement';extra+=` as=${stringify(n.tag)} effect=${stringify(scroll)}`;delete style.transform;delete style.opacity;delete style.willChange;}
 else if((Number(style.opacity)===0||Number(style.opacity)===.001)&&cls){tag='Reveal';extra+=` as=${stringify(n.tag)} fromY={${Number(style.transform?.match(/translateY\((-?[\d.]+)px\)/)?.[1]||0)}} fromScale={${Number(style.transform?.match(/scale\(([\d.]+)\)/)?.[1]||1)}}`;delete style.opacity;delete style.transform;delete style.willChange;}
 else if(style.opacity==='0'||style.opacity==='0.001'){style.opacity='1';}
 if(cls.includes('framer-FecZN'))a.class+=' line-link';
 if(n.tag==='section'&&name&&!a.id&&!['Overlap Detailing','Desktop','L','M','S'].includes(name))a.id=name.toLowerCase();
 if(n.tag==='footer')a.id='contact';
 let attrs='';
 for(let [k,v]of Object.entries(a)){
  if(['name','as','parentsize','_constraints','rotation','shadows'].includes(k)||k==='style'||k==='data-framer-appear-id'||k==='data-framer-name'||k==='data-highlight'||k==='data-styles-preset'||k==='data-code-component-plugin-id'||k==='data-framer-root'||k==='data-selection'||k==='data-framer-generated')continue;
  if(k.startsWith('on')||['dj4llxuzs','osmq6y_vp','vtydp70ma','zd3juqy4d'].includes(k))continue;
  if(k==='href'&&v.startsWith('./'))v=v==='./'?'/':new URL(v,'https://diverse-heart-427907.framer.app/').href;
  if(k==='src'||k==='poster')v=localize(v);
  if(k==='srcset')v=v.split(',').map(candidate=>{const [url,width]=candidate.trim().split(' ');return (renditions[url]||assets[url.split('?')[0]]||url)+' '+width;}).join(',');
  if(k==='src'&&n.tag==='img'){/* Original full-resolution asset is served locally. */}
  k=props[k]||((!k.startsWith('data-')&&!k.startsWith('aria-')&&k.includes('-'))?camel(k):k);
  if(['autoplay','loop','muted','controls','playsInline'].includes(k)){attrs+=` ${k}={true}`;continue;}
  attrs+=k==='tabIndex'?` ${k}={${Number(v)}}`:` ${k}=${stringify(v)}`;
 }
 if(n.tag==='video')attrs+=' autoPlay={true}';
 if(n.tag==='img'&&!a.loading)attrs+=` loading=${stringify(cls.includes('hero')||a.src?.includes('QnW8')||a.src?.includes('vHwY')?'eager':'lazy')}`;
 if(Object.keys(style).length)attrs+=` style={${stringify(style)} as CSSProperties}`;
 const children=n.children.map(x=>jsx(x,depth+1)).filter(Boolean);
 return `<${tag}${attrs}${extra}${voids.has(n.tag)?' />':children.length?'>'+children.join('\n')+`</${tag}>`:' />'}`;
}
const groups=[];const children=root.children.filter(x=>typeof x!=='string');
for(let i=0;i<children.length;i++){const n=children[i];if(n.attrs.class==='framer-exxa4g-container')continue;if(n.attrs.class?.includes('ssr-variant')){const name=i<5?'Clients':'ContactBanner';if(!groups.some(x=>x.name===name))groups.push({name,nodes:children.slice(i,i+3)});i+=2;}else groups.push({name:n.attrs['data-framer-name'],nodes:[n]});}
groups.push({name:'FAQ',nodes:[template.children.find(x=>x.attrs?.class==='framer-yasw1o-container')]},{name:'Footer',nodes:[template.children.find(x=>x.attrs?.class==='framer-1wcypow-container')]});
for(const g of groups){fs.writeFileSync(`components/sections/${g.name}.tsx`,`import type { CSSProperties } from 'react';\nimport { Reveal, ScrollElement, WordReveal, Ticker } from '../ui/Animation';\nimport { Header } from '../ui/Header';\nimport { FAQList } from '../ui/FAQList';\nimport { TestimonialCarousel } from '../ui/TestimonialCarousel';\n\nexport function ${g.name}() {\n return <>\n${g.nodes.map(x=>jsx(x)).join('\n')}\n</>;\n}\n`);}
fs.writeFileSync('app/page.tsx',groups.map(g=>`import { ${g.name} } from '../components/sections/${g.name}';`).join('\n')+`\nexport default function Home() { return <main id="main"><h1 className="sr-only">Fuel X — A journey through my work, projets and creative universe.</h1><div className="framer-aes0D framer-jyp14"><div className="framer-9GCwl framer-fzWjV framer-It55S framer-72rtr7" style={{display:'contents'}}>\n${groups.slice(0,-2).map(g=>`<${g.name} />`).join('\n')}\n</div><FAQ /><Footer /></div></main>; }\n`);
console.log('Generated sections:',groups.map(x=>x.name).join(', '));
