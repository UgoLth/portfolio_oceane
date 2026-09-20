import Image from 'next/image';
import Link from 'next/link';
import type { FeaturedProject, FeaturedProjectImage } from '../../data/featured-projects';
import { Footer } from '../sections/Footer';
import { Reveal } from '../ui/Animation';

type FeaturedProjectPageProps = {
  project: FeaturedProject;
};

function ProjectRailImage({ image, quality }: { image: FeaturedProjectImage; quality?: number }) {
  return (
    <Reveal as="figure" className="spotlight-rail-item" fromY={48}>
      <div className={`spotlight-rail-image${image.fit === 'contain' ? ' spotlight-rail-image-contain' : ''}`}>
        <Image src={image.src} alt={image.alt} fill quality={quality} sizes="(max-width: 810px) 100vw, 50vw" />
      </div>
    </Reveal>
  );
}

export function FeaturedProjectPage({ project }: FeaturedProjectPageProps) {
  const galleryImages = project.galleryImages ?? project.images;

  return (
    <main className={`spotlight-project spotlight-project--${project.slug}`}>
      <header className="spotlight-hero" id="apercu">
        <Image className="spotlight-hero-background" src={project.heroImage} alt="" fill priority sizes="100vw" />
        <div className="spotlight-hero-shade" />

        <div className="spotlight-topbar">
          <Link href="/#portfolio">← Projets</Link>
          <Link href="/" className="spotlight-signature">Océane Lemaître</Link>
        </div>

        <span className="spotlight-cross spotlight-cross-left" aria-hidden="true" />
        <div className="spotlight-hero-title">
          <Reveal fromY={36}><h1>{project.title}</h1></Reveal>
        </div>
        <span className="spotlight-cross spotlight-cross-right" aria-hidden="true" />

        <div className="spotlight-hero-meta">
          <p>{project.discipline}</p>
          <p>{project.description}</p>
          <p>© {project.year}</p>
        </div>
      </header>

      <section className="spotlight-introduction" aria-labelledby="project-statement">
        <div className="spotlight-section-label">
          <span>({project.index})</span><span>Présentation</span><span>{project.year}</span>
        </div>
        <Reveal fromY={70}><h2 id="project-statement">{project.statement}</h2></Reveal>
      </section>

      <section className="spotlight-process" id="design" aria-labelledby="design-title">
        <div className="spotlight-section-label">
          <span>(02)</span><span id="design-title">{project.designTitle ?? 'Design & recherche'}</span><span>{project.title}</span>
        </div>
        <div className="spotlight-process-grid">
          <div className="spotlight-process-copy">
            <Reveal className="spotlight-process-row" fromY={34}>
              <h3>Recherche</h3>
              <p>{project.designText}</p>
            </Reveal>
            <Reveal className="spotlight-process-row" id="construction" fromY={34}>
              <h3>{project.constructionTitle ?? 'Développement'}</h3>
              <p>{project.constructionText}</p>
            </Reveal>
            <Reveal className="spotlight-process-row spotlight-process-result" fromY={34}>
              <h3>Projet</h3>
              <dl>
                <div><dt>Réalisation</dt><dd>{project.status}</dd></div>
              </dl>
            </Reveal>
          </div>
          <div className="spotlight-image-rail" id="images">
            {galleryImages.map((image, index) => (
              <ProjectRailImage image={image} quality={project.slug === 'magazine' ? 95 : undefined} key={`${image.src}-${index}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="spotlight-download" aria-label={`Téléchargement du projet ${project.title}`}>
        <div className="spotlight-download-inner">
          <span>(PDF)</span>
          <p>Découvrez le projet dans son intégralité.</p>
          <a href={project.pdf} download>
            <span>Télécharger le PDF</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
