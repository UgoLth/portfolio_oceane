import Image from 'next/image';
import type { Project, ProjectImage } from '../../data/projects';

function ProjectFigure({
  image,
  number,
  className = '',
  sizes = '(max-width: 809px) 100vw, 60vw',
  showCaption = true,
}: {
  image: ProjectImage;
  number: string;
  className?: string;
  sizes?: string;
  showCaption?: boolean;
}) {
  return (
    <figure className={`project-visual ${className}`}>
      <div className="project-visual-frame">
        <Image src={image.src} alt={image.alt} width={1800} height={1800} sizes={sizes} />
      </div>
      {showCaption && <figcaption>
        <span>{number}</span>
        <span>{image.alt}</span>
      </figcaption>}
    </figure>
  );
}

function DapShowcase({ project }: { project: Project }) {
  return (
    <section className="project-composition composition-dap" aria-label="Planches du projet DAP">
      <div className="composition-heading">
        <span>Recherches</span>
        <span>Silhouette / volume / construction</span>
      </div>
      <div className="dap-grid">
        {project.images.map((image, index) => (
          <ProjectFigure
            key={image.src}
            image={image}
            number={String(index + 1).padStart(2, '0')}
            sizes="(max-width: 809px) 100vw, 33vw"
            showCaption={false}
          />
        ))}
      </div>
    </section>
  );
}

function TechnicalShowcase({ project }: { project: Project }) {
  const documents = project.documents ?? [];

  return (
    <div className="technical-documents">
      {documents.map((document, index) => (
        <section
          key={document.image.src}
          className="project-composition composition-technical"
          aria-labelledby={`technical-document-${index}`}
        >
          <aside className="technical-aside">
            <span>Document {String(index + 1).padStart(2, '0')}</span>
            <h2 id={`technical-document-${index}`}>{document.title}</h2>
            <div className="technical-keywords">
              {document.topics.map((topic) => <span key={topic}>{topic}</span>)}
            </div>
            <a href={document.image.src} target="_blank" rel="noreferrer">Agrandir le document ↗</a>
          </aside>
          <div className="technical-document">
            <div className="technical-document-bar">
              <span>{document.title}</span>
              <span>{String(index + 1).padStart(2, '0')} / {String(documents.length).padStart(2, '0')}</span>
            </div>
            <a
              className="technical-image-link"
              href={document.image.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Agrandir le document : ${document.title}`}
            >
              <Image
                src={document.image.src}
                alt={document.image.alt}
                width={2600}
                height={1839}
                sizes="(max-width: 809px) 100vw, 82vw"
              />
            </a>
          </div>
        </section>
      ))}
    </div>
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

function ModelismeShowcase({ project }: { project: Project }) {
  return (
    <section className="project-composition composition-modelisme" aria-label="Réalisations et recherches de modélisme">
      <div className="composition-heading">
        <span>Pièces & recherches</span>
        <span>Patronage / toile / construction</span>
      </div>
      <div className="modelisme-grid">
        {project.images.map((image, index) => (
          <ProjectFigure
            key={image.src}
            image={image}
            number={String(index + 1).padStart(2, '0')}
            className="modelisme-grid-item"
            sizes="(max-width: 599px) 100vw, (max-width: 809px) 50vw, 33vw"
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
  if (project.slug === 'modelisme') return <ModelismeShowcase project={project} />;
  return <CloShowcase project={project} />;
}
