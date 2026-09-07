'use client';

import { Children, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, type MotionValue } from 'motion/react';

const easing = [0.44, 0, 0.34, 0.98] as const;
type ElementProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
  as?: 'div' | 'section' | 'header' | 'a' | 'footer';
};

export function Reveal({ as = 'div', fromY = 0, fromScale = 1, style, ...props }: ElementProps & {fromY?: number; fromScale?: number}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;
  return <Tag {...props} style={style} initial={reduced ? false : {opacity: 0, y: fromY, scale: fromScale}}
    whileInView={{opacity: 1, y: 0, scale: 1}} viewport={{once: true, amount: 0}}
    transition={{duration: 0.8, ease: easing}} />;
}

/** Values recovered from the published page's transform targets. */
export function ScrollElement({ as = 'div', effect, style, ...props }: ElementProps & {effect: string}) {
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef=useRef<HTMLDivElement>(null);
  const card = effect.startsWith('card');
  useLayoutEffect(()=>{if(card)cardsRef.current=document.getElementById('cards') as HTMLDivElement;},[card]);
  const reduced = useReducedMotion();
  const {scrollYProgress} = useScroll({target: card?cardsRef:ref, offset: card?['start start','end start']:effect === 'overlap' ? ['start end', 'start 20%'] : ['start end', 'end start']});
  const scale = useTransform(scrollYProgress, [0, 1], card ? [1, 0.6 + Number(effect.at(-1)) * 0.1] : effect === 'zoom' ? [1.25, 1] : [1, 1]);
  const y = useTransform(scrollYProgress, [0, 1], effect === 'overlap' ? [0, -220] : effect === 'parallax' ? [0, 220] : effect === 'banner' ? [0, 1600] : card ? [0, -100] : [0, 0]);
  const skewY = useTransform(scrollYProgress, [0, 1], effect === 'overlap' ? [0, -7] : [0, 0]);
  const {scrollY} = useScroll();
  const globalParallax=useTransform(scrollY,value=>value*.1);
  const heroOpacity = useTransform(scrollY, [0, 1020], [1, 0]);
  const Tag = motion[as] as typeof motion.div;
  return <Tag ref={ref} {...props} style={{...style, ...(effect==='banner'?{opacity:.64}:{}), ...(reduced ? {} : {scale, y:effect==='parallax'||effect==='banner'?globalParallax:y, skewY, ...(effect === 'hero' ? {opacity: heroOpacity} : {})})}} />;
}

export function WordReveal({text, style}: {text: string; style: CSSProperties}) {
  const reduced = useReducedMotion();
  const measure=useRef<HTMLDivElement>(null);
  const wrapper=useRef<HTMLHeadingElement>(null);
  const [lines,setLines]=useState<string[]>([]);
  const scrollDriven=text.includes('Design-driven studio');
  const {scrollYProgress}=useScroll({target:wrapper,offset:['start end','end 50%']});
  useLayoutEffect(()=>{
    const element=measure.current;
    if(!element)return;
    let active=true;
    const calculate=()=>{
      if(!active || !element.offsetWidth || !element.firstChild)return;
      const node=element.firstChild;
      const range=document.createRange();
      const result:string[]=[];
      let lastY:number|undefined;
      let start=0;
      for(const match of text.matchAll(/\S+/g)){
        const index=match.index!;
        range.setStart(node,index);range.setEnd(node,index+match[0].length);
        const y=range.getBoundingClientRect().top;
        if(lastY!==undefined&&Math.abs(y-lastY)>2){result.push(text.slice(start,index));start=index;}
        lastY=y;
      }
      result.push(text.slice(start));
      setLines(previous=>JSON.stringify(previous)===JSON.stringify(result)?previous:result);
    };
    const observer=new ResizeObserver(calculate);observer.observe(element);
    document.fonts.ready.then(calculate);calculate();
    return ()=>{active=false;observer.disconnect();};
  },[text]);
  return <motion.h2 ref={wrapper} className="word-reveal" style={{...style, display:'block', whiteSpace:'pre-wrap', margin:0}}
    initial="hidden" whileInView="visible" viewport={{once:true, amount:0.12}}
    variants={{hidden:{}, visible:{transition:{staggerChildren:reduced ? 0 : 0.1, delayChildren:0.1}}}}>
    <span ref={measure} aria-hidden="true" style={{...style,display:'block',position:'absolute',visibility:'hidden',pointerEvents:'none',whiteSpace:'pre-wrap',width:'100%'}}>{text}</span>
    {lines.length ? lines.map((line,i)=><span key={i} style={{display:'block',overflow:'hidden',width:'100%',lineHeight:style.lineHeight}}>
      <RevealLine line={line} reduced={!!reduced} scrollDriven={scrollDriven} progress={scrollYProgress} index={i} count={lines.length} />
    </span>) : <span style={{visibility:'hidden'}}>{text}</span>}
  </motion.h2>;
}

function RevealLine({line,reduced,scrollDriven,progress,index,count}:{line:string;reduced:boolean;scrollDriven:boolean;progress:MotionValue<number>;index:number;count:number}) {
  const opacity=useTransform(progress,[index/count,(index+1)/count],[0.5,1]);
  return <motion.span style={{display:'inline-block',whiteSpace:'pre-wrap',fontWeight:500,fontVariationSettings:'"wght" 500',...(scrollDriven&&!reduced?{opacity}:{})}}
    variants={scrollDriven?undefined:{hidden:{y:reduced?0:70},visible:{y:0,transition:{duration:.7,ease:easing}}}}>{line}</motion.span>;
}

export function Ticker({children, style}: {children:ReactNode;style?:CSSProperties}) {
  const items=Children.toArray(children);
  return <section className="ticker" style={style} aria-label="Selected clients"><div className="ticker-track">
    {[0,1,2,3].map(copy=><ul key={copy} aria-hidden={copy>0 || undefined}>{items}</ul>)}
  </div></section>;
}
