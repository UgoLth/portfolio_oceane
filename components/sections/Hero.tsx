import type { CSSProperties } from 'react';
import { Reveal, ScrollElement, WordReveal, Ticker } from '../ui/Animation';
import { Header } from '../ui/Header';
import { FAQList } from '../ui/FAQList';
import { TestimonialCarousel } from '../ui/TestimonialCarousel';
import { withBasePath } from '../../lib/site-path';

function OceaneWordmark({ gradientId }: { gradientId: string }) {
 return <svg aria-label="Océane" role="img" viewBox="0 -30 1000 190" preserveAspectRatio="none" style={{"display":"block","width":"100%","height":"100%","overflow":"visible"} as CSSProperties}>
<defs><linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#ffffff" /><stop offset="30%" stopColor="#ffffff" /><stop offset="47%" stopColor="#dffbff" /><stop offset="63%" stopColor="#f7f4f4" /><stop offset="78%" stopColor="#ffd9d5" /><stop offset="100%" stopColor="#dffcff" /></linearGradient></defs>
<text x="500" y="137" textAnchor="middle" textLength="965" lengthAdjust="spacingAndGlyphs" fill={`url(#${gradientId})`} fontFamily="BDO Grotesk Variable, Arial, sans-serif" fontSize="180" fontWeight="900">OCÉANE</text>
</svg>;
}

export function Hero() {
 return <>
<ScrollElement className="framer-1u6a2tv" id="hero" as="section" effect="hero"><Reveal className="framer-1emrrf1" as="div" fromY={0} fromScale={1.2}><div data-framer-background-image-wrapper="true" style={{"position":"absolute","borderRadius":"inherit","cornerShape":"inherit","top":"0","right":"0","bottom":"0","left":"0"} as CSSProperties}><img decoding="async" width="735" height="1108" sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw" srcSet={withBasePath("/assets/images/hero-orchid-1024.jpg 679w,/assets/images/hero-orchid.jpg 735w")} src={withBasePath("/assets/images/hero-orchid.jpg")} alt="Women in Orange BG" loading="eager" style={{"display":"block","width":"100%","height":"100%","borderRadius":"inherit","cornerShape":"inherit","objectPosition":"center","objectFit":"cover"} as CSSProperties} /></div></Reveal>
<div className="ssr-variant"><div className="framer-wz3pqn-container"><Header /></div></div>
<div className="framer-14t40qu" />
<div className="framer-ej9q0"><div className="framer-1y7js4"><Reveal className="framer-1kj30u2" data-framer-component-type="RichTextContainer" as="div" fromY={10} fromScale={1}><p className="framer-text framer-styles-preset-q70fzl" dir="auto">{"Un voyage à travers mes silhouettes, mes recherches et mon univers créatif."}</p></Reveal>
<Reveal className="framer-kct57c" data-framer-component-type="RichTextContainer" as="div" fromY={10} fromScale={1}><p className="framer-text framer-styles-preset-q70fzl" dir="auto" style={{"--framer-text-color":"var(--token-33e01e0c-d060-494c-832f-507a8774ce40, rgba(255, 255, 255, 0.5))"} as CSSProperties}>{"DÉCOUVRIR MES PROJETS."}</p></Reveal></div>
<div className="ssr-variant"><Reveal className="framer-sg0uxd-container" as="div" fromY={0} fromScale={1}><a className="framer-FecZN framer-fzWjV framer-keg481 framer-v-keg481 framer-ymdtx1 line-link" href="#portfolio" style={{"opacity":"1"} as CSSProperties}><div className="framer-18o40ck"><div className="framer-o90du0" data-framer-component-type="RichTextContainer" style={{"--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","transform":"none"} as CSSProperties}><p className="framer-text framer-styles-preset-q70fzl">{"Découvrir "}</p></div>
<div className="framer-rdcev3"><div className="framer-1holemv" style={{"transform":"rotate(45deg)"} as CSSProperties}><div className="framer-1utgb4u" data-border="true" style={{"--border-bottom-width":"0px","--border-color":"var(--token-7d46519b-7ae3-4c0a-9383-88033d4deee8, rgb(255, 255, 255))","--border-left-width":"0px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","transform":"rotate(-45deg)"} as CSSProperties} />
<div className="framer-xpw0ph" data-border="true" style={{"--border-bottom-width":"0px","--border-color":"var(--token-7d46519b-7ae3-4c0a-9383-88033d4deee8, rgb(255, 255, 255))","--border-left-width":"0px","--border-right-width":"1px","--border-style":"solid","--border-top-width":"1px","transform":"rotate(-45deg)"} as CSSProperties} /></div></div></div>
<div className="framer-w1qwlz" style={{"backgroundColor":"var(--token-7d46519b-7ae3-4c0a-9383-88033d4deee8, rgb(255, 255, 255))"} as CSSProperties} /></a></Reveal></div></div>
<div className="framer-1g9p84c" style={{"willChange":"transform","opacity":"1","transform":"none"} as CSSProperties}><div className="framer-85s6dz"><Reveal className="framer-ymtnev" data-framer-component-type="RichTextContainer" as="div" fromY={10} fromScale={1}><p className="framer-text framer-styles-preset-q70fzl" dir="auto"><span className="framer-text" style={{"--framer-text-color":"var(--token-33e01e0c-d060-494c-832f-507a8774ce40, rgba(255, 255, 255, 0.5))"} as CSSProperties}>{"01/"}</span>
{" stylisme"}</p></Reveal>
<Reveal className="framer-1500qjj" data-framer-component-type="RichTextContainer" as="div" fromY={8} fromScale={1}><p className="framer-text framer-styles-preset-q70fzl" dir="auto">{"modélisme"}</p></Reveal>
<Reveal className="framer-10p4pga" data-framer-component-type="RichTextContainer" as="div" fromY={6} fromScale={1}><p className="framer-text framer-styles-preset-q70fzl" dir="auto">{"image"}</p></Reveal></div>
<div className="framer-w077df"><Reveal className="framer-1jqz5fp" as="div" fromY={0} fromScale={1}><div className="framer-14wylbx" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}><p className="framer-text framer-styles-preset-q70fzl" dir="auto">{"© 2026"}</p></div>
<div className="framer-1j9lrmp"><div className="framer-1vt0l42" />
<div className="framer-156gf0z" />
<div className="framer-10rwmyh" />
<div className="framer-3i9wv2" />
<div className="framer-1j2k5i9" />
<div className="framer-u6rpdz" />
<div className="framer-1ebsjag" />
<div className="framer-gmfoqm" />
<div className="framer-1aw76b5" />
<div className="framer-1tsq7hg" />
<div className="framer-1si5eme" /></div>
<div className="framer-12343im" data-framer-component-type="RichTextContainer" style={{"transform":"none"} as CSSProperties}><p className="framer-text framer-styles-preset-q70fzl">{"19'"}</p></div></Reveal>
<div className="ssr-variant hidden-6tact1"><Reveal className="framer-40utpw" as="div" fromY={170} fromScale={1}><OceaneWordmark gradientId="oceane-gradient-desktop" /></Reveal></div>
<div className="ssr-variant hidden-hl6v98 hidden-72rtr7"><Reveal className="framer-40utpw" as="div" fromY={30} fromScale={1}><OceaneWordmark gradientId="oceane-gradient-mobile" /></Reveal></div></div></div>
<Reveal className="framer-1bna2y5 hidden-hl6v98 hidden-6tact1" as="div" fromY={-100} fromScale={1}><div className="framer-18f0l7i" />
<div className="framer-1hpdv6l"><div className="framer-xegq1t" />
<div className="framer-cz1csi" style={{"transform":"rotate(90deg)"} as CSSProperties} /></div></Reveal>
<Reveal className="framer-7cb90 hidden-hl6v98 hidden-6tact1" as="div" fromY={100} fromScale={1}><div className="framer-1xbknat"><div className="framer-ye789l" />
<div className="framer-1xg0f98" style={{"transform":"rotate(90deg)"} as CSSProperties} /></div>
<div className="framer-zq8ko3" /></Reveal>
<Reveal className="framer-1mc9omt hidden-6tact1" as="div" fromY={-100} fromScale={1}><div className="framer-1s4e6ou" />
<div className="framer-1fu04z6"><div className="framer-17eq5vt" />
<div className="framer-162d41s" style={{"transform":"rotate(90deg)"} as CSSProperties} /></div></Reveal>
<Reveal className="framer-rz2mbh hidden-6tact1" as="div" fromY={100} fromScale={1}><div className="framer-1osbn22"><div className="framer-funbiz" />
<div className="framer-zm8a4a" style={{"transform":"rotate(90deg)"} as CSSProperties} /></div>
<div className="framer-6gvnx8" /></Reveal></ScrollElement>
</>;
}
