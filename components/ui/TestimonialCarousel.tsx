'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WordReveal } from './Animation';

const slides = [
  { quote:'inutile',name:'inutile',role:'inutile',image:'man-hoodie.png',logo:'image-20.svg',portrait:'women-side-pose-512.png',projects:'inutile',satisfaction:'inutile' },
  { quote:'inutile',name:'inutile',role:'inutile',image:'testimonial-overshirt.png',logo:'testimonial-logo-manila.png',portrait:'testimonial-gracia.png',projects:'inutile',satisfaction:'inutile' },
  { quote:'inutile',name:'inutile',role:'inutile',image:'testimonial-woman.png',logo:'testimonial-logo-basel.png',portrait:'testimonial-team.png',projects:'inutile',satisfaction:'inutile' },
];

export function TestimonialCarousel({className}:{className:string}) {
  const [index,setIndex]=useState(0);
  const slide=slides[index];
  const small=className.includes('framer-v-1pqs81');
  const tablet=className.includes('framer-v-1xvwr45');
  const fontSize=small?30:tablet?38:56;
  const go=(direction:number)=>setIndex((index+direction+slides.length)%slides.length);
  return <div className={className+' native-testimonial'} style={{width:'100%'}} aria-roledescription="carousel" aria-label="Contenu inutile">
    <div className="framer-u2xp06">
      {!small&&<div className="framer-x2rok7 testimonial-image">
        <AnimatePresence initial={false}><motion.img key={slide.image} src={'/assets/images/'+slide.image} alt={index===0?'Man Hoodie':index===1?'Man Overshirt':'Woman'} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:.5}} /></AnimatePresence>
        <img className="testimonial-logo" src={'/assets/images/'+slide.logo} alt="" />
      </div>}
      <div className="framer-f0yedb">
        <button className="framer-p52sbr testimonial-arrow" type="button" aria-label="Précédent" onClick={()=>go(-1)}><svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="m7 1-6 6 6 6" stroke="currentColor" strokeWidth="1.8" /></svg></button>
        <button className="framer-1f4818y testimonial-arrow" type="button" aria-label="Suivant" onClick={()=>go(1)}><svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="m1 1 6 6-6 6" stroke="currentColor" strokeWidth="1.8" /></svg></button>
      </div>
    </div>
    <div className="framer-x3rwi6">
      <div className="framer-vrt5e3"><div className="framer-aawy4t-container">
        <WordReveal key={index} text={' '.repeat(25)+slide.quote} style={{width:'100%',position:'relative',color:'#000',fontFamily:'"BDO Grotesk Variable", sans-serif',fontSize,fontStyle:'normal',fontWeight:1000,letterSpacing:small?-1.1:tablet?-1.2:-1.7,lineHeight:fontSize+'px',textAlign:'left'}} />
      </div></div>
      <div className="framer-1233k5t" style={{backgroundColor:'rgba(0,0,0,.1)'}} />
      <div className="framer-39qqj8" aria-live="polite">
        <div className="framer-13ii7z1 testimonial-user">
          <div className="framer-rgtkst"><motion.img key={slide.portrait} src={'/assets/images/'+slide.portrait} alt="" initial={{scale:1.25}} animate={{scale:1}} transition={{duration:.7}} /></div>
          <div className="framer-1pr9s5y"><div className="framer-1bycjc0"><p className="framer-text framer-styles-preset-q70fzl">{slide.name}</p><p className="framer-text framer-styles-preset-152twjm testimonial-role">{slide.role}</p></div></div>
        </div>
        <TestimonialStat value={slide.projects} label="inutile" detail="inutile" className="framer-1ltnmqs" />
        <TestimonialStat value={slide.satisfaction} label="inutile" detail="inutile" className="framer-vwbrfv" />
      </div>
    </div>
  </div>;
}

function TestimonialStat({value,label,detail,className}:{value:string;label:string;detail:string;className:string}) {
  return <div className={className}><div style={{height:38,overflow:'hidden',width:'100%'}}><motion.h6 key={value} initial={{y:38}} animate={{y:0}} transition={{duration:.5}} className="framer-text framer-styles-preset-gftg2f">{value}</motion.h6></div><div style={{display:'flex',flexDirection:'column',gap:2,width:'100%'}}><p className="framer-text framer-styles-preset-152twjm">{label}</p><p className="framer-text framer-styles-preset-152twjm testimonial-role">{detail}</p></div></div>;
}
