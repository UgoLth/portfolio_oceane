'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const links = [
  ['À PROPOS', '#about'], ['PROJETS', '#portfolio'],
  ['SAVOIR-FAIRE', '#services'], ['CONTACT', '#contact'],
];

export function Header() {
  const [open,setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const close=(event:KeyboardEvent)=>{if(event.key==='Escape'){setOpen(false);toggle.current?.focus();}};
    const outside=(event:PointerEvent)=>{if(!header.current?.contains(event.target as Node))setOpen(false);};
    document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside);
    return ()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);};
  },[]);
  return <motion.header ref={header} className={`site-header ${open?'is-open':''}`} initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}} transition={{duration:.8,ease:[.44,0,.34,.98]}}>
    <button ref={toggle} type="button" className="menu-toggle" aria-label={open?'Fermer le menu':'Ouvrir le menu'} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>
      <motion.span animate={{rotate:open?45:0,y:open?5:0}} /><motion.span animate={{rotate:open?-45:0,y:open?-5:0}} />
    </button>
    <AnimatePresence>{open&&<motion.nav id="main-navigation" aria-label="Navigation principale" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:.3}}>
      {links.map(([label,href],i)=><a key={label} href={href}>{label}<sup>0{i+1}</sup></a>)}
    </motion.nav>}</AnimatePresence>
  </motion.header>;
}
