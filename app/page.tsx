import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Clients } from '../components/sections/Clients';
import { Portfolio } from '../components/sections/Portfolio';
import { Services } from '../components/sections/Services';
import { Archive } from '../components/sections/Archive';
import { ContactBanner } from '../components/sections/ContactBanner';
import { Stats } from '../components/sections/Stats';
import { Article } from '../components/sections/Article';
import { FAQ } from '../components/sections/FAQ';
import { Footer } from '../components/sections/Footer';
export default function Home() { return <main id="main"><h1 className="sr-only">Océane Lemaître — Portfolio de stylisme, modélisme et création textile.</h1><div className="framer-aes0D framer-jyp14"><div className="framer-9GCwl framer-fzWjV framer-It55S framer-72rtr7" style={{display:'contents'}}>
<Hero />
<About />
<Portfolio />
<Services />
<Archive />
<Clients />
<ContactBanner />
<Stats />
<Article />
</div><FAQ /><Footer /></div></main>; }
