'use client';

import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { faqItems } from './faq-data';

export function FAQList() {
  const [open, setOpen] = useState<Set<number>>(new Set());
  const id=useId();
  return <div className="faq-list">{faqItems.map((item,i)=><div className="faq-item" key={item.question}>
    <button type="button" aria-expanded={open.has(i)} aria-controls={`${id}-${i}`} onClick={()=>setOpen(previous=>{const next=new Set(previous);if(next.has(i))next.delete(i);else next.add(i);return next;})}>
      <span>{item.question}</span><span className={`faq-plus ${open.has(i)?'is-open':''}`} aria-hidden="true" />
    </button>
    <AnimatePresence initial={false}>{open.has(i)&&<motion.div id={`${id}-${i}`} initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} transition={{type:'spring',duration:.4,bounce:.2}} style={{overflow:'hidden'}}><p>{item.answer}</p></motion.div>}</AnimatePresence>
  </div>)}</div>;
}
