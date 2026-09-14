import { Ticker } from '../ui/Animation';

const software = [
  { name: 'Photoshop', mark: 'Ps', slug: 'photoshop' },
  { name: 'Illustrator', mark: 'Ai', slug: 'illustrator' },
  { name: 'CLO3D', mark: 'C3', slug: 'clo3d' },
  { name: 'Lectra', mark: 'L', slug: 'lectra' },
  { name: 'Canva', mark: 'Ca', slug: 'canva' },
  { name: 'CapCut', mark: 'Cc', slug: 'capcut' },
  { name: 'Modaris', mark: 'Md', slug: 'modaris' },
];

export function Clients() {
  return (
    <section className="software-ticker-section" aria-labelledby="software-ticker-title">
      <h2 id="software-ticker-title" className="sr-only">Logiciels maîtrisés</h2>
      <Ticker ariaLabel="Logiciels maîtrisés par Océane Lemaître">
        {software.map((item) => (
          <li className={`software-card software-card-${item.slug}`} key={item.slug}>
            <span className="software-mark" aria-hidden="true">{item.mark}</span>
            <span className="software-name">{item.name}</span>
          </li>
        ))}
      </Ticker>
    </section>
  );
}
