import Image from 'next/image';
import type { Project, ProjectImage } from '../../data/projects';
import { withBasePath } from '../../lib/site-path';

function ProjectFigure({
  image,
  number,
  className = '',
  sizes = '(max-width: 809px) 100vw, 60vw',
}: {
  image: ProjectImage;
  number: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <figure className={`project-visual ${className}`}>
      <div className="project-visual-frame">
        <Image src={image.src} alt={image.alt} width={1800} height={1800} sizes={sizes} />
      </div>
      <figcaption>
        <span>{number}</span>
        <span>{image.alt}</span>
      </figcaption>
    </figure>
  );
}

function DapShowcase({ project }: { project: Project }) {
  const [body, looks, volume] = project.images;

  return (
    <section className="project-composition composition-dap" aria-label="Planches du projet DAP">
      <div className="composition-heading">
        <span>Recherches</span>
        <span>Silhouette / volume / construction</span>
      </div>
      <div className="dap-grid">
        <ProjectFigure image={body} number="01" className="dap-body" sizes="(max-width: 809px) 100vw, 33vw" />
        <ProjectFigure image={looks} number="02" className="dap-looks" sizes="(max-width: 809px) 100vw, 33vw" />
        <ProjectFigure image={volume} number="03" className="dap-volume" sizes="(max-width: 809px) 100vw, 33vw" />
      </div>
    </section>
  );
}

function TechnicalShowcase({ project }: { project: Project }) {
  return (
    <section className="project-composition composition-technical" aria-labelledby="technical-document">
      <aside className="technical-aside">
        <span id="technical-document">Document 01</span>
        <p>Tailleur</p>
        <div className="technical-keywords">
          <span>Construction</span>
          <span>Matières</span>
          <span>Finitions</span>
        </div>
        <a href={project.pdf} target="_blank" rel="noreferrer">Ouvrir le PDF ↗</a>
      </aside>
      <div className="technical-document">
        <div className="technical-document-bar">
          <span>Fiche technique</span>
          <span>01 / PDF</span>
        </div>
        <a className="technical-image-link" href={project.pdf} target="_blank" rel="noreferrer">
          <Image
            src={withBasePath("/assets/projects/fiche-technique/fiche-technique-tailleur.png")}
            alt="Fiche technique complète du projet tailleur"
            width={1588}
            height={1126}
            sizes="(max-width: 809px) 100vw, 82vw"
          />
        </a>
      </div>
    </section>
  );
}

function RetouchShowcase({ project }: { project: Project }) {
  return (
    <section className="project-composition composition-retouch" aria-label="Comparaisons avant et après retouche photo">
      <div className="composition-heading">
        <span>Avant / Après</span>
        <span>Retouche photo / transformations</span>
      </div>
      <div className="retouch-comparisons">
        {project.comparisons?.map((comparison, index) => (
          <article className="retouch-comparison" key={comparison.before.src} aria-labelledby={`retouch-comparison-${index}`}>
            <header className="retouch-comparison-heading">
              <span>({String(index + 1).padStart(2, '0')})</span>
              <h2 id={`retouch-comparison-${index}`}>{comparison.title}</h2>
            </header>
            <div className="retouch-comparison-images">
              {([
                { label: 'Avant', image: comparison.before },
                { label: 'Après', image: comparison.after },
              ]).map(({ label, image }) => (
                <figure className="retouch-comparison-figure" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={comparison.width}
                    height={comparison.height}
                    unoptimized
                    sizes="(max-width: 599px) calc(100vw - 48px), (max-width: 1219px) 45vw, 554px"
                  />
                  <figcaption>{label}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function CloShowcase({ project }: { project: Project }) {
  return (
    <section className="project-composition composition-clo" aria-label="Modélisations CLO3D">
      <div className="composition-heading">
        <span>Modélisations</span>
        <span>Silhouettes / volumes / matières</span>
      </div>
      <div className="clo-grid">
        {project.images.map((image, index) => (
          <ProjectFigure
            key={image.src}
            image={image}
            number={String(index + 1).padStart(2, '0')}
            className="clo-grid-item"
            sizes="(max-width: 809px) 50vw, 33vw"
          />
        ))}
      </div>
    </section>
  );
}

export function ProjectShowcase({ project }: { project: Project }) {
  if (project.slug === 'dap') return <DapShowcase project={project} />;
  if (project.slug === 'fiche-technique') return <TechnicalShowcase project={project} />;
  if (project.slug === 'retouche-photo') return <RetouchShowcase project={project} />;
  return <CloShowcase project={project} />;
}
