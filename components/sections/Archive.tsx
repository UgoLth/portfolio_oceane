import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { Reveal, ScrollElement } from '../ui/Animation';

export function Archive() {
  return (
    <section className="framer-1mqikni archive-section" id="archive">
      <section className="framer-1u94ioe" aria-hidden="true">
        <div className="framer-38ndun">
          <ScrollElement className="framer-1a3i3ex" as="div" effect="overlap" />
        </div>
      </section>

      <div className="archive-heading">
        <span className="archive-marker" aria-hidden="true" />
        <span>(04)</span>
        <span>(Projets)</span>
        <span className="archive-year">© 2026</span>
      </div>

      <div className="archive-index">
        {projects.map((project, position) => (
          <Reveal key={project.slug} as="div" fromY={18} fromScale={1}>
            <Link
              className={`archive-row archive-row-${project.slug}`}
              href={`/projets/${project.slug}`}
              aria-label={`Découvrir le projet ${project.title}`}
            >
              <span className="archive-row-number">{String(position + 1).padStart(2, '0')}</span>
              <span className="archive-row-title">{project.title}</span>

              {project.cover ? (
                <span className="archive-row-preview">
                  <Image
                    src={project.cover}
                    alt=""
                    width={240}
                    height={160}
                    sizes="(max-width: 809px) 72px, 108px"
                  />
                </span>
              ) : (
                <span className="archive-row-preview archive-row-document" aria-hidden="true">
                  <span>PDF</span>
                </span>
              )}

              <span className="archive-row-arrow" aria-hidden="true">↗</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
